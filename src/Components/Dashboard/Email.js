import React, { useState } from "react";
import { Link } from "react-router-dom";
import Trush from "../../images/Trush.svg";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import SendEmail from "./DashboardCards/SendEmail";
import "./Email.scss";

export default function Email() {
  const [showSendEmail, setShowSendEmail] = useState(false);

  return (
    <div>
      <MetaData title={"Emails | NFPort"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Emails</h2>
          <button
            onClick={() => setShowSendEmail(true)}
            className="button page w-button"
          >
            Envoyer un email
          </button>
        </div>

        <div className="dashboard-page-contents">
          <div className="module">
            <div className="module-main">
              <div className="email-section">
                <h3 className="module-heading">Aujourd'hui</h3>
              </div>
              <div className="module-main">
                <div className="email-element">
                  <div className="notification-top">
                    <div className="notification-dot"></div>
                    <Link to="/email-details" className="notificaiton-title">
                      Demande de réservation
                    </Link>
                    <div className="email-time">14h45</div>
                    <div className="trash-icon">
                      <img width="18" src={Trush} alt="" />
                    </div>
                  </div>
                  <p className="notification-subtitle">Zodiac Medline III</p>
                  <p className="notification-description">
                    Demande de réservation du 16 avril au 1 juin
                  </p>
                </div>
              </div>

              <button className="module-button">
                Charger plus d&#x27;emails
              </button>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
      {showSendEmail && (
        <div className="sendEmail">
          <div className="mainContent">
            <SendEmail showModal={[showSendEmail, setShowSendEmail]} />
            <div
              onClick={() => setShowSendEmail(false)}
              className="hideModal"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
