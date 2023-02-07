import styled from "@emotion/styled";
import theme from "../../../theme/theme";

export const StyledText = styled.p`
  font-family: ${theme.fontFamily.lato};
  font-size: ${theme.fontSize.xs};
  color: ${theme.color.lightGrey};
  line-height: ${theme.lineHeight.regular};
  text-align: justify;
`;

export const BasicTitle = styled.h1`
  font-family: ${theme.fontFamily.oswald};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.title};
  line-height: ${theme.lineHeight.regular};
  font-weight: normal;
  font-size: ${theme.fontSize.base};
`;
