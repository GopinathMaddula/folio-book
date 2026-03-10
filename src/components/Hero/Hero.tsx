import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleBookClick = (): void => {
    navigate("/portfolio");
  };

  return (
    <div className="hero">
      <div className="hero-container">
        {/* LEFT TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            GOPINATH MADDULA
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            UX / UI DESIGNER
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Welcome to my design portfolio. Click on the folio book to explore
            my case studies, design process, and creative work.
          </motion.p>

          <motion.div
            className="hero-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="status-dot"></div>
            <span>Available for UX/UI Designer roles</span>
          </motion.div>
        </motion.div>

        {/* RIGHT BOOK */}
        <motion.div
          className="book-wrapper"
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleBookClick}
        >
          <motion.div
            className="book"
            animate={{
              rotateY: isHovered ? 8 : -5,
              scale: isHovered ? 1.05 : 1,
            }}
          >
            <div className="book-shadow"></div>
            <div className="book-edge"></div>
            <div className="book-cover">
              {/* Glass highlight */}
              <div className="book-glass"></div>

              {/* Content */}
              <motion.div
                className="book-content"
                animate={{ y: isHovered ? -10 : 0 }}
              >
                <h3>UX / UI DESIGNER</h3>
                <p>GOPINATH FOLIO BOOK</p>

                <div className="design-process">
                  <span>EMPATHY</span>
                  <span>DEFINE</span>
                  <span>IDEATE</span>
                  <span>PROTOTYPE</span>
                  <span>TEST</span>
                </div>
              </motion.div>

              <motion.div
                className="click-indicator"
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                  x: isHovered ? 5 : 0,
                }}
              >
                <span>CLICK TO OPEN</span>
              </motion.div>
            </div>

            <motion.div
              className="book-glow"
              animate={{ opacity: isHovered ? 0.5 : 0 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
