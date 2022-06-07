import React from "react";

export default function Statistics() {
  return (
    <div className="modules">
      <h3 className="module-heading">Statistiques du profil</h3>

      <div className="module-main">
        <div className="_50-width">
          <div className="field-label">Compte créé le</div>
          <p id="stats_date">5th April 2018</p>
        </div>
        <div className="_50-width">
          <div className="field-label">Total de réservations</div>
          <p id="bookingstotal">213</p>
        </div>
        <div className="_50-width">
          <div className="field-label">Emails reçus</div>
          <p id="receivedmails">2,434</p>
        </div>
        <div className="_50-width">
          <div className="field-label">Total de contacts clients</div>
          <p id="totalcontact">412</p>
        </div>
        <div className="_50-width"></div>
      </div>
    </div>
  );
}
