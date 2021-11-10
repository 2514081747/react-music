import React, { memo, useEffect } from "react";
import { LJHotAlbumWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getHotAlbum } from "../store/actionCreator";
export default memo(function LJHotAlbum() {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => ({
      hotAlbum: state.album.hotAlbum,
    }),
    shallowEqual
  );
  console.log(state);
  useEffect(() => {
    dispatch(getHotAlbum());
  }, [dispatch]);
  return (
    <LJHotAlbumWrapper>
      <div className="title">热门新碟</div>
      <div className='imgFlex'>
        {state.hotAlbum.map((item) => {
          return (
            <div className='flex-item-hot'>
              <img className='hotalbumimg' src={item.picUrl}></img>
              <div className='hotName'>{item.name}</div>
              <div>{item.artist.name}</div>
            </div>
          );
        })}
      </div>
    </LJHotAlbumWrapper>
  );
});
