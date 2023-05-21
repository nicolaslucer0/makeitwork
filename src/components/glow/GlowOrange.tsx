import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const brilloAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BrilloContainer = styled.div`
  position: fixed;
  right: -11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Brillo = styled.div`
  width: 10px;
  height: 10px;
  box-shadow: #f29e0165 0px 0px 1000px 200px;
  animation: ${brilloAnimation} 1s ease-in-out;
`;

const GlowOrange = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const percentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrilloContainer
      style={{
        transform: `translateY(-${scrollPercentage}%)`,
      }}
    >
      <Brillo />
    </BrilloContainer>
  );
};

export default GlowOrange;
