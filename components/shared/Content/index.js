import styled from "@emotion/styled";

export const PageContent = styled.div`
  width: 100%;
`;

export const StyledArticle = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius.regular};
`;
