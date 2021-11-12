import React, { memo } from "react";
import { RanWrapper } from "./style";
import { PlayCircleOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { getSongDetailfn } from "../../pages/player/store/actionCreator";
import { useDispatch } from "react-redux";

export default memo(function LJRank(props) {
  const { list } = props;
  const { coverImgUrl, tracks = [] } = list;
  const dispatch = useDispatch();
  const player = (id) => {
    console.log(id)
    // 根据id获取歌曲详情
    dispatch(getSongDetailfn(id));
  };
  return (
    <RanWrapper>
      <div className="header">
        <div className="image">
          <img className="img" src={coverImgUrl}></img>
        </div>
        <div className="info">
          <a href="/todo">{list.name}</a>
          <div className="icon">
            <PlayCircleOutlined
              style={{ fontSize: "20px", color: "rgb(193,193,193)" }}
            />
            <PlusSquareOutlined
              style={{
                fontSize: "20px",
                color: "rgb(193,193,193)",
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="rank">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="item">
              <span className="index">{index + 1}</span>
              <a href="/todo" className="name">
                {item.name}
              </a>
              <div className="operate">
                <button
                  className="btn sprite_02 play"
                  onClick={(e) => player(item.id)}
                ></button>
                <button className="btn sprite_icon2 addto"></button>
                <button className="btn sprite_02 favor"></button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="more">
        <a href="/todo">更多&gt;</a>
      </div>
    </RanWrapper>
  );
});
