import React from "react";
import Ellipse from "../../../images/Ellipse-196.png";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import "./Compte.scss";
import Informations from "./Compte/Informations";
import Networks from "./Compte/Networks";
import Statistics from "./Compte/Statistics";

export default function Compte() {
  return (
    <div className="compte">
      <MetaData title={"Compte | NFPort"} />

      <div className="main-content">
        <div className="container w-container">
          <h1 className="page-title">Votre compte</h1>
        </div>
        <div className="_1-2-5-grid">
          <div className="module sticky">
            <div className="profile-image large">
              <img src={Ellipse} alt="" className="image-2" />
            </div>
            <h3 className="profile-name">Vieux-Port</h3>
            <p className="no-margin">Marseille</p>
            <div className="profile-buttons-div"></div>
          </div>
          <div className="module-group">
            <Informations />
            <Networks />
            <Statistics />
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
