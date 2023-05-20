import { useEffect, useState } from "react";
import "swiper/css";

import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const MainScreenContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: linear-gradient(-45deg, #cecaff, #fff4f4, #fff4f4, #9df5ff);
  background-size: 400% 400%;
  animation: ${gradient} 10s ease infinite;
`;

const Title = styled.h1`
  font-size: 4em;
  font-family: lato-bold;
  color: black;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease-in-out;
  width: 50%;
  line-height: 1em;
  font-weight: bolder;
`;

export const Header = () => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("digital");
  const words = Object.freeze([
    "innovative",
    "cutting-edge",
    "transformative",
    "exceptional",
    "revolutionary",
    "digital",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      let a = index;
      if (a >= words.length - 1) setIndex(0);
      else setIndex(++a);
      setWord(words[index]);
    }, 700);

    return () => clearInterval(interval);
  }, [index, words]);
  return (
    <MainScreenContainer>
      <Title>
        We deliver <br></br>
        {word}
        <br></br> experiences.
      </Title>
    </MainScreenContainer>
  );
};
