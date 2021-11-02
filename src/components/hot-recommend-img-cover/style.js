import styled from "styled-components";

export const ImageWrapper = styled.div`
  margin-top: 20px;
`;

export const ImageTop = styled.div`
  /* display: flex; */
  .pic {
    width: 140px;
    height: 140px;
  }
  .position {
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
`;

export const ImageBottom = styled.div`
  .nowrap {
    width: 140px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
