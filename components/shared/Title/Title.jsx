import styled from "@emotion/styled";

const Title = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

const StyledTitle = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  width: ${({ width }) => (width ? width : "fit-content")};
  text-align: ${({ textAlign }) => textAlign};
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  line-height: 1.4;
  font-weight: normal;
  margin: ${({ margin }) => margin};
`;

export default Title;
