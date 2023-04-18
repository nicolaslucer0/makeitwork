import styled from "styled-components";
import { Logo } from "../logo/Logo";

const NavbarContainer = styled.header`
  background: white;
  position: sticky;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  z-index: 10;
  top: 0;

  button {
    color: black;
  }
`;

export const Navbar = () => (
  <NavbarContainer className="sm:px-12 mx-auto flex items-center justify-between p-4 fixed">
    <div className="flex items-center space-x-2">
      <Logo />
    </div>
    <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
      <button className="rounded px-3 py-2 text-white transition">asd</button>
    </nav>
  </NavbarContainer>
);
