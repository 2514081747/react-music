import React, { memo, useEffect, useState } from "react";
import { RankLeftWrapper } from "./style";
import {
  changeRanKIndexAction,
  getRanKTopDetail,
} from "../store/actionCreacor";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

export default memo(function LJRankLeft() {
  const [currentId, setCurrentId] = useState(19723756);
  useEffect(() => {
    dispatch(getRanKTopDetail(currentId));
  }, [currentId]);
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      topRanK: state.ranking.topRanK,
      currentIndex: state.ranking.currentIndex,
    }),
    shallowEqual
  );
  // const {topRanK = []} = state
  // console.log(state)
  // const currentIndex = state.currentIndex
  const itemClick = (index) => {
    dispatch(changeRanKIndexAction(index));
    const id = state.topRanK[index].id;
    //    console.log(state.topRanK[index])
    setCurrentId(id);
    dispatch(getRanKTopDetail(id));
  };
  return (
    <RankLeftWrapper>
      {state.topRanK.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div className="top_list">
            {header}
            <div className="item" onClick={(e) => itemClick(index)}>
              <img className="coverImg" src={item.coverImgUrl}></img>
              <div>
                <div className="name">{item.name}</div>
                <div className="updateFrequency">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </RankLeftWrapper>
  );
});
