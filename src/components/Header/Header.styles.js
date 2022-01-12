import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-image: linear-gradient(to bottom, #444c5c 93%, #78a5a3 7%);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  &:first-child {
    margin-right: 50px;
  }

  & a {
    color: #fff;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    background-color: #78a5a373;
    text-decoration: none;
    cursor: default;
  }

  & a:hover,
  & a:focus {
    background-color: #78a5a3;
  }

  & .active > button {
    background-color: #78a5a3;
  }
`;

export { HeaderStyled, List, Item };
