import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Projects } from "../../components/projects/Projects";
import { PromoText } from "../../components/text/PromoText";

export const Landing = () => {
  return (
    <>
      <Header />
      <Projects />
      <PromoText />
      <Footer />
    </>
  );
};
