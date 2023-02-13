import styled from "@emotion/styled";
import Link from "next/link";
import { BasicTitle } from "../Shared/Text";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Column>
          <StyledLink href="/experience">
            <BasicTitle>Work Experience</BasicTitle>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink href="/skills">
            <BasicTitle>Skills</BasicTitle>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink href="/projects">
            <BasicTitle>Projects</BasicTitle>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink href="/education">
            <BasicTitle>Education</BasicTitle>
          </StyledLink>
        </Column>
        <Column>
          <StyledLink href="/contact-me">
            <BasicTitle>Contact me!</BasicTitle>
          </StyledLink>
        </Column>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.color.paleOrange};
  width: 100%;
  border-top: ${(props) => props.theme.border.thin};
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
`;

const Column = styled.div`
  min-height: 100px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.white};

  &:hover::after {
    width: 100%;
    transition: width 0.3s;
    color: ${(props) => props.theme.color.grey};
  }
  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 3px;
    background: ${(props) => props.theme.color.white};
    transition: width 0.3s ease 0s;
  }
`;

export default Footer;
