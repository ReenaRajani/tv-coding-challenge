import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  width: 25%;
  margin-right: 5rem;
`;

const NavList = styled.ul`
  display: inline-flex;
  list-style: none;
  margin: 1rem;
`;

const NavItem = styled.li`
  display: inline-block;
  color: grey;
  font-size: 1.5rem;
  padding-right: 2rem;
  font-weight: 900;
`;

const NavLink = styled(Link)`
  color: grey;
  text-decoration: none;
  &:hover,
  &:focus {
    color: blue;
  };
  &:active {
    color: white;
  };
  &.selected {
    color: white;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={'/assets/logo.svg'} alt="Stan Logo" />
        <NavList role="navigation">
          <NavItem aria-labelledby="nav-link">
            <NavLink className="selected" to="/">Home</NavLink>
          </NavItem>
          <NavItem aria-labelledby="nav-link">
            <NavLink to="#">TV Shows</NavLink>
          </NavItem>
          <NavItem aria-labelledby="nav-link">
            <NavLink to="#">Movies</NavLink>
          </NavItem>
        </NavList>
    </HeaderWrapper>
  )
}

export default Header;