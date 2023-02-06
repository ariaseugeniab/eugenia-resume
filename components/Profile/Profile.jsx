import styled from "@emotion/styled";
import Title from "../shared/Title/Title";

const Profile = () => {
  return (
    <ProfileContent>
      <ImageContainer image="/images/Profile-photo.png"></ImageContainer>
      <RightContent>
        <Title
          size="45px"
          color="white"
          width="80%"
          textAlign="center"
          margin="10px auto"
        >
          Eugenia Arias
        </Title>
        <DescriptionContainer>
          <Description>REACT FRONTEND DEVELOPER</Description>
        </DescriptionContainer>
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
  margin: 2rem;
  padding: 35px 0;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-position: 55% 35%;
  background-size: 110%;
  border-radius: 50%;
  border: 10px solid white;
  filter: grayscale(100%);
`;

const RightContent = styled.div`
  width: 50%;
`;

const DescriptionContainer = styled.div`
  background-color: #ca9c9a;
  padding: 20px;
  color: white;
`;

const Description = styled.h3`
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 1.4;
  text-align: center;
  font-weight: 500;
  width: 80%;
  margin: auto;
`;

export default Profile;
