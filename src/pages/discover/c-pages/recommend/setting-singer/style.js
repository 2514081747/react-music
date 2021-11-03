import styled from "styled-components";

export const SettSingerWarpper = styled.div`
    background-color: rgb(226,226,226);
    .login{
        /* margin-top: 10px; */
        height: 120px;
        border-bottom: 2px solid rgb(226,226,226);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ant-btn-dangerous.ant-btn-primary{
            border-radius: 5px;
            margin-top: 10px;
        }

        /* border-top:1px solid rgb(226,226,226); */
        .info{
            /* margin-top: 100px; */
            width: 200px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 22px;
            
            /* word-wrap: break-word; */
        }
    }
`