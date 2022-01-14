import styled from "styled-components";

const NoMovieMess = styled.p`
  padding: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #78a5a3;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #78a5a3;
`;

const NavItem = styled.li`
  &:first-child {
    margin-right: 50px;
  }

  & a {
    color: rgba(255, 255, 255, 0.8);
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

export { NoMovieMess, NavList, NavItem };
