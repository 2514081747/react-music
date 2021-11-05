import styled from "styled-components";

export const RankSongListWrapper = styled.div`
  margin-top: 40px;
`;

export const RankSongHeader = styled.div`
  display: flex;
  margin-left: 48px;
  margin-right: 40px;
  border-bottom: 2px solid #c20c0c;
  justify-content: space-between;
  /* height: 40px; */
  /* line-height: 40px; */
  padding-bottom: 4px;
  /* text-align: center; */
  /* line-height: 25px; */
  .song-list {
    font-size: 20px;
    margin-right: 20px;
  }
  .right {
    margin-top: 8px;
    .count {
      color: red;
    }
  }
`;

export const RankSongList = styled.div`
  .tablecell {
    margin-left: 48px;
    tr {
      &:nth-child(2n + 1) {
        background-color: rgb(247, 247, 247);
      }
    }
    /* margin-right: 40px; */
    /* background-color: ; */
    .thead {
      font-size: 12px;
      color: rgb(102, 102, 102);
      height: 18px;
      line-height: 18px;
      font-weight: 400;
      border: 1px solid rgb(220, 220, 220);
      background-color: rgb(247, 247, 247);
      /* background-color: rgb(102, 102, 102); */
      width: 163px;
      text-align: left;
      /* margin-left: 10px; */
      padding-left: 10px;
      height: 26px;
    }
    .tritem {
      /* padding-left: 100px; */
      text-align: left;
      height: 40px;
      font-size: 14px;
      :hover {
        background-color: rgb(230, 230, 230);
      }
      .index {
        color: rgb(102, 102, 102);
      }
     
      td {
        padding-left: 10px;
      }

      /* margin-left: 10px; */
      /* padding-left: 10px; */
    }
  }
`;
