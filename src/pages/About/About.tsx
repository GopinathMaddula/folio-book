import React from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import aboutMe from "../../assets/images/About me.svg";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import f1s from "../../assets/images/F1Studioz 1.png";
import nano from "../../assets/nano.png";
import madul from "../../assets/madul-logo.png";
import lince from "../../assets/lince-logo.jpg";

import "./About.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const About: React.FC = () => {
  return (
    <main className="about-page-main-container">
      {/* About */}

      <div className="about-text-container">
        <h2 className="about-heading">UX / UI Designer & Developer</h2>
        <p className="about-description">
          My journey began in front-end development, where I mastered{" "}
          <span className="highlighter">React.js, TypeScript, HTML, CSS, </span>
          and<span className="highlighter"> Material UI </span>to build
          pixel-perfect, responsive layouts. Over time, I evolved into designing
          user experiences that balance form, function, and emotion — because I
          believe every click, scroll, and hover should make sense.
        </p>
        <p className="about-description">
          I’ve also completed the{" "}
          <span className="highlighter">Google UX Design Certification</span>,
          which strengthened my foundation in{" "}
          <span className="highlighter">
            user research, wireframing, prototyping
          </span>
          , and <span className="highlighter">usability testing</span> — helping
          me design experiences that are not only visually engaging but also
          grounded in user-centered thinking.
        </p>
      </div>

      <hr />

      {/* WORK EXPERIENCE */}

      <div className="work-experience-head-container">
        <h2 className="work-experience-about-heading">Work Experience</h2>
        <div className="work-experience-all-container">
          {/* <div className="work-experience-container about-work-experience">
            <span className="edp-head">Edpedia</span>
            <span className="designation">Freelance UX/UI Designer</span>
            <span className="duration">
              Duration: <span className="dur-period">6 Months</span>
            </span>
            <span className="duration">Description:</span>
            <p className="edpedia-description">
              Led the complete UX/UI design for the Library Management Module,
              taking ownership from research to final handoff.
              <br />
              <br />
              Designed intuitive user flows for book issuing, tracking,
              cataloging, and internal school operations. Created scalable
              design components and a cohesive interface aligned with Edpedia’s
              overall school management system.
              <br />
              <br />
              Collaborated closely with stakeholders to refine requirements and
              deliver a clean, efficient, and user-friendly module.
            </p>
          </div>
          <div className="work-experience-container about-work-experience">
            <img src={f1s} alt="f1s" />
            <span className="designation">UX/UI Designer & Developer</span>
            <span className="duration">
              Duration: <span className="dur-period">2+ Years</span>
            </span>

            <span className="duration">Dinamani (News & Media Website)</span>
            <span className="duration">
              Role:
              <span className="dur-period">Designer & Frontend Developer</span>
            </span>
            <p className="edpedia-description">
              Worked on designing and developing user-interactive pages for
              stories, videos, and galleries. Delivered pixel-perfect UI layouts
              based on editorial requirements. Improved accessibility,
              responsiveness, and overall user experience across devices.
            </p>
            <span className="duration">
              Ozonetel (Call Center Software Platform)
            </span>
            <span className="duration">
              Role:
              <span className="dur-period">Frontend Developer</span>
            </span>
            <p className="edpedia-description">
              Developed dashboards and interface components for global call
              center operations. Built reusable React components and optimized
              UI performance. Collaborated with cross-functional teams in an
              agile environment to deliver production-ready features.
            </p>
          </div> */}
          <div className="work-experience-container about-work-experience">
            {/* <img src={nano} alt="Nano Tech E Services" className="nano-img" /> */}
            <div className="companies-container">
              <div className="cards-container">
                <div className="card">
                  <img src={madul} alt="madul" className="card-img madul-img" />
                  <div className="vertical-line"></div>
                  <div className="card-content">
                    <h1>Madul Tech Software Pvt. Ltd</h1>
                    <p>Nov 2024 – Feb 2026</p>
                    <span>UI/UX Designer</span>
                  </div>
                </div>

                <div className="card">
                  <img src={f1s} alt="F1S" className="card-img f1s-img" />
                  <div className="vertical-line"></div>
                  <div className="card-content">
                    <h1>F1Studioz</h1>
                    <p>Nov 2022 – Oct 2024</p>
                    <span>UI Engineer</span>
                  </div>
                </div>

                <div className="card">
                  <img src={lince} alt="Lince" className="card-img lince-img" />
                  <div className="vertical-line"></div>
                  <div className="card-content">
                    <h1>Lince Soft Solutions Pvt. Ltd</h1>
                    <p>Aug 2021 – Jul 2022</p>
                    <span>UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <span className="designation">UX/UI Designer & Developer</span> */}
            <span className="duration">
              Total Experience: <span className="dur-period">4+ Years</span>
            </span>
            <hr style={{ width: "100%", opacity: 0.2 }} />

            {/* DINAMANI */}
            <span className="duration services">
              Dinamani (News & Media Website)
            </span>
            <span className="duration">
              Role:
              <span className="dur-period">UX/UI Designer</span>
            </span>
            <p className="edpedia-description">
              Worked on designing and developing user-interactive pages for
              stories, videos, and galleries. Delivered pixel-perfect UI layouts
              based on editorial requirements. Improved accessibility,
              responsiveness, and overall user experience across devices.
            </p>
            <hr style={{ width: "100%", opacity: 0.2 }} />
            {/* EDPEDIA */}
            <span className="edp-head">Edpedia</span>
            <span className="duration">
              Role:
              <span className="dur-period">UX/UI Designer </span>
            </span>
            <p className="edpedia-description">
              Led the complete UX/UI design for the Library Management Module,
              taking ownership from research to final handoff.
              <br />
              Designed intuitive user flows for book issuing, tracking,
              cataloging, and internal school operations. Created scalable
              design components and a cohesive interface aligned with Edpedia’s
              overall school management system.
            </p>
            <hr style={{ width: "100%", opacity: 0.2 }} />
            {/* OZONETEL */}
            <span className="duration services">
              Ozonetel (Call Center Software Platform)
            </span>
            <span className="duration">
              Role:
              <span className="dur-period">UX/UI Designer & Developer</span>
            </span>
            <p className="edpedia-description">
              Developed dashboards and interface components for global call
              center operations. Built reusable React components and optimized
              UI performance. Collaborated with cross-functional teams in an
              agile environment to deliver production-ready features.
            </p>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "40px" }} />

      {/*Certifications */}

      <div className="work-experience-head-container">
        <h2 className="work-experience-about-heading">Certifications</h2>
        <div className="certification-container">
          <ImageCarousel />
        </div>
      </div>
    </main>
  );
};

export default About;
