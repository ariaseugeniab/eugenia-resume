import styled from "@emotion/styled";
import Link from "next/link";
import theme from "../../../theme/theme";
import Title from "../../Shared/Title/Title";

const MainLogo = () => {
  return (
    <MainTitle href="/">
      <Title size="20px" color={theme.color.lightGrey}>
        EUGENIA
      </Title>
      <Title size="20px" color={theme.color.white}>
        ARIAS
      </Title>
    </MainTitle>
  );
};

const MainTitle = styled(Link)`
  display: flex;
  align-items: center;
`;

export default MainLogo;
