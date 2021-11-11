import React, { memo, useEffect,useState } from "react";
import { AllAlbumWrapper } from "./style";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getAllAlbum } from "../store/actionCreator";
import { Pagination } from "antd";

export default memo(function LJAllAlbum() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAlbum(1));
  }, [dispatch]);

  const state = useSelector(
    (state) => ({
      totalCount: state.album.totalCount,
      allAlbum: state.album.allAlbum,
    }),
    shallowEqual
  );
  console.log(state);
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }
  const pageChange = (page, pageSize) => {
    setCurrentPage(page)
    setPageSize(pageSize)
    dispatch(getAllAlbum(page))
  };

  return (
    <AllAlbumWrapper>
      <div className="title">全部新碟</div>
      <div className="imgFlex">
        {state.allAlbum.map((item) => {
          return (
            <div className="flex-item-hot">
              <img className="hotalbumimg" src={item.picUrl}></img>
              <div className="hotName">{item.name}</div>
              <div className="artist-name">{item.artist.name}</div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          itemRender={itemRender}
          current={currentPage}
          total={state.totalCount}
          pageSize={pageSize}
          defaultPageSize={pageSize}
          onChange={(page, pageSize) =>
            pageChange(page, pageSize)
          }
        />
      </div>
    </AllAlbumWrapper>
  );
});
