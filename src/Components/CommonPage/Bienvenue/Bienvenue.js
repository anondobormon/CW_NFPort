import React from "react";
import Group from "../../../images/Group-1614-1.png";
import "./Bienvenue.scss";

export default function Bienvenue() {
  return (
    <div className="bienvenue">
      <div className="center-card-container">
        <div className="center-card">
          <img src={Group} loading="lazy" alt="" className="image-6" />
          <div className="spacer_16"></div>
          <h2>Bienvenue</h2>
          <p>
            NFPort est une plateforme de gestion de réservations de places de
            ports en ligne.
            <br />
            <br />
            Chaque demande de réservation effectuée depuis NFBoat.com est
            envoyée en temps réèl sur ce tableau de bord.
          </p>
          <div className="spacer_16"></div>
          <button className="button">Commencer</button>
          <div className="spacer_16"></div>
        </div>
      </div>
    </div>
  );
}
