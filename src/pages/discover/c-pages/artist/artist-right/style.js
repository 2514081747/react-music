import styled from "styled-components";

export const ArtistRightWrapper = styled.div`
  margin-top: 40px;
  margin-right: 40px;
  margin-left: 40px;
  .title {
    font-size: 20px;
    padding-bottom: 5px;
    border-bottom: 2px solid rgb(183, 10, 11);
  }
  .more {
    position: relative;
    font-size: 14px;
    top: -28px;
    left: 625px;
  }
  .all {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .img10 {
      width: 120px;
      height: 120px;
    }
    .name {
      width: 120px;
      display: flex;
      height: 40px;
      line-height: 40px;
      justify-content: space-between;
      .icon {
        /* text-align: center; */
        margin-top: 12px;
        font-size: 11px;
        color: white;
        /* border-radius: ; */
        width: 15px;
        height: 15px;
        line-height: 15px;
        background-color: rgb(183, 10, 11);
        border-radius: 50%;
      }
    }
  }
  .alpha{
    /* margin-right: ; */
    font-size: 15px;
    height: 20px;
    line-height: 20px;
    /* margin-top: -10px; */
    margin-bottom: 20px;
  
    /* margin-bottom: -10px; */
    /* .aitem:hover{
      background-color: red;
      display: inline-block;
      border-radius: 5px;
      text-decoration: none;
      
    } */
   
    a{
      margin-right: 10px;
      width: 15px;
    }
  }
  .active {
    background-color: #c20c0c;
    display: inline-block;
    width: 15px;
    height: 20px;
    text-align: center;
    border-radius: 3px;
    color: white;
    text-decoration: none;
  }
  .isShow{
    display: none;
  }
`;
