import React, { memo,useState } from "react";
import { useSelector, shallowEqual,useDispatch } from "react-redux";
import { LJSongListWrapper } from "./style";
import formatNumber from "../../../../../utils/flormatNumber";
// import {} from '../../../../../services/song'
import {getSongCategoryListByName} from '../store/actionCreator'
import { Pagination } from "antd";

export default memo(function LJSongList() {
  const [currentPage,setCurrentPage] = useState(1)
  const [pageSize,setPageSize] = useState(35) 
  const dispatch = useDispatch()
  const state = useSelector(
    (state) => ({
      songCategoryList: state.song.songCategoryList,
      songCategoryName:state.song.songCategoryName
    }),
    shallowEqual
  );
  const { playlists = [] } = state.songCategoryList;
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }
  const pageChange = (page,pageSize) => {
    setCurrentPage(page)
    setPageSize(pageSize)
    dispatch(getSongCategoryListByName(state.songCategoryName,page,pageSize))
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
          current={currentPage}
          total={state.songCategoryList.total}
          pageSize={pageSize}
          defaultPageSize={pageSize}
          onChange={(page,pageSize) => pageChange(page,pageSize,currentPage,pageSize) }
        />
      </div>
    </LJSongListWrapper>
  );
});
