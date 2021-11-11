import React, { memo, useEffect, useState } from "react";
import { LJPopUpWarpper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  GlobalOutlined,
  ProjectOutlined,
  AlertOutlined,
  MehOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import {
  getSongCategoryListByName,
  ChangeSongCategoryNameAction,
} from "../store/actionCreator";

export default memo(function LJSongHeaderPopUp() {
  const [currentName, setCurrentName] = useState("全部");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ChangeSongCategoryNameAction(currentName));
    dispatch(getSongCategoryListByName(currentName));
  }, [dispatch,currentName]);
  const state = useSelector((state) => ({
    songCategory: state.song.songCategory,
  }));
  const sub1 = state.songCategory.sub.filter((item) => {
    return item.category == 0;
  });
  const sub2 = state.songCategory.sub.filter((item) => {
    return item.category == 1;
  });
  const sub3 = state.songCategory.sub.filter((item) => {
    return item.category == 2;
  });
  const sub4 = state.songCategory.sub.filter((item) => {
    return item.category == 3;
  });
  const sub5 = state.songCategory.sub.filter((item) => {
    return item.category == 4;
  });
  
  const itemClick = (name) => {
    // dispatch(getSongCategoryListByName(name));
    console.log(name)
    if(name){
      setCurrentName(name);
    }
   
  };
  return (
    <LJPopUpWarpper>
      <div className="triangle"></div>
      <div className="top-header">
        <div className="allStyle" onClick={(e) => itemClick("全部")}>
          全部风格
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          {Object.values(state.songCategory.categories).map((item, index) => {
            if (index === 0) {
              return (
                <div>
                  <GlobalOutlined className="icon"></GlobalOutlined>
                  <span>{item}</span>
                </div>
              );
            } else if (index === 1) {
              return (
                <div>
                  <ProjectOutlined className="icon" />
                  <span>{item}</span>
                </div>
              );
            } else if (index === 2) {
              return (
                <div>
                  <AlertOutlined className="icon" />
                  <span>{item}</span>
                </div>
              );
            } else if (index === 3) {
              return (
                <div>
                  <MehOutlined className="icon" />
                  <span>{item}</span>
                </div>
              );
            } else if (index === 4) {
              return (
                <div>
                  <BulbOutlined className="icon" />
                  <span>{item}</span>
                </div>
              );
            }
          })}
        </div>
        <div className="right">
          <div className="yu">
            {sub1.map((item) => {
              //    console.log(item)
              return (
                <a onClick={(e) => itemClick(item.name)}>
                  {item.name}
                  <span className="divi">|</span>
                </a>
              );
            })}
          </div>
          <div className="feng">
            {sub2.map((item) => {
              return (
                <a onClick={(e) => itemClick(item.name)} className="aitem">
                  {item.name}
                  <span className="divi">|</span>
                </a>
              );
            })}
          </div>
          <div className="chang">
            {sub3.map((item) => {
              //    console.log(item)
              return (
                <a onClick={(e) => itemClick(item.name)}>
                  {item.name}
                  <span className="divi">|</span>
                </a>
              );
            })}
          </div>
          <div className="qing">
            {sub4.map((item) => {
              //    console.log(item)
              return (
                <a onClick={(e) => itemClick(item.name)}>
                  {item.name}
                  <span className="divi">|</span>
                </a>
              );
            })}
          </div>
          <div className="zhu">
            {sub5.map((item) => {
              //    console.log(item)
              return (
                <a onClick={(e) => itemClick(item.name)}>
                  {item.name}
                  <span className="divi">|</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </LJPopUpWarpper>
  );
});
