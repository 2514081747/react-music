import React, { memo, useRef, useState, useEffect } from "react";
import {
  PlayerControlWrapper,
  PlayerControlCenter,
  PlayerControlLeft,
  PlayerControlRight,
} from "./style";
import {
  CaretRightOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  PlusCircleOutlined,
  VerticalAlignTopOutlined,
  CustomerServiceOutlined,
  SwapOutlined,
  ContainerOutlined,
  // PauseCircleOutlined,
} from "@ant-design/icons";
import { Slider, message } from "antd";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import moment from "moment";
import { getPlayUrl } from "../../../utils/formatUtil";
import {parseLyric} from '../../../utils/lrc-parse'
import { getSongLyric } from "../store/actionCreator";

export default memo(function LJPlayerControl() {
  const audioRef = useRef();
  const [currentSongUrl, setUrl] = useState();
  // const [isPlay, setIsplay] = useState(false);
  let [progress, setProgress] = useState(0);
  let [currentData, setCurrentData] = useState(0);
  let [currentLyric,srtLyric] = useState('')
  const dispatch = useDispatch();

  const state = useSelector(
    (state) => ({
      songDetail: state.player.songDetail,
      lyric: state.player.lyric,
    }),
    shallowEqual
  );
  useEffect(() => {
    let id = state.songDetail.songs ? state.songDetail.songs[0].id : 1891469546;
    dispatch(getSongLyric(id));
  }, [dispatch]);
  console.log(state.lyric);


  
  const playMusic = (id) => {
    const musicUrl = getPlayUrl(id);
    setUrl(musicUrl);
    audioRef.current.play();
    console.log(audioRef.current);
  };
  const timeUpdate = (e) => {
    let currentTime = e.target.currentTime;
    setCurrentData(e.target.currentTime);
    progress = ((currentTime * 1000) / state.songDetail.songs[0].dt) * 100;
    setProgress(progress);
    let lrcLength = state.lyric.length;
    
    for (var i = 0; i < lrcLength; i++) {
      const lrcTime = state.lyric[i].time;
      if (currentTime * 1000 < lrcTime) {
        break
      }
    }
    const finalIndex = i - 1;
    // console.log(finalIndex)
    
    message.open({
      content: state.lyric[finalIndex].content,
      key: "lyric",
      duration: 0,
      className: 'lyric-message',
    })
  };
  const sliderChange = (value) => {
    setProgress(value);
  };

  const sliderAfterChange = (e) => {
    console.log(e);
  };
  return (
    <PlayerControlWrapper className="wrap-v2">
      <PlayerControlLeft>
        <StepBackwardOutlined className="back" />
        <CaretRightOutlined
          className="play"
          onClick={(e) => playMusic(state.songDetail.songs[0].id)}
        />

        <StepForwardOutlined className="forward" />
      </PlayerControlLeft>

      <PlayerControlCenter className="center">
        <img
          className="avator"
          src={
            state.songDetail.songs ? state.songDetail.songs[0].al.picUrl : ""
          }
        ></img>
        <div className="centerright">
          <div className="name">
            <span className="songName">
              {state.songDetail.songs ? state.songDetail.songs[0].name : ""}
            </span>
            <span className="singer">
              {state.songDetail.songs
                ? state.songDetail.songs[0].ar[0].name
                : ""}
            </span>
          </div>
          <Slider
            value={progress}
            onChange={sliderChange}
            onAfterChange={sliderAfterChange}
          />
          <div className="time">
            <span>{moment(currentData * 1000).format("mm:ss")} /</span>
            <span className="alltime">
              {state.songDetail.songs
                ? moment(state.songDetail.songs[0].dt).format("mm:ss")
                : ""}
            </span>
          </div>
        </div>
      </PlayerControlCenter>
      <PlayerControlRight className="right">
        <PlusCircleOutlined className="icon" />
        <VerticalAlignTopOutlined className="icon" />
        <CustomerServiceOutlined className="icon" />
        <SwapOutlined className="icon" />
        <ContainerOutlined className="icon" />
      </PlayerControlRight>
      <audio
        src={currentSongUrl}
        ref={audioRef}
        onTimeUpdate={timeUpdate}
      ></audio>
    </PlayerControlWrapper>
  );
});
