import styled from "styled-components";
import { Logo } from "../logo/Logo";

const FooterContainer = styled.div`
  height: 30vh;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 2em;
  align-items: center;
`;
const FooterColumn = styled.div`
  width: 24%;
  text-align: center;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Link = styled.div``;

export const Footer = () => (
  <FooterContainer>
    <Logo />
    <FooterColumn>
      <Title>Ayuda</Title>
      <Link>Preguntas frecuentes</Link>
      <Link>Contacto</Link>
    </FooterColumn>
    <FooterColumn>
      <Title>Nuestras redes</Title>
      <Link>Instagram</Link>
      <Link>Facebook</Link>
    </FooterColumn>
    <FooterColumn>
      <Title>Ubicación</Title>
      <Link>Florida 8, Buenos Aires, Argentina</Link>
    </FooterColumn>
  </FooterContainer>
);
