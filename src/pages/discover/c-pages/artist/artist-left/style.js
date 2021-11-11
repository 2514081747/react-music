import styled from "styled-components";

export const ArtistLeftWrapper = styled.div`
    margin-top: 60px;
    margin-bottom: 20px;
    .all-category{
        margin-left: 20px;
        margin-right: 20px;
        border-bottom: 1px solid rgb(204,204,204);
        padding-bottom: 15px;
        margin-bottom: 10px;
        .title{
            font-size: 20px;
            margin-bottom: 5px;
        }
        .all-name{
            /* margin-bottom: 20px; */
            .point{
                display: inline-block;
                width: 5px;
                height: 5px;
                /* border-radius: 50%; */
                /* color: red; */
                background-color: rgb(204,204,204);
                margin-right: 10px;
                margin-bottom: 2px;

            }
            .name{
               line-height: 30px;
               text-align: center;
               /* padding-bottom: 10px; */
            }
        }
        .active{
            color: red;
        }
    }
`