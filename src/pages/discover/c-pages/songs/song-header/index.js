import React, { memo, useEffect,useState } from "react";
import { SongHaederWrapper } from "./style";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getSongCategorye } from "../store/actionCreator";
import { useDispatch } from "react-redux";
import LJPopUpHeader from '../pop-up/index'

export default memo(function LJSongHeader() {
  const [isShow,setisShow] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongCategorye());
  }, [dispatch]);
  // console.log(state);
  const handleCategoryChange = () => {
    setisShow(!isShow)
  };
  return (
    <SongHaederWrapper>
      <div className="header">
        <div className="header-left">
          <span className="language">华语</span>
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
