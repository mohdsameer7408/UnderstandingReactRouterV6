import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/teams">Teams</NavLink>
      <NavLink to="/teams/new">New Team</NavLink>
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

const NavLink = styled(Link)``;
