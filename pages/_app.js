import styled from "@emotion/styled";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/theme";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
}

const MainContainer = styled.div`
  padding-top: 50px;
  background: ${theme.color.purple};
  background: linear-gradient(
    180deg,
    rgba(153, 135, 207, 1) 0%,
    rgba(198, 125, 125, 1) 35%,
    rgba(246, 194, 126, 1) 100%
  );
`;

const Content = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 1200px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
