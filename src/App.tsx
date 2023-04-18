import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Navbar } from "./components/navbar/Navbar";
import { Contact } from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { Help } from "./pages/help/Help";
import { Landing } from "./pages/landing/Landing";
import { Products } from "./pages/products/Products";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="ayuda" element={<Help />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="productos" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
