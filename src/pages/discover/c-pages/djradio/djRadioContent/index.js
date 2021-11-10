import React, { memo, useEffect } from "react";
import { DJRadioContentWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getDjRadioRecommendList } from "../store/actionCreator";

export default memo(function DJRadioContent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDjRadioRecommendList(3));
  }, [dispatch]);
  const state = useSelector((state) => ({
    djRadioRecommendList: state.djRadio.djRadioRecommendList,
  }));
  console.log(state);
  return (
    <DJRadioContentWrapper>
      <div className="title">优秀新电台</div>
      <div className='flex-wrapper'>
        {state.djRadioRecommendList.slice(0, 5).map((item) => {
          return (
            <div>
              <img className='radioImg' src={item.picUrl}></img>
              <div className='radioName'>{item.name}</div>
              <div className='radioRcmtext'>{item.rcmdtext}</div>
            </div>
          );
        })}
      </div>
      {/* 电台排行榜 */}
      <div className="title">电台排行榜</div>
    </DJRadioContentWrapper>
  );
});
