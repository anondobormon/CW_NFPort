import { useState } from "react";
import { Link } from "react-router-dom";
import Archive from "../../images/Archive.svg";
import Check from "../../images/Check.svg";
import CheckSquare from "../../images/CheckSquare.svg";
import Pencil from "../../images/Pencil.svg";
import Trush from "../../images/Trush.svg";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import TaskController from "../Utils/TaskController";
import AddTask from "./DashboardCards/AddTask";
import ConfirmReservation from "./DashboardCards/ConfirmReservation";
import PendingReservation from "./DashboardCards/PendingReservation";
import ReservationHistory from "./DashboardCards/ReservationHistory";
import "./Reservations.scss";

const fakeTask = [
  {
    task: "Confirmer la réservation M. Dupont1",
    tag: "Urgent",
    description: " 12 juin au 16 juin, 453.56€",
  },
  {
    task: "Confirmer la réservation M. Dupont2",
    tag: "",
    description: " 12 juin au 16 juin, 453.56€",
  },
  {
    task: "Confirmer la réservation M. Dupont3",
    tag: "",
    description: " 12 juin au 16 juin, 453.56€",
  },
  {
    task: "Confirmer la réservation M. Dupont4",
    tag: "Urgent",
    description: " 12 juin au 16 juin, 453.56€",
  },
  {
    task: "Confirmer la réservation M. Dupont5",
    tag: "",
    description: " 12 juin au 16 juin, 453.56€",
  },
  {
    task: "Confirmer la réservation M. Dupont6",
    tag: "Urgent",
    description: " 12 juin au 16 juin, 453.56€",
  },
];

export default function Reservations() {
  const [urgent, setUrgent] = useState(false);
  const [allTask, setAllTask] = useState(true);
  const [trash, setTrash] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleClick = () => {
    setShowAddTask(false);
  };

  return (
    <div className="dashboard-main-content">
      <MetaData title={"Réservations | NFPort"} />

      <div className="dashboard-page-header">
        <h2>Réservations</h2>
      </div>
      <div className="container">
        <div className="_2-5-1-grid">
          <div className="module">
            <div className="tabs">
              <div className="module-tabs">
                <button
                  onClick={function () {
                    setAllTask(true);
                    setUrgent(false);
                  }}
                  className={`tab ${allTask && "active"}`}
                >
                  <div>Toutes les tâches</div>
                </button>
                <button
                  onClick={function () {
                    setAllTask(false);
                    setUrgent(true);
                  }}
                  className={`tab ${urgent && "active"}`}
                >
                  <div>Urgent</div>
                </button>
              </div>

              <div className="module-main">
                {allTask && (
                  <div className="tab-pane">
                    <div className="w-form">
                      <form>
                        {fakeTask.map((item, index) => (
                          <div key={index} className="checkbox-element">
                            <label className="checkbox-top">
                              <div className="checkbox">
                                <input
                                  type="checkbox"
                                  onClick={(e) => TaskController(e)}
                                  name="checkbox-8"
                                />
                                <span className="task-title">{item.task}</span>
                              </div>
                              {item.tag === "Urgent" && (
                                <div className="tag task">Urgent</div>
                              )}
                            </label>
                            <p className="task-description">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </form>
                    </div>
                  </div>
                )}

                {urgent && (
                  <div className="tab-pane">
                    <div className="w-form">
                      <form>
                        <form>
                          {fakeTask.map(
                            (item, index) =>
                              item.tag === "Urgent" && (
                                <div key={index} className="checkbox-element">
                                  <label className="checkbox-top">
                                    <div className="checkbox">
                                      <input
                                        type="checkbox"
                                        onClick={(e) => TaskController(e)}
                                        name="checkbox-8"
                                      />
                                      <span className="task-title">
                                        {item.task}
                                      </span>
                                    </div>
                                    {item.tag === "Urgent" && (
                                      <div className="tag task">Urgent</div>
                                    )}
                                  </label>
                                  <p className="task-description">
                                    {item.description}
                                  </p>
                                </div>
                              )
                          )}
                        </form>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="action-group">
            <div onClick={() => setShowAddTask(true)} className="action-card">
              <img
                src={Pencil}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Ajouter une tâche</h3>
            </div>

            <div onClick={() => setTrash(!trash)} className="action-card">
              <img
                src={CheckSquare}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Tout séléctionner</h3>
            </div>
            {trash && (
              <button className="action-card delete-button">
                <img
                  src={Trush}
                  loading="lazy"
                  width="18"
                  alt=""
                  className="action-icon "
                />
                <h3 className="module-heading">Supprimed</h3>
              </button>
            )}

            <Link to="/emails" className="action-card">
              <img
                src={Archive}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Emails</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="module">
        <div className="module-header">
          <h3 className="module-heading">Réservations en attente</h3>
        </div>
        <PendingReservation />
      </div>

      <ConfirmReservation />
      <ReservationHistory />

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

      {showAddTask && (
        <div className="addTaskPopup">
          <div className="mainContent">
            <AddTask />
            <div onClick={handleClick} className="hideModal"></div>
          </div>
        </div>
      )}
    </div>
  );
}
