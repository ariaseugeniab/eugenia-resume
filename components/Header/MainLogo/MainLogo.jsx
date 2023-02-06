import styled from "@emotion/styled";
import Link from "next/link";
import Title from "../../shared/Title/Title";

const MainLogo = () => {
  return (
    <MainTitle href="/">
      <Title size="20px" color="#666666">
        EUGENIA
      </Title>
      <Title size="20px" color="white">
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
