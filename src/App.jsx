import './style.css';

import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Features from "./components/Features";
import ScrollButton from './components/ScrollButton';

const Container = styled.div`
  height: 100vh;
  min-height: 550px;
  overflow: hidden;
  position: relative;
  max-width: 1500px;
  margin: auto;
`;
const BottomContainer = styled.div`
  height: 100vh;
  background-color: #F9F9F9;
  min-height: 550px;
  overflow: hidden;
  position: relative;
  max-width: 1500px;
  margin: auto;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: #EEF5FF;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: #F9F9F9;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #edf6f9;;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: #EEF5FF;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
   
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Product/>
        <FeatureShape />
      </Container>
      
      <Container>
        <Features />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <BottomContainer>
        <ScrollButton />
        <Contact />
        <Footer />
      </BottomContainer>

    </>
  );
};

export default App;
