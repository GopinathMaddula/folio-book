import { Routes, Route } from "react-router-dom";

import MainBody from "../MainBody/MainBody";
import About from "../../pages/About/About";
import Casestudies from "../../pages/Casestudies/Casestudies";
import Resume from "../../pages/Resume/Resume";
import Ecf from "../../pages/Ecf/Ecf";
import Kharidh from "../../pages/Kharidh/Kharidh";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<MainBody />} />
      <Route path="/about" element={<About />} />
      <Route path="/case-studies" element={<Casestudies />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/case-studies/ecf" element={<Ecf />} />
      <Route path="/case-studies/kharidh" element={<Kharidh />} />
    </Routes>
  );
};

export default Body;
