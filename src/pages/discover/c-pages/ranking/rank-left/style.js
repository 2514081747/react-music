import styled from "styled-components";

export const RankLeftWrapper = styled.div`
    .top_list{
        .header{
            margin-top: 30px;
            font-size: 14px;
            font-family: simsun,宋体;
            color:rgb(0,0,0);
            font-weight: 700;
            margin-left: 20px;

        }
        .item{
            margin-top: 20px;
            display: flex;
            margin-bottom: 20px;
            /* padding: 10px,0; */
            padding-top: 10px;
            padding-bottom: 10px;
            :hover{
                background-color: #fff;
                cursor: pointer;
            }
            .coverImg{
                width: 40px;
                height: 40px;
                margin-left: 30px;
                margin-right: 15px;
            }
        }
    }

`