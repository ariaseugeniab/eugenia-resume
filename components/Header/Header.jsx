import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLogo from "./MainLogo/MainLogo";

const Header = () => {
  function changeNavColor() {
    const header = document.querySelector("header");

    if (globalThis.scrollY > 70) {
      header.classList.remove("headerTest");
    }
    if (globalThis.scrollY === 0) {
      header.classList.add("headerTest");
    }
  }

  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("headerTest");
  }, []);

  useEffect(() => {
    globalThis.addEventListener("scroll", changeNavColor);
    return () => globalThis.removeEventListener("scroll", changeNavColor);
  });

  return (
    <Container>
      <StyledHeader>
        <HeaderContainer>
          <MainLogo />
          <MenuContainer>
            <StyledLink href="/experience">Work Experience</StyledLink>
            <StyledLink href="/skills">Skills</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href="/education">Education</StyledLink>
          </MenuContainer>
          <LinearButton href="/contact-me">CONTACT ME!</LinearButton>
        </HeaderContainer>
      </StyledHeader>
    </Container>
  );
};

const Container = styled.div`
  .headerTest {
    background-color: transparent;
    transition: all 0.5s ease-out 0s;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: #ca9c9a;
  transition: all 0.5s ease-out 0s;
  width: 100%;
  z-index: 2;
  opacity: 0.9;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  color: white;
  max-width: 1200px;
  margin: auto;
  padding: 10px 0;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  &:hover::after {
    width: 100%;
    transition: width 0.3s;
    color: #2b3538;
  }
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 3px;
    background: rgb(255, 255, 255);
    transition: width 0.3s ease 0s;
  }
`;

const LinearButton = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 8px;
  font-family: "Oswald";
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 1.4;
  padding: 10px;

  &:hover {
    box-shadow: rgb(255 255 255/ 15%) 0px 4px 8px;
  }
`;

export default Header;