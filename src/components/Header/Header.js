import { NavLink } from "react-router-dom";
import { HeaderStyled, List, Item } from "./Header.styles";
import logo from "../../images/logo.png";

function Header() {
  return (
    <HeaderStyled>
      <List>
        <Item>
          <NavLink to="/">
            <img src={logo} alt="logo" width={45} height={45} />
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/movies">Movies</NavLink>
        </Item>
      </List>
    </HeaderStyled>
  );
}

export default Header;
