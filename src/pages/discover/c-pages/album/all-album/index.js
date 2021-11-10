import React, { memo, useEffect } from "react";
import { AllAlbumWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllAlbum } from "../store/actionCreator";
import { Pagination } from 'antd';

export default memo(function LJAllAlbum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAlbum(1));
  }, [dispatch]);

  const state = useSelector((state) => ({
    totalCount: state.album.totalCount,
    allAlbum: state.album.allAlbum,
  }),shallowEqual);
  console.log(state);

  return (
    <AllAlbumWrapper>
      <div className="title">全部新碟</div>
      <div className='imgFlex'>
        {state.allAlbum.map((item) => {
          return (
            <div className='flex-item-hot'>
              <img className='hotalbumimg' src={item.picUrl}></img>
              <div className='hotName'>{item.name}</div>
              <div className='artist-name'>{item.artist.name}</div>
            </div>
          );
        })}
      </div>
      <Pagination defaultCurrent={6} total={state.totalCount} />
    </AllAlbumWrapper>
  );
});
