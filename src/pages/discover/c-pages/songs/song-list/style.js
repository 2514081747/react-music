import styled from "styled-components";

export const LJSongListWrapper = styled.div`
  margin-top: 20px;
  .flxe {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .top-item {
    .coverImgUrl {
      width: 160px;
      height: 160px;
      /* margin-bottom: 20px; */
    }
  }
  .position-fix {
    width: 160px;
    display: flex;
    justify-content: space-between;
    height: 25px;
    line-height: 25px;
    background-color: rgba(2, 0, 0, 0.6);
    position: relative;
    top: -25px;
    color: #fff;
  }
  .erji {
    margin-left: 6px;
    margin-right: 5px;
    display: inline-block;
    width: 14px;
    height: 11px;
    background-position: 0 -24px;
    /* background-color: #fff; */
  }
  .play {
    display: inline-block;
    width: 16px;
    height: 17px;
    /* text-align: center; */
    margin-top: 4px;
    margin-right: 10px;
    background-position: 0 0;
  }
  .bottom-item {
      margin-top: -10px;
      margin-bottom: 20px;
    .name {
      width: 160px;
      font-size: 15px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .description {
      width: 160px;
      font-size: 13px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .pagination{
      /* margin: 0 auto; */
      /* margin-left: 20px; */
      /* margin: 0 auto; */
      margin-top: 10px;
      text-align: center;
  }
`;
