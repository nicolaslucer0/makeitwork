import { Route, Routes } from "react-router-dom";
import "./App.css";
import FullscreenMenu from "./components/navbar/FullScreenMenu";
import { Contact } from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { Help } from "./pages/help/Help";
import { Landing } from "./pages/landing/Landing";
import { Logo } from "./components/logo/Logo";
import GlowTop from "./components/glow/GlowTop";
import GlowBottom from "./components/glow/GlowBottom";
import GlowOrange from "./components/glow/GlowOrange";
import GlowLBlue from "./components/glow/GlowLBlue";

function App() {
  return (
    <>
      <GlowTop />
      <GlowBottom />
      <GlowOrange />
      <GlowLBlue />
      <FullscreenMenu />
      <Logo />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="ayuda" element={<Help />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
