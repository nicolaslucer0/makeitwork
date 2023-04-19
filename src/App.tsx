import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Banner } from "./components/banner/Banner";
import { Navbar } from "./components/navbar/Navbar";
import { Contact } from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { Help } from "./pages/help/Help";
import { Landing } from "./pages/landing/Landing";
import { Products } from "./pages/products/Products";
import { Product } from "./models/Product";
import image1 from './assets/products/p1.webp';
import image2 from './assets/products/p2.webp';
import image3 from './assets/products/p3.webp';
import image4 from './assets/products/p4.webp';
import image5 from './assets/products/p5.webp';
import image6 from './assets/products/p6.webp';

function App() {
  const products: Product[] = [
    { name: "Cartera", description: "producto4", image: image1 },
    { name: "producto1", description: "producto1", image: image2 },
    { name: "producto2", description: "producto2", image: image3 },
    { name: "producto3", description: "producto3", image: image4 },
    { name: "producto4", description: "producto3", image: image5 },
    { name: "producto5", description: "producto3", image: image6 },
  ];
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="ayuda" element={<Help />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="productos" element={<Products products={products} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
