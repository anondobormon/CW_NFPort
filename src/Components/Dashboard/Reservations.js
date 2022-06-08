import React, { useState } from "react";
import { Link } from "react-router-dom";
import Archive from "../../images/Archive.svg";
import Check from "../../images/Check.svg";
import CheckSquare from "../../images/CheckSquare.svg";
import Pencil from "../../images/Pencil.svg";
import Trush from "../../images/Trush.svg";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import AddTask from "./DashboardCards/AddTask";
import ConfirmReservation from "./DashboardCards/ConfirmReservation";
import PendingReservation from "./DashboardCards/PendingReservation";
import ReservationHistory from "./DashboardCards/ReservationHistory";
import "./Reservations.scss";

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
                <a
                  onClick={function () {
                    setAllTask(true);
                    setUrgent(false);
                  }}
                  className={`tab ${allTask && "active"}`}
                >
                  <div>Toutes les tâches</div>
                </a>
                <a
                  onClick={function () {
                    setAllTask(false);
                    setUrgent(true);
                  }}
                  className={`tab ${urgent && "active"}`}
                >
                  <div>Urgent</div>
                </a>
              </div>

              <div className="module-main">
                {allTask && (
                  <div className="tab-pane">
                    <div className="w-form">
                      <form>
                        <div className="checkbox-element">
                          <label className="checkbox-top">
                            <div className="checkbox">
                              <input type="checkbox" name="checkbox-8" />
                              <span className="task-title">
                                Confirmer la réservation M. Dupont
                              </span>
                            </div>
                            <div className="tag task">Urgent</div>
                          </label>
                          <p className="task-description">
                            12 juin au 16 juin, 453.56€
                          </p>
                        </div>
                        <div className="checkbox-element">
                          <label className="checkbox-top">
                            <div className="checkbox">
                              <input type="checkbox" name="checkbox-8" />
                              <span className="task-title">
                                Confirmer la réservation M. Dupont
                              </span>
                            </div>
                            <div className="tag task">Urgent</div>
                          </label>
                          <p className="task-description">
                            12 juin au 16 juin, 453.56€
                          </p>
                        </div>
                        <div className="checkbox-element">
                          <label className="checkbox-top">
                            <div className="checkbox">
                              <input type="checkbox" name="checkbox-8" />
                              <span className="task-title">
                                Confirmer la réservation M. Dupont
                              </span>
                            </div>
                            <div className="tag task">Urgent</div>
                          </label>
                          <p className="task-description">
                            12 juin au 16 juin, 453.56€
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {urgent && (
                  <div className="tab-pane">
                    <div className="w-form">
                      <form>
                        <div className="checkbox-element">
                          <label className="checkbox-top">
                            <div className="checkbox">
                              <input type="checkbox" name="checkbox-8" />
                              <span className="task-title">
                                Confirmer la réservation M. Dupont
                              </span>
                            </div>
                            <div className="tag task">Urgent</div>
                          </label>
                          <p className="task-description">
                            12 juin au 16 juin, 453.56€
                          </p>
                        </div>

                        <div className="checkbox-element">
                          <label className="checkbox-top">
                            <div className="checkbox">
                              <input type="checkbox" name="checkbox-8" />
                              <span className="task-title">
                                Confirmer la réservation M. Dupont
                              </span>
                            </div>
                            <div className="tag task">Urgent</div>
                          </label>
                          <p className="task-description">
                            12 juin au 16 juin, 453.56€
                          </p>
                        </div>
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
