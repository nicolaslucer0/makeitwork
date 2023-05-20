import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const gradient = keyframes`
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

export const Title = styled.h1`
  font-size: 4em;
  font-family: lato-bold;
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



export const Subtitle = styled.h1`
  font-size: 2em;
  font-family: lato-bold;
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
