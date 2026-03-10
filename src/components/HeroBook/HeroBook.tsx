import React, { useState } from "react";
import "./HeroBook.css";

import cover from "../../assets/cover.png";
import inside from "../../assets/blank.png";

const HeroBook: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    // wait for animation to finish
    setTimeout(() => {
      setShowBack(true);
    }, 1000);
  };

  const handleClose = () => {
    setShowBack(false);
    setOpen(false);
  };

  return (
    <section className="hero-book">
      <div className="book-container">
        <div className="book">
          <img src={inside} alt="inside" className="inside-page" />

          <img
            src={cover}
            alt="cover"
            className={`cover-page ${open ? "open" : ""}`}
            onClick={() => !open && handleOpen()}
          />

          {showBack && (
            <button className="back-btn" onClick={handleClose}>
              ←
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBook;
