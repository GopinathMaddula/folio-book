import React from "react";
import ecf from "../../assets/ecfbanner.png";
import ecfDocument from "../../assets/ecf document.png";
const Ecf: React.FC = () => {
  return (
    <div>
      <img src={ecf} alt="Ecf" style={{ width: "100%", height: "auto" }} />
      <img
        src={ecfDocument}
        alt="Ecf"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Ecf;
