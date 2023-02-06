import styled from "@emotion/styled";
import Link from "next/link";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Column>
          <StyledLink href="/experience">Work Experience</StyledLink>
        </Column>
        <Column>
          <StyledLink href="/skills">Skills</StyledLink>
        </Column>
        <Column>
          <StyledLink href="/projects">Projects</StyledLink>
        </Column>
        <Column>
          <StyledLink href="/education">Education</StyledLink>
        </Column>
        <Column>
          <StyledLink href="/contact-me">CONTACT ME!</StyledLink>
        </Column>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: #ca9c9a;
  width: 100%;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px 0;
  gap: 60px;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Oswald";
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 1.4;
`;

const Column = styled.div`
  min-height: 100px;
`;

const StyledLink = styled(Link)`
  color: white;
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

export default Footer;
