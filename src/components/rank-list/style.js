
import styled from "styled-components";


export const RanWrapper = styled.div`
    flex:1;
    .header {
        height: 100px;
        display: flex;
        margin: 20px 0 0 20px;
        .image {
        width: 80px;
        height: 80px;
        position: relative;
        img {
            width: 80px;
            height: 80px;
            }
        }
        .info{
            font-size: 15px;
            margin-left: 5px;
        }
        .icon{
            margin-top: 10px;
        }
    } 
    .rank{
        .item{
            margin-left: 20px;
            height: 32px;
            line-height: 32px;
            .index{
                /* display: inline-block; */
                position: relative;
                top: -11px;
                font-size: 14px;
                margin-right: 10px;
                /* height: 32px; */
            }
        }
        
        .name{
            font-size: 15px;
            display: inline-block;
            width: 120px;
            /* font-size: 15px; */
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .rank>div:nth-child(-n+3){
        color:rgb(193, 13, 12)
    }
    .rank>div:hover{
        /* background-color:red; */
        .operate{
            display: block;
        }

    }

    .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;
          position: relative;
          top: -46px;
          left: 120px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
        .more{
            margin-left: 180px;
            margin-top: 4px;
            font-size: 14px;
        }

`