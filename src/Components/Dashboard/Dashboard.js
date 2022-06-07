import React from "react";
import Check from "../../images/Check.svg";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Dashboard.scss";
import ConfirmReservation from "./DashboardCards/ConfirmReservation";
import PendingReservation from "./DashboardCards/PendingReservation";
import ReservationCard from "./DashboardCards/ReservationCard";

const resFakeData = [
  {
    title: "Demandes de réservations",
    count: 4,
    border: "blue-border",
  },
  {
    title: "Réservations en cours    ",
    count: 12,
    border: "",
  },
  {
    title: "Historique de réservations    ",
    count: 23,
    border: "",
  },
  {
    title: "Demandes de contacts    ",
    count: 8,
    border: "",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-main-content">
      <MetaData title={"Gestion de réservations | NFPort"} />
      <div className="dashboard-page-header">
        <h2>Accueil</h2>
        <a href="modifier-accueil.html" className="button page w-button">
          Modifier le Dashboard
        </a>
      </div>

      <div className="_4-grid">
        {resFakeData.map((item, index) => (
          <ReservationCard item={item} key={index} />
        ))}
      </div>

      <div className="_2-1-grid">
        <div className="module">
          <div className="module-header">
            <h3 className="module-heading">Réservations en attente</h3>
          </div>
          <PendingReservation />
          <PendingReservation />
          <PendingReservation />
        </div>

        <div className="module">
          <div className="module-header">
            <h3 className="module-heading">Demandes de contacts</h3>
            <a href="emails.html" className="module-button">
              Tout voir
            </a>
          </div>
          <div className="module-main">
            <div>
              <a
                href="email-detail.html"
                className="email-element simple w-inline-block"
              >
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
              </a>
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
        </div>
      </div>

      <ConfirmReservation />
      <ConfirmReservation />

      <div className="module">
        <div className="module-header">
          <h3 className="module-heading">Réservations en cours</h3>
        </div>
        <div className="module-main">
          <div className="empty-module-insert">
            <img
              src={Check}
              loading="lazy"
              width="27"
              alt=""
              className="empty-icon"
            />
            <div>Pas de réservation en cours</div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
