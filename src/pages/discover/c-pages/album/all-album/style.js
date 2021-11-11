import styled from "styled-components";

export const AllAlbumWrapper = styled.div`
  .title {
    margin-top: 20px;
    font-size: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgb(183, 10, 11);
  }
  .imgFlex {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .hotName {
      margin-top: 5px;
      width: 160px;
      font-size: 15px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist-name {
      width: 160px;
      font-size: 13px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .flex-item-hot {
      margin-bottom: 15px;
    }
  }
  .hotalbumimg {
    /* margin-top: 20px; */
    width: 160px;
    height: 160px;
    /* margin-bottom: 20px; */
  }
  .pagination{
      /* margin: 0 auto; */
      /* margin-left: 20px; */
      /* margin: 0 auto; */
      margin-top: 10px;
      text-align: center;
  }
`;
