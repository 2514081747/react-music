import React, { memo } from "react";
import { ImageWrapper, ImageBottom, ImageTop } from "./style";
import formatNumber from "../../utils/flormatNumber";

export default memo(function LJImageCover(props) {
  const { imageList } = props;
  return (
    <ImageWrapper>
      <ImageTop>
        <img className="pic" src={imageList.picUrl}></img>
        <div className="position">
          <div>
            <i className="sprite_icon erji"></i>
            <span>{formatNumber(imageList.playCount)}</span>
          </div>
          <div>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </ImageTop>

      <ImageBottom>
        <div className="nowrap">{imageList.name}</div>
        <div>by {imageList.copywriter}</div>
      </ImageBottom>
    </ImageWrapper>
  );
});
