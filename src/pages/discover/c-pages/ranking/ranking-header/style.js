import styled from "styled-components";

export const RankHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  .right {
    margin-top: 20px;
    /* margin-left: -40px; */
  }
  .name {
    font-family: "Microsoft Yahei", "Arial", "Helvetica", "sans-serif";
    color: rgb(51, 51, 51);
    font-size: 20px;
    margin-bottom: 10px;
  }
  .time {
    /* margin-top: 10px; */
    .ant-btn {
        border-radius: 5px !important;
        /* color: rgb(37,118,197); */
        /* margin-left: 0; */
        /* margin-right: 10px; */
        /* margin-top: 10px; */
      }
    .icon {
      margin-right: 5px;
    }
    .update {
      /* margin-top: 10px; */
      font-size: 12px;
      color: #999;
      .i {
        margin-right: 5px;
      }
      .every {
        margin-left: 5px;
      }
      /* letter-spacing: 1px; */
    }
    /* margin-right: 5px; */
  }
  .btn {
    margin-top: 25px;
    /* width: 490px; */
    border-radius: 3px;
    .btn-item {
        /* text-align: center; */
      margin-right: 10px;
      font-size: 13px;
      /* width: 85px; */
      /* padding: 2; */
      /* padding-right: 4px; */
      /* text-align: center; */
      padding-left: 8px;
      padding-right: 12px;
    }
    /* margin-left: 10px; */
    /* margin-right: 6px; */
  }
  /* justify-content: center; */
  /* margin-left: 20px; */
  /* margin-right: 20px; */
  .imgcover {
    width: 160px;
    height: 160px;
    /* margin-right: 30px; */
    padding: 3px;
    border: 1px solid rgb(204, 204, 204);
    margin-right: 30px;
  }
  .item1{
    background-color: rgb(34,115,194);
    color: white;
  }
  
`;
