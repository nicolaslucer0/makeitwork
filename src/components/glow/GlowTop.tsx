import { useEffect, useState } from "react";
import styled from "styled-components";

import { keyframes } from "styled-components";

const brilloAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const BrilloContainer = styled.div`
  position: fixed;
  right: -11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Brillo = styled.div`
  width: 10px;
  height: 10px;
  box-shadow: #e66dca68 0px 0px 1000px 200px;
  animation: ${brilloAnimation} 1s ease-in-out;
`;

const GlowTop = () => {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setTopPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <BrilloContainer style={{ top: `${topPosition}px` }}>
      <Brillo />
    </BrilloContainer>
  );
};

export default GlowTop;
