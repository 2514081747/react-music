import React, { memo, useEffect,useState } from "react";
import { SongHaederWrapper } from "./style";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getSongCategorye,getSongCategoryListByName,ChangeSongCategoryNameAction } from "../store/actionCreator";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import LJPopUpHeader from '../pop-up/index'

export default memo(function LJSongHeader() {
  const [isShow,setisShow] = useState(false)
  const [currentName] = useState('全部')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongCategorye());
    dispatch(getSongCategoryListByName(currentName))
    dispatch(ChangeSongCategoryNameAction(currentName))
  }, [dispatch,currentName]);
  // console.log(state);
  const state = useSelector((state) => ({
    songCategoryName:state.song.songCategoryName
  }),shallowEqual)
  const handleCategoryChange = () => {
    setisShow(!isShow)
  };
  return (
    <SongHaederWrapper>
      <div className="header">
        <div className="header-left">
          <span className="language">{state.songCategoryName}</span>
          <Button
            className="category"
            onClick={(e) => handleCategoryChange()}
            icon={<DownOutlined />}
            
          >
            选择分类
          </Button>
        </div>
        <div className="header-right">
          <Button type="primary" danger size="small">
            热门
          </Button>
        </div>
      </div>
      {
        isShow ? <LJPopUpHeader></LJPopUpHeader> : ''
      }
    </SongHaederWrapper>
  );
});
