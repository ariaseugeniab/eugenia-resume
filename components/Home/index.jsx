import styled from "@emotion/styled";
import Link from "next/link";
import theme from "../../theme/theme";
import Profile from "../Profile/Profile";
import { BasicTitle, StyledText } from "../Shared/Text/text";

const Home = () => {
  return (
    <div>
      <Profile />

      <StyledArticle>
        <AboutMeText>
          <StyledText>
            I'm a Frontend Developer currently working as a contractor for a
            Cyber Security product using React Js and React-Redux. I'm also
            experienced in Next Js and I’m interested in Mobile Development
            technologies such as React Native and Flutter.
          </StyledText>
          <StyledText>
            I have an educational and professional background in communication,
            that leads me to be an extrovert and an easy going person –I'm
            passionate about continuous learning and working among others. I'm
            also responsible and highly organized.
          </StyledText>
        </AboutMeText>
        <CardsContainer>
          <Card href="/experience">
            <CardTitle>WORK EXPERIENCE &rarr;</CardTitle>
            <StyledText>
              Find in-depth information about Next.js features and API.
            </StyledText>
          </Card>

          <Card href="/skills">
            <CardTitle>SKILLS &rarr;</CardTitle>
            <StyledText>
              Learn about Next.js in an interactive course with quizzes!
            </StyledText>
          </Card>

          <Card href="/projects">
            <CardTitle>PROJECTS &rarr;</CardTitle>
            <StyledText>
              Discover and deploy boilerplate example Next.js projects.
            </StyledText>
          </Card>
          <Card href="/education">
            <CardTitle>EDUCATION &rarr;</CardTitle>
            <StyledText>
              Discover and deploy boilerplate example Next.js projects.
            </StyledText>
          </Card>

          <Card href="/other">
            <CardTitle>TRAINING, COURSES AND OTHER &rarr;</CardTitle>
            <StyledText>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </StyledText>
          </Card>
          <Card href="/contact-me">
            <CardTitle>CONTACT ME! &rarr;</CardTitle>
            <StyledText>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </StyledText>
          </Card>
        </CardsContainer>
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.div`
  padding: 2rem;
  background-color: ${theme.color.white};
  border-radius: ${theme.borderRadius.regular};
`;

const AboutMeText = styled.div`
  width: 90%;
  margin: auto;
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: 2rem;
`;

const Card = styled(Link)`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  /* padding-top: 0; */
  text-align: left;
  text-decoration: none;
  background-color: ${theme.color.white};
  border-radius: ${theme.borderRadius.regular};
  transition: color 0.15s ease, border-color 0.15s ease;
  border: ${theme.border.thin};
  box-shadow: ${theme.boxShadow.none};
  cursor: pointer;

  &:hover {
    border: ${theme.border.solidWhite1};
    box-shadow: ${theme.boxShadow.grey};
  }
`;

const CardTitle = styled(BasicTitle)`
  background-color: ${theme.color.purple};
  color: ${theme.color.white};
  padding: 10px;
  font-size: 18px;
  font-weight: normal;
`;

export default Home;
