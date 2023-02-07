import styled from "@emotion/styled";
import { BasicTitle } from "../Text/text";

const Title = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

const StyledTitle = styled(BasicTitle)`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  width: ${({ width }) => (width ? width : "fit-content")};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
`;

export default Title;
