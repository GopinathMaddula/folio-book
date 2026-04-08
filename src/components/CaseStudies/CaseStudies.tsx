import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudies.css";
import ecf from "../../assets/ecf-book.png";
import ecfHover from "../../assets/ecf-book-hover.png";
import kharidh from "../../assets/kharidh-book.png";
import kharidhHover from "../../assets/kharidh-book-hover.png";
import snapSelect from "../../assets/snapselect.png";

const CaseStudies: React.FC = () => {
  return (
    <div className="books-main-container">
      <div className="books-container">
        <Link to="/case-studies/ecf" className="book-card">
          <img className="book-img default" src={ecf} alt="ECF Book" />
          <img className="book-img hover" src={ecfHover} alt="ECF Hover" />
        </Link>

        <Link to="/case-studies/kharidh" className="book-card">
          <img className="book-img default" src={kharidh} alt="Kharidh Book" />
          <img
            className="book-img hover"
            src={kharidhHover}
            alt="Kharidh Hover"
          />
        </Link>

        <div className="book-card">
          <img
            className="book-img book-disabled"
            src={snapSelect}
            alt="ECF Book"
          />
          {/* <img className="book-img hover" src={ecfHover} alt="ECF Hover" /> */}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
