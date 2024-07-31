import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import {
  MobileMenu,
  MobileLink,
  Span,
  Nav,
  NavItems,
  NavLogo,
  NavLink,
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  NavContainer
} from './NavbarStyle';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a href="#about" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          {/* Theme Toggle Icon */}
          {darkMode ? (
            <MdLightMode 
              size="24px" 
              onClick={toggleTheme} 
              style={{ cursor: 'pointer', color: 'white', marginLeft: '16px' }} 
            />
          ) : (
            <MdDarkMode 
              size="24px" 
              onClick={toggleTheme} 
              style={{ cursor: 'pointer', color: 'black', marginLeft: '16px' }} 
            />
          )}
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton 
              style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} 
              href={Bio.github} 
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
