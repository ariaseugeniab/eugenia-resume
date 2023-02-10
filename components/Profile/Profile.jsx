import styled from "@emotion/styled";
import theme from "../../theme/theme";
import { StyledText } from "../shared/Text/text";
import Title from "../Shared/Title/Title";

const Profile = () => {
  return (
    <ProfileContent>
      <ImageContainer image="/images/Profile-photo.png"></ImageContainer>
      <RightContent>
        <Title
          size="45px"
          color={theme.color.white}
          width="90%"
          textAlign="center"
          margin="10px auto"
        >
          Eugenia Arias
        </Title>
        <DescriptionContainer>
          <Description>REACT DEVELOPER</Description>
        </DescriptionContainer>
        <AboutMeText>
          <StyledText>
            Hey there! I'm a Frontend Developer in React Js, React-Redux and
            Next Js. I'm a passionate learner and I love working among others.
            I'm also responsible and highly organized.
          </StyledText>
        </AboutMeText>
      </RightContent>
    </ProfileContent>
  );
};

const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: space-evenly;
  margin: 2rem 0;
  padding: 35px 0;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-position: 55% 35%;
  background-size: 110%;
  border-radius: ${(props) => props.theme.borderRadius.circular};
  border: ${(props) => props.theme.border.boldWhite};
  filter: grayscale(100%);
`;

const RightContent = styled.div`
  width: 50%;
`;

const DescriptionContainer = styled.div`
  background-color: ${(props) => props.theme.color.paleOrange};
  padding: 10px;
  color: ${(props) => props.theme.color.white};
`;

const Description = styled.h3`
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 1.4;
  text-align: center;
  font-weight: 500;
  width: 90%;
  margin: auto;
`;

const AboutMeText = styled.div`
  margin-top: 1rem;
  p {
    color: ${(props) => props.theme.color.white};
  }
`;

export default Profile;
