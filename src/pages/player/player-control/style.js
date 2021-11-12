import styled from "styled-components";

export const PlayerControlWrapper = styled.div`
  /* background-color: green; */
  height: 52px;
  line-height: 52px;
  cursor: pointer;
  color: white;
  display: flex;
  /* margin-right: 20px; */
`;

export const PlayerControlLeft = styled.div`
  /* margin-right: 20px; */
  margin-top: 3px;
  .back {
    font-size: 15px;
    color: rgb(193, 193, 193);
    width: 25px;
    height: 25px;
    line-height: 25px;
    border: 1px solid white;
    border-radius: 50%;
  }
  .play {
    font-size: 20px;
    /* margin-top: 2px; */
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 2px solid white;
    border-radius: 50%;
    margin-left: 10px;
  }
  .forward {
    font-size: 15px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border: 1px solid white;
    border-radius: 50%;
    margin-left: 10px;
    color: rgb(193, 193, 193);
  }
  padding-left: 20px;
`;

export const PlayerControlCenter = styled.div`
  display: flex;
  margin-top: 6px;

  width: 400px;
  .avator {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 40px;
  }
  .centerright {
    height: 52px;
    margin-top: -10px;
    .name{
      /* color: red; */
      margin-top: -6px;
      margin-left: 10px;
      .singer{
        margin-left: 10px;
        color: rgb(204,204,204);
      }
    }
    /* margin-bottom: 10px; */
  }
  .time{
    position: relative;
    top:-61.8px;
    left: 520px;
    .alltime{
      margin-left: 5px;
    }
    
  }
  .ant-slider {
    position: relative;
    top: -20px;
    width: 500px;
    margin-left: 15px;
  }
`;
export const PlayerControlRight = styled.div`
  margin-left: 290px;
  font-size: 20px;
  color: rgb(204,204,204);
  .icon{
    padding-left: 10px;
  }
`;
