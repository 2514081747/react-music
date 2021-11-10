import styled from "styled-components";

export const SongHaederWrapper = styled.div`
  button[ant-click-animating-without-extra-node]:after {
  }
  .ant-btn-dangerous.ant-btn-primary {
    border-radius: 5px !important;
  }

  .ant-btn {
    border-radius: 5px;
    /* border-color: ; */
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;
    border-bottom: 2px solid rgb(183, 10, 11);
    .category {
      color: #0c73c2;
    }
    .language {
      font-size: 20px;
      margin-right: 15px;
    }
  }
`;
