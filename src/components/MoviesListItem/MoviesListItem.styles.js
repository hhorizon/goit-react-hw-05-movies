import styled from "styled-components";

const Item = styled.li`
  flex-basis: calc((100% - 125px) / 5);
  margin-top: 25px;
  margin-left: 25px;

  &:hover a,
  &:focus a {
    transform: scale(1.1);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15),
      -4px 4px 4px rgba(0, 0, 0, 0.15);
  }

  & a {
    text-decoration: none;
    display: block;
    transition: transform 250ms, box-shadow 250ms;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding-left: 5px;
  transition: color 250ms;
`;

const Rating = styled.p`
  color: #78a5a3;
  padding: 5px;
  display: flex;
  align-items: center;

  & svg {
    color: rgb(255 215 0 / 90%);
    margin-right: 5px;
  }
`;

export { Item, Title, Image, Rating };
