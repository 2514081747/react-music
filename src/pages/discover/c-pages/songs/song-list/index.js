import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { LJSongListWrapper } from "./style";
import formatNumber from "../../../../../utils/flormatNumber";
import { Pagination } from "antd";

export default memo(function LJSongList() {
  const state = useSelector(
    (state) => ({
      songCategoryList: state.song.songCategoryList,
    }),
    shallowEqual
  );
  const { playlists = [] } = state.songCategoryList;
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">上一页 &gt;</button>;
    }
    return originalElement;
  }
  return (
    <LJSongListWrapper>
      <div className="flxe">
        {playlists.map((item) => {
          return (
            <div className="songListItem">
              <div className="top-item">
                <img className="coverImgUrl" src={item.coverImgUrl}></img>
                {/* <span>{item.playCount}</span> */}
                <div className="position-fix">
                  <div>
                    <i className="sprite_icon erji"></i>
                    <span>{formatNumber(item.playCount)}</span>
                  </div>
                  <div>
                    <i className="sprite_icon play"></i>
                  </div>
                </div>
              </div>
              <div className="bottom-item">
                <div className="name">{item.name}</div>
                <div className="description">
                  by {item.copywriter || item.creator.nickname}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          itemRender={itemRender}
          defaultCurrent={1}
          currentPage={1}
          total={state.songCategoryList.total}
        />
      </div>
    </LJSongListWrapper>
  );
});
