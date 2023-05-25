import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import rocket from "./../../assets/rocket.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  align-items: center;
  display: flex;
  line-height: 80px;
  color: black;
  font-size: 4em;
  font-weight: 800;
  padding: 3em;
`;

const Image = styled.img`
  width: 20%;
  margin-left: 1em;
`;

const StyledScrollAnimation = styled(ScrollAnimation)`
  display: flex;
`;

export const PromoText = () => {
  return (
    <Container>
      <StyledScrollAnimation animateIn="fadeIn" duration={2} delay={1}>
        We take your business to the next level with tailor-made programming
        solutions.
        <Image src={rocket} />
      </StyledScrollAnimation>
    </Container>
  );
};
