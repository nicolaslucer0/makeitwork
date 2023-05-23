import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

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
`;

export const PromoText = () => {
  return (
    <Container>
      <ScrollAnimation animateIn="fadeIn" duration={2} delay={2}>
        We take your business to the next level with tailor-made programming
        solutions.
      </ScrollAnimation>
    </Container>
  );
};
