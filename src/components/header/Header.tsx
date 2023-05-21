import { useEffect, useState } from "react";
import "swiper/css";

import styled from "styled-components";
import { background, fadeIn, gradient } from "../../styles/styles";

const MainScreenContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: ${background};
  background-size: 200% 200%;
  animation: ${gradient} 10s ease infinite;
`;

const Title = styled.h1`
  font-size: 4em;
  font-family: helvetica-bold;
  color: black;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-in-out;

  line-height: 1.2em;
  font-weight: bolder;

  @media (max-width: 767px) {
    font-size: 3em;
  }
`;

export const Header = () => {
  const [index, setIndex] = useState(0);

  const words = Object.freeze([
    { text: "innovative", color: "#2196f3" },
    { text: "cutting-edge", color: "#00bcd4" },
    { text: "transformative", color: "#9c27b0" },
    { text: "exceptional", color: "#009688" },
    { text: "revolutionary", color: "#e91e63" },
    { text: "digital", color: "#ff5722" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      let a = index;
      if (a >= words.length - 1) setIndex(0);
      else setIndex(++a);
    }, 1000);

    return () => clearInterval(interval);
  }, [index, words]);
  return (
    <MainScreenContainer>
      <Title>We deliver</Title>
      <Title
        style={{
          color: words[index].color,
          fontFamily: "sans-serif",
          textShadow: `${words[index].color} 0px 0px 150px`,
        }}
      >
        {words[index].text}
      </Title>
      <Title>experiences.</Title>
    </MainScreenContainer>
  );
};
