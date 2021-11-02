import React, { memo, useEffect, useRef } from "react";
import LJHotRecommendHeader from "../../../../../components/hot-recommend-header/index";
import LJNewAlbumBanner from "../../../../../components/new-album/index";
import { NewAlbumWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAlbum } from "../store/actionCreators";
// import newAlbum from "../../../../../components/new-album/index";
import { Carousel,Button } from "antd";
import { LeftOutlined ,RightOutlined} from '@ant-design/icons'

export default memo(function LJNewAlbum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbum());
  }, [dispatch]);

  const state = useSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    shallowEqual
  );

  const carouselRef = useRef();
  return (
    <NewAlbumWrapper>
      <LJHotRecommendHeader title="新碟上架"></LJHotRecommendHeader>
      <Carousel className="caro" ref={carouselRef} dots={false}>
        {[0, 1].map((item) => {
          return (
            <div className="page">
              {state.newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                return <LJNewAlbumBanner newAlbum={iten}></LJNewAlbumBanner>;
              })}
            </div>
          );
        })}
      </Carousel>
      <LeftOutlined className='leftBtn' onClick={e => carouselRef.current.prev()}/>
      <RightOutlined className='rightBtn' onClick={e => carouselRef.current.next()}/>
    </NewAlbumWrapper>
  );
});
