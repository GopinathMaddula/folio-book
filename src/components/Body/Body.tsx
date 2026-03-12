import { Routes, Route } from "react-router-dom";

import MainBody from "../MainBody/MainBody";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<MainBody />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/case-studies" element={<Casestudies />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/case-studies/kharidh" element={<Kharidh />} />
      <Route path="/case-studies/edpedia" element={<Edpedia />} /> */}
    </Routes>
  );
};

export default Body;
