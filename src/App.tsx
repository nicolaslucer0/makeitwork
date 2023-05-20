import { Route, Routes } from "react-router-dom";
import "./App.css";
import FullscreenMenu from "./components/navbar/FullScreenMenu";
import { Contact } from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { Help } from "./pages/help/Help";
import { Landing } from "./pages/landing/Landing";

function App() {
  return (
    <>
      <FullscreenMenu />
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
