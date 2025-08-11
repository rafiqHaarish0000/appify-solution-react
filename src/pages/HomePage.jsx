import { Parallax } from "@react-spring/parallax";
import IntroScreen from "../components/Screen1";
import WhatWeDoScreen from "../components/Screen2";
import ServiceScreen from "../components/Screen3";
import ProductScreen from "../components/Screen4";
import ResearchScreen from "../components/Screen5";

export default function HomePage({ parallaxRef }) {
  return (
    <div className="parallax-container">
      <Parallax ref={parallaxRef} pages={5.5}>
        <IntroScreen />
        <WhatWeDoScreen />
        <ServiceScreen />
        <ProductScreen />
        <ResearchScreen />
      </Parallax>
    </div>
  );
}
