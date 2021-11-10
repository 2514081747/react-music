import React, { memo } from "react";
import { LJalbumWrapper } from "./style";
import LJHotAlbum from "../album/hot-album";
import LJAllAlbum from '../album/all-album'

export default memo(function LJalbum() {
  return (
    <LJalbumWrapper className="wrap-v2">
        <LJHotAlbum></LJHotAlbum>
        <LJAllAlbum></LJAllAlbum>
    </LJalbumWrapper>
  );
});
