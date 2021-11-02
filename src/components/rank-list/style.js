
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
        }
        .index{
            margin-right: 20px;
            font-size: 16px;
        }
        .name{
            font-size: 20px;
            /* width: 100px; */
            /* line-height: 18px; */
        }
    }

`