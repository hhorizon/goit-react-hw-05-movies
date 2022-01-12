import { NavLink } from "react-router-dom";
import { HeaderStyled, List, Item } from "./Header.styles";

function Header() {
  return (
    <HeaderStyled>
      <List>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/movies">Movies</NavLink>
        </Item>
      </List>
    </HeaderStyled>
  );
}

export default Header;
