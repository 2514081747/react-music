import React, { memo } from "react";
import { Carousel } from "antd";
import { NewAlbumBanner } from "./style";

export default memo(function LJNewAlbumBanner(props) {
  const { newAlbum } = props;
  return (
    <NewAlbumBanner>
        <img className="image" src={newAlbum.picUrl}></img>
        <div className='name'>{newAlbum.name}</div>
        <div className='name1'>{newAlbum.artists[0].name}</div>
    </NewAlbumBanner>
  );
});
