import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  z-index: 9999;
  position: fixed;
`;
const MenuButton = styled.button`
  z-index: 20;
  font-size: 3em;
  margin: 20px;
  padding: 20px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
`;

const CloseButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  font-size: 24px;
  cursor: pointer;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  font-size: 3em;
  margin: 20px;
  padding: 20px;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: white;
  color: black;
  top: 0;
  left: 0;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const MenuItem = styled.div`
  font-family: helvetica-bold;
  font-size: 2em;
`;

const FullscreenMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuContainer isOpen={isOpen}>
        <CloseButton onClick={toggleMenu} isOpen={isOpen}>
          <FontAwesomeIcon icon={faClose} />
        </CloseButton>
        <MenuList>
          <MenuItem>INICIO</MenuItem>
          <MenuItem>NOSOTROS</MenuItem>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default FullscreenMenu;
