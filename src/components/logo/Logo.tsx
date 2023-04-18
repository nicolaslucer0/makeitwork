import styled from "styled-components";

const LogoContainer = styled.div``;
const Title = styled.h1`
  font-size: 2rem;
  line-height: 20px;
  font-weight: bold;
  margin:0;
  padding: 0;
`;
const Subtitle = styled.h3`
  font-size: 10px;
  text-align: right;
  margin:0;
  padding: 0;
`;

export const Logo = () => (
  <LogoContainer>
    <Title>Lucero</Title>
    <Subtitle>Cueros</Subtitle>
  </LogoContainer>
);
