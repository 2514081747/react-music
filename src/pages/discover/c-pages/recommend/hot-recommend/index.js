import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LJHotRecommendHeader from "../../../../../components/hot-recommend-header/index";
import LJImageCover from "../../../../../components/hot-recommend-img-cover/index";
import { RecommendWrapper } from "./style";
import { getRecommend } from "../store/actionCreators";

export default memo(function LJHotRecommend() {
  //获取推荐数据
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      recommend: state.recommend.hotRecommends,
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getRecommend());
  }, [dispatch]);
  console.log(state);
  return (
    <RecommendWrapper>
      <LJHotRecommendHeader
        title="热门推荐"
        recommendList={["华语", "流行", "摇滚", "民谣", "电子"]}
      ></LJHotRecommendHeader>
      <div className='item'>
        {state.recommend.slice(0, 8).map((item) => {
          return <LJImageCover className='img' imageList={item} key={item.id}></LJImageCover>;
        })}
      </div>
    </RecommendWrapper>
  );
});
