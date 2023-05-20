import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/it/Header";
import { Showcase } from "../../components/product-list/Showcase";
import { Promo } from "../../components/promo/Promo";
import { products } from "../../constants/Constants";
import slide2 from "./../../assets/carousel/2.jpeg";
import slide3 from "./../../assets/carousel/3.jpeg";

export const Landing = () => {
  return (
    <>
      <Header />
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
      <Showcase products={products} />
      <Footer />
    </>
  );
};
