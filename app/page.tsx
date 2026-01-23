import Banner from "./components/Banner";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ComoFuncionaSection from "./components/FuncionaSection";
import Header from "./components/Header";
import SobreSection from "./components/SobreSection";

export default function Home() {
  return (
  <>
  <Header />
  <Banner />
  <SobreSection/>
  <ComoFuncionaSection/>
  <Cta/>
  <Footer/>
  </>
  );
}
