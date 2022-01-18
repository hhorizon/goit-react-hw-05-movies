import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  padding: 0 0 25px 100px;
  border-bottom: 1px solid #78a5a3;
`;

const NavItem = styled.li`
  &:first-child {
    margin-right: 50px;
  }

  & a {
    display: block;
    font-size: 12px;
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

  & .active {
    background-color: #78a5a3;
  }
`;

export { NavList, NavItem };
