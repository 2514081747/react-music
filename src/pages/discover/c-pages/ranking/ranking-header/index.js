import React, { memo } from "react";
import { RankHeaderWrapper } from "./style";
import moment from "moment";
import { ClockCircleOutlined,PlayCircleOutlined,PlusSquareOutlined,RollbackOutlined,ArrowDownOutlined,CommentOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { useSelector, shallowEqual } from "react-redux";

export default memo(function LJRankHeader() {
  const state = useSelector(
    (state) => ({
      topRanKDetail: state.ranking.topRanKDetail,
    }),
    shallowEqual
  );
  console.log(state);
  return (
    <RankHeaderWrapper>
      <img className="imgcover" src={state.topRanKDetail.coverImgUrl}></img>
      <div className='right'>
        <div className="name">{state.topRanKDetail.name}</div>
        <div className="time">
          <ClockCircleOutlined className='icon' />
          <span className='update'>
            <span className='i'>最近更新:</span>
            {moment(state.topRanKDetail.updateTime)
              .format("MM-DD")
              .replace("-", "月") + "日"}{" "}
            <span className='every'>(每日更新:TODO)</span>
          </span>
          <div className="btn">
            <Button icon={<PlayCircleOutlined />} className='btn-item item1'>播放</Button>
            <Button icon={<PlusSquareOutlined />} className='btn-item'>({state.topRanKDetail.subscribedCount})</Button>
            <Button icon={<RollbackOutlined />} className='btn-item'>({state.topRanKDetail.shareCount})</Button>
            <Button icon={<ArrowDownOutlined />} className='btn-item'>下载</Button>
            <Button icon={<CommentOutlined />} className='btn-item'>({state.topRanKDetail.commentCount})</Button>
          </div>
        </div>
      </div>
    </RankHeaderWrapper>
  );
});
