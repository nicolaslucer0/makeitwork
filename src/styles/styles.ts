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

export const Subtitle = styled.h1`
  font-size: 2em;
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

export const blue = "#2196f3";
export const lgreen = "#00bcd4";
export const violet = "#9c27b0";
export const green = "#009688";
export const red = "#e91e63";
export const orange = "#ff5722";
export const background = "#fff4f4;";