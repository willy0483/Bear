import { NavbarStyled } from "./NavBar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarStyled>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/About"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/Services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};
