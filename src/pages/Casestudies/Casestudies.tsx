import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import figmaWhite from "../../assets/images/akar-icons_figma-fill.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import fArrow from "../../assets/images/Vector.png";
import "./Casestudies.css";
import CaseStudies from "../../components/CaseStudies/CaseStudies";

const delay = (value: string) => ({ "--d": value }) as React.CSSProperties;

const Casestudies: React.FC = () => {
  return (
    <div className="case-studies-page">
      <div className="case-studies-header">
        <h1 className="cs-main-heading fade-up" style={delay("0s")}>
          My Case Studies
        </h1>
        <p className="cs-tagline fade-up" style={delay("0.12s")}>
          A curated selection of my UX/UI projects.
        </p>
        <p className="cs-description fade-up" style={delay("0.24s")}>
          Each case study showcases my end-to-end design approach — from
          discovering user problems, defining clear goals, ideating solutions,
          and crafting polished UI experiences. These projects demonstrate how I
          blend creativity with usability to deliver meaningful digital
          products.
        </p>

        <CaseStudies />
      </div>
    </div>
  );
};

export default Casestudies;
