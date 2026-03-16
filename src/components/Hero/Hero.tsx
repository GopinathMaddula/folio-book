import profile from "../../assets/profile-right.png";
import skills from "../../assets/skills.png";
import resumePdf from "../../assets/images/Gopinath Maddula 4+.pdf";

import "./Hero.css";

const Hero: React.FC = () => {
  // handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf; // or use uploadedPdfPath if you want the direct /mnt/data path
    link.download = "Gopinath_Maddula_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="book-hero">
      <div className="book-hero-text">
        <h1 className="book-hero-name">GOPINATH MADDULA</h1>

        <h2 className="book-hero-role">UX / UI DESIGNER</h2>

        <p className="book-hero-description">
          Passionate about crafting intuitive and beautiful digital experiences.
          Specializing in user-centered design with a focus on accessibility and
          innovation.
        </p>

        <img src={skills} alt="skills" className="skills-img" />
        <div className="contact-container">
          <div className="mail-contact">
            <span>gopinath.maddula173@gmail.com</span>
            <span>+91 9701999902</span>
          </div>
          <button className="download-resume-btn" onClick={handleDownload}>
            <svg
              className="download-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12"></path>
              <path d="M7 10l5 5 5-5"></path>
              <path d="M5 21h14"></path>
            </svg>

            <span>DOWNLOAD RESUME</span>
          </button>
        </div>
      </div>

      <div className="book-hero-image">
        <img src={profile} alt="Gopinath Maddula" />
        <div className="hero-indicator">
          <div className="status-dot"></div>
          <span>AVAILABLE FOR HIRE IN HYDERABAD</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
