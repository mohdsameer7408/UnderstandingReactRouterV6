import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  const activeNavStyles = ({ isActive }) => ({
    color: isActive ? "red" : "",
    textDecorationLine: isActive ? "underline" : "none",
  });

  return (
    <HeaderContainer>
      <NavLink to="/" style={activeNavStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={activeNavStyles}>
        About
      </NavLink>
      <NavLink to="/teams" style={activeNavStyles}>
        Teams
      </NavLink>
      <NavLink to="/teams/new" style={activeNavStyles}>
        New Team
      </NavLink>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 40px;
`;
