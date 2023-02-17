import styled from "@emotion/styled";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent, StyledArticle } from "../../components/Shared/Content";
import { StyledText } from "../../components/Shared/Text";

const Experience = () => {
  return (
    <PageContent>
      <PageHeader title="Work Experience" />
      <StyledArticle>
        <TimelineContainer>
          <ExperienceContainer>
            <LeftContent>
              <ContentTitle>LoopStudio</ContentTitle>
              <StyledText>sept 2021 – Present</StyledText>
            </LeftContent>
            <RightContent>
              <ContentTitle>React Developer</ContentTitle>
              <StyledText>
                Currently as React developer for a Cyber Security application.
                Previous as a frontend React js developer, using next js,
                react-redux.
              </StyledText>
            </RightContent>
          </ExperienceContainer>
          <ExperienceContainer>
            <LeftContent>
              <ContentTitle>Eureka Labs</ContentTitle>
              <StyledText>oct 2020 – SEPT 2021</StyledText>
            </LeftContent>
            <RightContent>
              <ContentTitle>Frontend Developer</ContentTitle>
              <StyledText>
                Front End Developer for Netsuite clients for e-commerce pages.
                Experience with ERP solutions, Backbone js, Handlebars, Sass,
                Git & Github, also working with Scrumban and Slack.
              </StyledText>
            </RightContent>
          </ExperienceContainer>
          <ExperienceContainer>
            <LeftContent>
              <ContentTitle>Roque Allende Ski & Summer</ContentTitle>
              <StyledText>Aug 2020 – OCT 2020</StyledText>
            </LeftContent>
            <RightContent>
              <ContentTitle>React Full Stack Developer Freelance</ContentTitle>
              <StyledText>
                Full stack web development from scratch for a travel agency
                application. User interface design, desktop and movile. Figma,
                Html, Css, JavaScript, React js, Bootstrap, Git, Node js, SQL
              </StyledText>
            </RightContent>
          </ExperienceContainer>
        </TimelineContainer>
      </StyledArticle>
    </PageContent>
  );
};

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

const ExperienceContainer = styled.div`
  display: flex;
  width: 90%;
  gap: 10%;
  align-items: center;
  justify-content: space-around;
`;

const LeftContent = styled.div`
  border-right: 1px solid black;
  width: 50%;
`;

const RightContent = styled.div`
  width: 50%;
`;

const ContentTitle = styled.h5``;

export default Experience;
