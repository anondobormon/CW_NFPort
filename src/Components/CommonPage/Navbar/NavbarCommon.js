import React from "react";
import { Link } from "react-router-dom";
import Group from "../../../images/Group-1614-1.png";
// import White from "../../../images/White-Menu.svg";
import "./NavbarCommon.scss";

export default function NavbarCommon() {
  return (
    <div className="navbar-common">
      <div className="nav-bar w-nav">
        <div className="nav-container ">
          <div className="logo-div">
            <Link to="/" className="nav-logo w-inline-block">
              <img src={Group} className="image-5" />
            </Link>
          </div>

          <div className="cta1">
            <Link to="/plans" className="cta ">
              Voir les offres
            </Link>
          </div>
          <div className="cta2">
            <div className="nav-button">
              <div className="paragraph-small">
                Vous avez des questions sur les offres ?
              </div>
              <Link to="/contactez-nous" className="cta">
                Contacter nos équipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
