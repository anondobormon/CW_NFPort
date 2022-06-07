import React from "react";
import { Link } from "react-router-dom";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Email.scss";

export default function Email() {
  return (
    <div>
      <MetaData title={"Emails | NFPort"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Emails</h2>
          <a href="#" className="button page w-button">
            Envoyer un email
          </a>
        </div>

        <div className="dashboard-page-contents">
          <div className="module">
            <div className="module-main">
              <div className="email-section">
                <h3 className="module-heading">Aujourd&#x27;hui</h3>
              </div>
              <div className="module-main">
                <div>
                  <Link to="/email-details" className="email-element">
                    <div className="notification-top">
                      <div className="notification-dot"></div>
                      <div className="notificaiton-title">
                        Demande de réservation
                      </div>
                      <div className="email-time">14h45</div>
                    </div>
                    <p className="notification-subtitle">Zodiac Medline III</p>
                    <p className="notification-description">
                      Demande de réservation du 16 avril au 1 juin
                    </p>
                  </Link>
                  <div className="email-element">
                    <div className="notification-top">
                      <div className="notification-dot"></div>
                      <div className="notificaiton-title">
                        Demande d&#x27;informations
                      </div>
                      <div className="email-time">12h40</div>
                    </div>
                    <p className="notification-subtitle">John Doe</p>
                    <p className="notification-description">
                      Bonjour, je vous contacte car je souhaite réserver un mois
                      entier.
                    </p>
                  </div>
                  <div className="email-element">
                    <div className="notification-top">
                      <div className="notification-dot"></div>
                      <div className="notificaiton-title">
                        Demande de réservation
                      </div>
                      <div className="email-time">11h08</div>
                    </div>
                    <p className="notification-subtitle">Benneteau ZRX-500</p>
                    <p className="notification-description">
                      Demande de réservation du 16 avril au 1 juin
                    </p>
                  </div>
                </div>
              </div>

              <button className="module-button w-button">
                Charger plus d&#x27;emails
              </button>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
