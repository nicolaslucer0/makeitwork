import styled from "styled-components";
import "swiper/css";
import { Subtitle, Title, background, blue, violet } from "../../styles/styles";
import federal from "./../../assets/carousel/federal.gif";

const Container = styled.div`
  padding: 2em;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background: ${background};
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  aign-items: center;
`;

const Image = styled.img`
  border-radius: 30px;
  width: 60%;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  margin-right: 1em;
`;

const Text = styled.div`
  padding: 2em;
  margin: auto;
  background: white;
  border-radius: 10px;
  font-size: 1.4rem;
  font-family: helvetica-light, sans-serif;
  transition: .4s;
  &:hover {
    box-shadow: 0 0 7px 0px #cbcbcb;
  }
`;

const ColoredText = styled.div`
  color: ${blue};
`;

export const Projects = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Title style={{ marginRight: "10px" }}>OUR</Title>
        <Title style={{ color: violet }}>PROYECTS</Title>
      </div>

      <ProjectContainer>
        <ProjectDescription>
          <Text>
            <ColoredText>Sign up form</ColoredText>
            <Subtitle>Federal Gaming</Subtitle>
            Formulario de inscripción para un torneo de e-sports, que cuenta con
            un administrador para descargar la lista de participantes en formato
            excel.
          </Text>
        </ProjectDescription>
        <Image alt="federal" src={federal} />
      </ProjectContainer>
    </Container>
  );
};
