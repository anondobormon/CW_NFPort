import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../../../images/Fake-Logo-1.svg";
import Logo2 from "../../../images/Fake-Logo-2.svg";
import Logo3 from "../../../images/Fake-Logo-3.svg";
import Logo4 from "../../../images/Fake-Logo-4.svg";
import Logo5 from "../../../images/Fake-Logo-5.svg";
import MetaData from "../../Utils/MetaData";
import NavbarCommon from "../Navbar/NavbarCommon";
import "./Plan.scss";

let trusts = [
  {
    logo: Logo1,
  },
  {
    logo: Logo2,
  },
  {
    logo: Logo3,
  },
  {
    logo: Logo4,
  },
  {
    logo: Logo5,
  },
];

export default function Plan() {
  return (
    <div className="plan">
      <MetaData title={"Offres | NFPort"} />

      <NavbarCommon />

      <div className="section">
        <div className="container">
          <h2>Offres et services sur mesure</h2>
          <div className="spacer_48"></div>
          <div className="pricing-columns">
            <div className="price-card mob-hidden">
              <div className="pricing-header">
                <h2>Accès gratuit</h2>
                <p>
                  La solution simple avec toutes les fonctionnalités de base
                  pour vous aider à démarrer avec NFPort.
                </p>
              </div>
              <h3>
                0€/ an<span></span>
              </h3>
              <p className="paragraph-small-2">
                Toutes les fonctionnalités de base, entièrement gratuites
              </p>
              <div className="spacer_24"></div>
              <Link
                disabled={true}
                to="/"
                href="#"
                className="button disabled w-button"
              >
                Plan actuel
              </Link>
              <div className="spacer_24"></div>
              <div className="tick-list w-richtext">
                <ul role="list">
                  <li>Tableau de bord personnalisé</li>
                  <li>Gestionnaire de réservations</li>
                  <li>Ajout de tâches</li>
                  <li>Calendrier</li>
                </ul>
              </div>
            </div>
            <div className="price-card blue">
              <div className="pricing-header">
                <h2>Accès premium</h2>
                <p>
                  Pour les ports qui souhaitent organiser davantage leurs
                  gestion et synchroniser leurs contacts et leur chat.
                </p>
              </div>
              <h3 className="price-text">
                200€ / an<span className="regular"></span>
              </h3>
              <p className="paragraph-small-2">
                facturé annuellement, ou 12 €/mois
              </p>
              <div className="spacer_24"></div>
              <Link to="/" className="button w-button">
                Commencer un essai gratuit de 30 jours
              </Link>
              <div className="spacer_24"></div>
              <div className="tick-list w-richtext">
                <ul role="list">
                  <li>Tableau de bord personnalisé</li>
                  <li>Gestionnaire de réservations</li>
                  <li>Ajout de tâches</li>
                  <li>Gestion des contacts emails</li>
                  <li>Calendrier</li>
                  <li className="tooltip-list-item">
                    <p className="dotted-link">Gestionnaire de compte</p>
                  </li>
                  <li className="tooltip-list-item">
                    <p className="dotted-link">Chat en direct</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section white wf-section">
        <div className="container">
          <h3>Plus de 50 ports nous font confiance</h3>
          <div className="logos-div">
            {trusts.map((item, index) => (
              <div key={index} className="logo-container">
                <img src={item.logo} alt="" className="partner-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section light-blue wf-section">
        <div className="container center-align">
          <h2>Des questions sur l&#x27;offre premium ?</h2>
          <div className="text-box">
            <p>
              Laissez-nous vous aider à parcourir les offres et à trouver la
              solution adaptée à vos besoins.
            </p>
            <div className="spacer_16"></div>
            <Link to="/contactez-nous" className="button">
              Contactez nos équipes
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <p className="paragraph-small">
          © NFBoat - Tous droits réservés
          <a href="#" className="simple-link light"></a>
        </p>
      </div>
    </div>
  );
}
