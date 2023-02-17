import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent, StyledArticle } from "../../components/Shared/Content";
import { StyledText } from "../../components/Shared/Text";
import Title from "../../components/Shared/Title/Title";

const Skills = () => {
  return (
    <PageContent>
      <PageHeader title="Skills" />
      <StyledArticle>
        <StyledText>
          <Title>Here are some of my skills and technologies</Title>
          <ul>
            <li>HTML5, CSS3 / Sass, JavaScript / ES6</li>
            <li>React Js & Next Js</li>
            <li>React-Redux & Context API</li>
            <li>React Native (trainee)</li>
            <li>Api Rest & Axios</li>
            <li>GraphQL</li>
            <li>npm / yarn & Git / Github</li>
            <li>UI libraries: Bootstrap / Bulma / Materialize</li>
            <li>JS libraries: Handlebars / Query / Underscore</li>
            <li>Testing libraries: Mocha & Chai</li>
            <li>Backend tech knowledge: Node.js / Express & SQL / MySql</li>
            <li>Agile Methodologies: Kanban / Scrumban</li>
            <li>
              Soft Skills: Team work, Communication, Compromise, Organization
              and Responsibility
            </li>
          </ul>
        </StyledText>
      </StyledArticle>
    </PageContent>
  );
};

export default Skills;
