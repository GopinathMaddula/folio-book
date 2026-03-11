import profile from "../../assets/profile-right.png";
import skills from "../../assets/skills.png";
import download from "../../assets/download.png";
import "./Hero.css";

const Hero: React.FC = () => {
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
          <button className="download-resume-btn">
            <img src={download} alt="Download Resume" />
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
