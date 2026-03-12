import React from "react";
import "./CaseStudies.css";
import ecf from "../../assets/ecf-book.png";
import ecfHover from "../../assets/ecf-book-hover.png";

const CaseStudies: React.FC = () => {
  return (
    <div className="books-main-container">
      <div className="books-container">
        <div className="book-card">
          <img className="book-img default" src={ecf} alt="ECF Book" />
          <img className="book-img hover" src={ecfHover} alt="ECF Hover" />
        </div>

        <div className="book-card">
          <img className="book-img default" src={ecf} alt="ECF Book" />
          <img className="book-img hover" src={ecfHover} alt="ECF Hover" />
        </div>

        <div className="book-card">
          <img className="book-img default" src={ecf} alt="ECF Book" />
          <img className="book-img hover" src={ecfHover} alt="ECF Hover" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
