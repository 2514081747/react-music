import styled from "styled-components";

export const SettSingerWarpper = styled.div`
  /* background-color: rgb(226,226,226); */
  background-position: 0 0;
  .login {
    /* margin-top: 10px; */
    height: 120px;
    border-bottom: 2px solid rgb(226, 226, 226);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ant-btn-dangerous.ant-btn-primary {
      border-radius: 5px;
      margin-top: 10px;
    }

    /* border-top:1px solid rgb(226,226,226); */
    .info {
      /* margin-top: 100px; */
      width: 200px;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 22px;

      /* word-wrap: break-word; */
    }
  }
  .singer-top {
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    /* padding: -20px; */
    /* margin-bottom: px; */
    padding-bottom: 4px;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  .singerList {
    .singerItem {
      display: flex;
      margin-top: 20px;
      justify-content: flex-start;
      margin-left: 20px;
      margin-right: 20px;
      .pic {
        width: 60px;
        height: 60px;
        margin-right: 15px;
      }
      .alias {
        font-family: Helvetica, sans-serif;
        color: rgb(51, 51, 51);
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  .btn {
    margin-top: 20px;
    width: 200px;
    padding: 7px;
    border-radius: 4px;
    border: 2px solid rgb(226, 226, 226);
    /* margin: 0 auto */
    color: #333;
    font-weight: 700;
    text-align: center;
    margin-left: 20px;
  }
`;
