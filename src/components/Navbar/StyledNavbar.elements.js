import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import React, { useState } from "react";
import { RiCake3Line } from "react-icons/ri";
import { GoThreeBars, GoX } from "react-icons/go";

import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const StyledNav = styled.nav`
  background: #333;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const StyledNavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;
const NavLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  height: 100px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    height: 88vh;
    position: absolute;
    top: ${({ click }) => (click ? "100px" : "-88vh")};
    right: 0;
    
    transition: all 0.5s ease;
    background: #333;
  }
`;
const MenuItemLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
  justify-content: center;
`;
const MenuItem = styled.li`
  height: 100%;
  border-bottom: 6px solid transparent;
  &:hover {
    border-bottom: 6px solid #fedfed;
  }
  &:last-child {
    border-bottom: 6px solid transparent;
  }
  &:nth-child(2) {
    padding-left: 0.5rem;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: ${({click})=>(click?"31vh":"100px")};
      
    }
  }
  &:nth-child(2) > ${MenuItemLink} {
    @media screen and (max-width: 768px) {
      height: 100px;
      padding-bottom: 0.5rem;
    }
  }
  &:nth-child(2) > ${MenuItemLink}::after {
    font-family: "Font Awesome 5 Free";
    font-size: 12px;
    line-height: 16px;
    font-weight: 900;
    content: "\f078";
    margin-left: 0.5rem;
    color: white;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    border-bottom: none;
    &:hover {
      border-bottom: none;

    }
    &:hover:last-child {
      border-bottom: 6px solid transparent;
    }

    &:last-child {
      margin-top: auto;
      width: 100%;
      margin-bottom: 0;
      border-bottom: none;
      &:hover {
        border-bottom: none;
      }
    }
  }
`;
const MenuSubmenu = styled.ul`
  display: none;
  @media screen and (min-width:768px) {
  ${MenuItem}:hover & {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-116%, 76%);
    flex-direction: column;
    width: 190px;
    list-style: none;
    padding: 0.5rem;
    background-color: #c3c3c3;
  }
  }
  @media screen and (max-width: 768px) {
    
    display: ${({click})=>(click?"flex":"none")};
    
      flex-direction: column;
      position: static;
      transform: unset;
      background-color: #c3c3c3;
      max-height: 500px;
      width: 80%;
    }
`;
const SubmenuItem = styled.li`
  color: #3f3fff;
  display: flex;
  justify-content: center;
`;

const MenuBtn = styled.button`
  cursor: pointer;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2px;
  width: 80%;
`;
const MobileIcon = styled.div`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const StyledNavbar = () => {
  const [mobileClicked, setMobileClicked] = useState(false);
  const [subClicked, setSubClicked] = useState(false);

  const mobileClickHandler = () => setMobileClicked(!mobileClicked);
  
  const subClickHandler = () => setSubClicked(!subClicked);
    
  
  return (
    <>
      <StyledNav>
        <StyledNavContainer>
          <NavLogo>
            eKEKs
            <RiCake3Line value={{ color: "#fff" }} />
          </NavLogo>
          <NavMenu click={mobileClicked}>
            <MenuItem>
              <MenuItemLink>link1</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={subClickHandler} click={subClicked}>
              <MenuItemLink>link2</MenuItemLink>
              <MenuSubmenu click={subClicked}>
                <SubmenuItem>
                  <MenuItemLink>SubItem1</MenuItemLink>
                </SubmenuItem>
                <SubmenuItem>
                  <MenuItemLink>SubItem2</MenuItemLink>
                </SubmenuItem>
                <SubmenuItem>
                  <MenuItemLink>SubItem3</MenuItemLink>
                </SubmenuItem>
              </MenuSubmenu>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>link3</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <MenuBtn>click me</MenuBtn>
              </MenuItemLink>
            </MenuItem>
          </NavMenu>
          <MobileIcon onClick={mobileClickHandler}>
            <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
              {mobileClicked ? <GoX /> : <GoThreeBars />}
            </IconContext.Provider>
          </MobileIcon>
        </StyledNavContainer>
      </StyledNav>
    </>
  );
};
