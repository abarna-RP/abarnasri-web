import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between; /* Space between the title and nav links */
  align-items: center;
  padding: 1rem 0;
`;

const PortfolioTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--highlight-gold);
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: var(--text-primary);
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: var(--highlight-gold);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <PortfolioTitle>Abarnasri Dev</PortfolioTitle>
      <Nav>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;