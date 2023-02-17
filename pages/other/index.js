import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent, StyledArticle } from "../../components/Shared/Content";
import { StyledText } from "../../components/Shared/Text";
import Title from "../../components/Shared/Title/Title";

const Other = () => {
  return (
    <PageContent>
      <PageHeader title="Other" />
      <StyledArticle>
        <Title>TRAINING, COURSES AND OTHER</Title>
        <StyledText>- REACT NATIVE UDEMY - 2021</StyledText>
        <StyledText>- REACT JS UDEMY - 2020</StyledText>
        <StyledText>
          - FULL STACK DEVELOPMENT MENTOR METCAMP - AUG AND SEPT 2020
        </StyledText>
        <StyledText>- WEB DEV INTRODUCTION Google Activate - 2019</StyledText>
        <StyledText>- FRENCH Facultad de Lenguas. 2016-2017</StyledText>
        <StyledText>
          - ENGLISH - 1 YEAR 3rd level Facultad de Lenguas. 2015
        </StyledText>
      </StyledArticle>
    </PageContent>
  );
};

export default Other;
