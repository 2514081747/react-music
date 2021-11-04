import styled from "styled-components";

export const HotRadioWrapper = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 30px;
    /* padding-bottom: 2px; */
    /* border-bottom: 1px solid ; */
    .title{
        border-bottom: 1px solid rgb(226, 226, 226);
        padding-bottom: 4px;
    }
    .hotRadioItem{
        display: flex;
        margin-top: 20px;
        .hotImg{
            width: 40px;
            height: 40px;
            margin-right: 15px;
        }
        .postion{
            width: 150px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
`