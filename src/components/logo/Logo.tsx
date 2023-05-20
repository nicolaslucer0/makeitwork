import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.3rem;
  line-height: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MenuButton = styled.div`
  z-index: 20;
  font-size: 3em;
  margin: 20px;
  padding: 20px;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  color: black;
  position: fixed;
  top: 0;
  right: 0;
`;

export const Logo = () => (
  <MenuButton>
    <Title>make</Title> <Title style={{ color: "red" }}>I.T</Title>{" "}
    <Title>work</Title>
  </MenuButton>
);
