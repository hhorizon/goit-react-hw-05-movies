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
  align-items: center;
  width: 1200px;
  padding-left: 200px;
`;

const Item = styled.li`
  & a {
    text-decoration: none;
  }

  &:last-child {
    margin-left: 50px;

    & a {
      color: rgba(255, 255, 255, 0.8);
      padding: 10px 25px;
      border: none;
      border-radius: 10px;
      background-color: #78a5a373;
    }

    & a:hover,
    & a:focus {
      background-color: #78a5a3;
    }

    & .active {
      background-color: #78a5a3;
    }
  }
`;

export { HeaderStyled, List, Item };
