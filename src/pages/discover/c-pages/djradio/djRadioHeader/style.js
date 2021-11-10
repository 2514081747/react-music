import styled from "styled-components";

export const DjRadioHeaderWrapper = styled.div`
  .flex-item-img {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    .item-img {
      margin-left: 30px;
      width: 80px;
      /* height: 60px; */
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .image {
        background-position: 0 0;
        /* width: 80px; */
      }
      &:hover {
        background-color: rgb(204, 204, 204);
        /* width: 60px; */
        border-radius: 5px;
      }
    }
  }
`;

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.imgUrl});
`;
