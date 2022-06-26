import { Link } from "react-router-dom";
import Check from "../../images/Check.svg";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Dashboard.scss";
import ConfirmReservation from "./DashboardCards/ConfirmReservation";
import PendingReservation from "./DashboardCards/PendingReservation";
import ReservationCard from "./DashboardCards/ReservationCard";
import ReservationHistory from "./DashboardCards/ReservationHistory";

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

const reservationData = [
  {
    name: "John Smith",
    registration: "4574165474",
    boatWidth: 45,
    boatLength: 100,
    boatName: "Sea Ship",
    amount: 500,
    duration: 5,
    time: "09h00",
  },
];

const notificationFakeData = [
  {
    title: "Demande de réservation",
    subTitle: "Zodiac Medline III",
    description: "Demande de réservation du 16 avril au 1 juin",
    time: "14h45",
  },
  {
    title: "Demande de réservation",
    subTitle: "Zodiac Medline III",
    description: "Demande de réservation du 16 avril au 1 juin",
    time: "14h45",
  },
];

export default function Dashboard() {
  return (
    <div>
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

            {reservationData.map((item, index) => (
              <PendingReservation key={index} item={item} />
            ))}
          </div>

          <div className="module">
            <div className="module-header">
              <h3 className="module-heading">Demandes de contacts</h3>
              <Link to="/" className="module-button">
                Tout voir
              </Link>
            </div>
            <div className="module-main">
              <div>
                {notificationFakeData &&
                  notificationFakeData.map((item, index) => (
                    <Link key={index} to="/" className="email-element simple">
                      <div className="notification-top">
                        <div className="notification-dot"></div>
                        <div className="notificaiton-title">{item.title}</div>
                        <div className="email-time">{item.time}</div>
                      </div>
                      <p className="notification-subtitle"> {item.subTitle}</p>
                      <p className="notification-description">
                        {item.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <ConfirmReservation reservationData={reservationData} />
        <ReservationHistory reservationData={reservationData} />

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
    </div>
  );
}
