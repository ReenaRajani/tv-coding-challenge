import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainLogo: string = require("../../logo.svg").default;

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
      <Logo src={MainLogo} alt="Stan Logo" />
        <NavList role="navigation">
          <NavItem>
            <NavLink className="selected" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#">TV Shows</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#">Movies</NavLink>
          </NavItem>
        </NavList>
    </HeaderWrapper>
  )
}

export default Header;