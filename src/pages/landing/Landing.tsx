import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ProductList } from "../../components/product-list/ProductList";
import { Promo } from "../../components/promo/Promo";
import { Product } from "../../models/Product";
import slide5 from "./../../assets/carousel/1.jpg";
import slide10 from "./../../assets/carousel/10.png";
import slide2 from "./../../assets/carousel/2.jpeg";
import slide3 from "./../../assets/carousel/3.jpeg";
import slide4 from "./../../assets/carousel/4.jpeg";
import product1 from "./../../assets/products/1.jpeg";
import product2 from "./../../assets/products/2.webp";
import product3 from "./../../assets/products/3.webp";

export const Landing = () => {
  const products: Product[] = [
    { name: "Cartera", description: "producto4", image: slide10 },
    { name: "producto1", description: "producto1", image: product1 },
    { name: "producto2", description: "producto2", image: product2 },
    { name: "producto3", description: "producto3", image: product3 },
  ];
  return (
    <>
      <Header images={[slide10, slide2, slide3, slide4, slide5]} />
      <Promo
        title="Carteras"
        subtitle=""
        mode="left"
        img={slide3}
        variant="light"
      />
      <Promo
        title="Billeteras"
        subtitle="y accesorios"
        mode="right"
        img={slide2}
        variant="dark"
      />
      <ProductList products={products} />
      <Footer />
    </>
  );
};
