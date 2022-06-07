import React from "react";

export default function CentreCard() {
  return (
    <div className="module">
      <div className="module-header minimal">
        <h3 className="module-heading">Compte</h3>
      </div>
      <div className="module-main">
        <ul role="list" className="link-list">
          <li>
            <a href="../pages/aide.html" className="link">
              Modifier les détails du compte
            </a>
          </li>
          <li>
            <a href="../pages/aide.html" className="link">
              Mise à jour du mot de passe
            </a>
          </li>
          <li>
            <a href="../pages/aide.html" className="link">
              Modifier les notifications par e-mail
            </a>
          </li>
          <li>
            <a href="../pages/aide.html" className="link">
              Supprimer votre compte
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
