import styled from "styled-components";

const Item = styled.li`
  flex-basis: calc((100% - 125px) / 5);

  margin-top: 25px;
  margin-left: 25px;

  & a {
    text-decoration: none;

    &:hover p,
    &:focus p {
      color: #78a5a3;
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 5px;
`;

const Title = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export { Item, Title, Image };
