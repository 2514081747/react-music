import styled from "styled-components";

export const LJPopUpWarpper = styled.div`
  z-index: 200;
  .triangle {
    width: 0;
    height: 0;
    border-top: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid white;
    border-left: 9px solid transparent;
    /* box-shadow: 0 0 2px 1px #d3d3d3; */
    position: absolute;

    left: 100px;
    top: -18px;
  }
  position: absolute;
  /* top: -10px; */
  top: 165px;
  background-color: #fff;
  margin-top: 20px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: 0 0 10px 2px #d3d3d3;
  width: 600px;
  height: 400px;
  .top-header {
    .allStyle {
      cursor: pointer;
      margin-top: 20px;
      margin-left: 30px;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 3px;
      background-color: #fafafa;
    }
  }
  .bottom {
    display: flex;
    margin-top: 20px;
    .left {
      width: 100px;
      border-top: 1px solid rgb(204, 204, 204);
      border-right: 1px solid rgb(204, 204, 204);
      height: 330px;
      text-align: center;
      font-size: 14px;
      div {
        margin-top: 32px;
        .icon {
          font-size: 20px;
          color: rgb(150, 150, 150);
        }
        /* margin-left: 10px; */
        span {
          margin-right: 10px;
          margin-left: 5px;
          color: #000;
          font-weight: 600;
          font-size: 13px;
        }
      }
    }
    .right {
      /* width: 400px; */
      flex: 1;
      border-top: 1px solid rgb(204, 204, 204);

      /* font-size: 13px; */
      .yu {
        /* margin-left: 20px; */
        margin-top: 36px;
        a {
          margin-bottom: 10px;
          margin-left: 10px;
          .divi {
            margin-left: 10px;
            color: rgb(204, 204, 204);
          }
        }
      }
      .feng {
        margin-top: 20px;
        margin-bottom: 10px;
        .aitem {
          display: inline-block;
          margin-left: 10px;
          /* margin-bottom: 10px; */
          .divi {
            margin-left: 10px;
            color: rgb(204, 204, 204);
          }
        }
      }
      .chang {
        margin-top: 15px;
        a {
          margin-left: 10px;
          margin-bottom: 10px;
          .divi {
            margin-left: 10px;
            color: rgb(204, 204, 204);
          }
        }
      }
      .qing {
        margin-top: 15px;
        margin-bottom: 10px;
        a {
          margin-left: 12px;
          .divi {
            margin-left: 10px;
            color: rgb(204, 204, 204);
          }
        }
      }
      .zhu {
        margin-top: 15px;
        a {
          margin-left: 13px;
          .divi {
            margin-left: 10px;
            color: rgb(204, 204, 204);
          }
        }
      }
    }
  }
`;
