import React, { useState } from "react";
import "./HeroBook.css";

import cover from "../../assets/cover-gopinath.png";
import inside from "../../assets/inside-page.png";
import clickArrow from "../../assets/click-arrow.png";
import Hero from "../Hero/Hero";

const HeroBook: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setShowBack(true);
    }, 1000);
  };

  const handleClose = () => {
    setShowBack(false);
    setOpen(false);
  };

  return (
    <>
      <section className="hero-book">
        <div className="click-to-open">
          <img src={clickArrow} alt="click-to-open" className="click-arrow" />
          <span>{open ? "Click back to close" : "Click to open"}</span>
        </div>
        <div className="book-container">
          <div className="book">
            {/* OPENING PAGE IMAGE */}
            <img src={inside} alt="inside" className="inside-page" />

            {/* HERO CONTENT OVERLAY */}
            <div className="hero-overlay">
              <Hero />
            </div>

            {/* COVER */}
            <img
              src={cover}
              alt="cover"
              className={`cover-page ${open ? "open" : ""}`}
              onClick={() => !open && handleOpen()}
            />

            {/* BACK BUTTON */}
            {showBack && (
              <button className="back-btn" onClick={handleClose}>
                ←
              </button>
            )}
          </div>
        </div>
        <div className="click-to-open-container">
          <div className="click-to-open" style={{ justifyContent: "end" }}>
            <img src={clickArrow} alt="click-to-open" className="click-arrow" />
            <span>Case Studies</span>
          </div>
        </div>
      </section>

      <div className="case-studies-header-container">
        <div className="case-studies-box">MY CASE STUDY BOOKS</div>
      </div>
    </>
  );
};

export default HeroBook;
