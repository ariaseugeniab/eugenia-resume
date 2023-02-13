import styled from "@emotion/styled";

export const StyledText = styled.p`
  font-family: ${(props) => props.theme.fontFamily.lato};
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.color.lightGrey};
  line-height: ${(props) => props.theme.lineHeight.regular};
  text-align: justify;
`;

export const BasicTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.oswald};
  text-transform: uppercase;
  letter-spacing: ${(props) => props.theme.letterSpacing.title};
  line-height: ${(props) => props.theme.lineHeight.regular};
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.base};
`;
