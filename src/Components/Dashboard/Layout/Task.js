import React, { useState } from "react";
import CalendarBlank from "../../../images/CalendarBlank.svg";
import EnvelopeOpen from "../../../images/EnvelopeOpen.svg";
import Note from "../../../images/Note.svg";
import "./Task.scss";

export default function Task() {
  const [task, setTask] = useState(false);

  return (
    <div className="task">
      <div className="new-button">
        <div
          onClick={function () {
            setTask(!task);
          }}
          className="new-button-toggle"
        >
          <div className={`plus ${task && "new-button-toggle-open"}`}>
            {" "}
            <strong>+</strong>{" "}
          </div>
        </div>
        {task && (
          <nav className="add-menu">
            <a href="reservations.html" className="add-link">
              <img
                src={Note}
                loading="lazy"
                width="27"
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Nouvelle tâche</div>
            </a>
            <a href="reservations.html" className="add-link w-inline-block">
              <img
                src={EnvelopeOpen}
                loading="lazy"
                width="27"
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Nouvel email</div>
            </a>
            <a href="reservations.html" className="add-link w-inline-block">
              <img
                src={CalendarBlank}
                loading="lazy"
                width="27"
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Nouvel event</div>
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}
