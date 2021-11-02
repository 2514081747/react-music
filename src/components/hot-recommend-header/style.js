import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    border-bottom: 2px solid red;
    background-position: -225px -156px;
    .title{
        font-size: 18px; 
        margin-right: 15px;
        margin-left: 30px;
    }
    .list{
        margin-left: 10px;
        .line{
            margin-left: 10px;
        }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      /* line-height: 12px; */
      margin-left: 4px;
      background-position: 0 -240px;
    }
`

export const Inner = styled.div`
    display: flex;
` 