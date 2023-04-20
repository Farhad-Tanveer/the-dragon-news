import React from "react";
import qzone1 from "../../../../../assets/qZone1.png";
import qzone2 from "../../../../../assets/qZone2.png";
import qzone3 from "../../../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light mt-3">
      <h4 className="ps-3 pt-3">Q-Zone</h4>
      <div className="d-flex flex-column justify-content-center p-3">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
