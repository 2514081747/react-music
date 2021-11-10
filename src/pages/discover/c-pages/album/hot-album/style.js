import styled from "styled-components";

export const LJHotAlbumWrapper = styled.div`
  .title {
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
      width: 140px;
      font-size: 14px;
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
    width: 140px;
    height: 140px;
    /* margin-bottom: 20px; */
  }
`;
