import styled from "styled-components";

export const DJRadioContentWrapper = styled.div`
  .title {
    font-size: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgb(183, 10, 11);
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 40px;
  }
  .flex-y{
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    justify-content: space-between;
    .radioImg {
      width: 140px;
      height: 140px;
    }
    .radioName {
      margin-top: 5px;
      width: 140px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .radioRcmtext {
      width: 140px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 20px;
    }
  }
  .flex-wrapper {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    justify-content: space-between;
    .radioImg {
      width: 140px;
      height: 140px;
    }
    .radioName {
      margin-top: 5px;
      width: 140px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .radioRcmtext {
      width: 140px;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
