import React from "react";
import { Link } from "react-router-dom";

export default function CentreCard() {
  return (
    <div className="module">
      <div className="module-header minimal">
        <h3 className="module-heading">Compte</h3>
      </div>
      <div className="module-main">
        <ul role="list" className="link-list">
          <li>
            <Link to="/compte/aide" className="link">
              Modifier les détails du compte
            </Link>
          </li>
          <li>
            <Link to="/compte/aide" className="link">
              Mise à jour du mot de passe
            </Link>
          </li>
          <li>
            <Link to="/compte/aide" className="link">
              Modifier les notifications par e-mail
            </Link>
          </li>
          <li>
            <Link to="/compte/aide" className="link">
              Supprimer votre compte
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
