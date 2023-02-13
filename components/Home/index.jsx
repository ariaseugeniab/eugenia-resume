import styled from "@emotion/styled";
import Link from "next/link";
import Profile from "../Profile/Profile";
import { BasicTitle, StyledText } from "../Shared/Text";

const Home = () => {
  return (
    <div>
      <Profile />
      <StyledArticle>
        <CardsContainer>
          <Card href="/experience">
            <CardTitle>WORK EXPERIENCE </CardTitle>
            <CardText>My IT and not-IT-related work experiences.</CardText>
            <CardText isHidden>
              <ul>
                <li>
                  <p>REACT DEVELOPER</p>
                  <p>LOOPSTUDIO | sept 2021 – Present</p>
                </li>

                <li>
                  <p>FRONT END Developer - Netsuite partner</p>
                  <p>EUREKA LABS | oct 2020 – SEPT 2021</p>
                </li>
              </ul>
            </CardText>
          </Card>

          <Card href="/skills">
            <CardTitle>SKILLS &rarr;</CardTitle>
            <CardText>A list of known and used technologies.</CardText>
          </Card>

          <Card href="/projects">
            <CardTitle>PROJECTS &rarr;</CardTitle>
            <CardText>
              Discover all projects worked on and the technologies used.
            </CardText>
          </Card>
          <Card href="/education">
            <CardTitle>EDUCATION &rarr;</CardTitle>
            <CardText>My educational background til this day.</CardText>
          </Card>

          <Card href="/other">
            <CardTitle>TRAINING, COURSES AND OTHER &rarr;</CardTitle>
            <CardText>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardText>
          </Card>
          <Card href="/contact-me">
            <CardTitle>CONTACT ME! &rarr;</CardTitle>
            <CardText>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </CardText>
          </Card>
        </CardsContainer>
      </StyledArticle>
    </div>
  );
};

const StyledArticle = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius.regular};
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const Card = styled(Link)`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  background-color: ${(props) => props.theme.color.white};
  border-radius: ${(props) => props.theme.borderRadius.regular};
  transition: color 0.15s ease, border-color 0.15s ease;
  border: ${(props) => props.theme.border.thin};
  box-shadow: ${(props) => props.theme.boxShadow.none};
  cursor: pointer;

  max-height: 150px;
  overflow: hidden;

  &:hover {
    border: ${(props) => props.theme.border.solidWhite1};
    box-shadow: ${(props) => props.theme.boxShadow.grey};
    max-height: 100%;
  }
`;

const CardTitle = styled(BasicTitle)`
  background-color: ${(props) => props.theme.color.purple};
  color: ${(props) => props.theme.color.white};
  padding: 10px;
  font-size: 18px;
  font-weight: normal;
`;

const CardText = styled(StyledText)`
  margin: 10px 0;
  p {
    color: ${({ isHidden, theme }) => isHidden && theme.color.lightGrey};
  }
  opacity: 0.5;
`;

export default Home;
