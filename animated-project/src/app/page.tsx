import { ReactLenis } from "lenis/react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <ReactLenis root>
      <Hero />
      <Main />
      <Footer />
    </ReactLenis>
  );
};

export default Home;
