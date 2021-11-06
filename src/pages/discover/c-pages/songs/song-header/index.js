import React, { memo, useEffect } from "react";
import { SongHaederWrapper } from "./style";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getSongCategorye } from "../store/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default memo(function LJSongHeader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongCategorye());
  }, [dispatch]);
  const state = useSelector((state) => ({
    songCategory: state.song.songCategory,
  }));
  console.log(state);
  const handleCategoryChange = () => {};
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
    </SongHaederWrapper>
  );
});
