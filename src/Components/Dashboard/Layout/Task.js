import React, { useState } from "react";
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
          <div className="add-menu">
            <p className="add-link">
              <img
                src={Note}
                loading="lazy"
                width="27"
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Nouvelle tâche</div>
            </p>
            <p className="add-link w-inline-block">
              <img
                src={EnvelopeOpen}
                loading="lazy"
                width="27"
                alt=""
                className="sidebar-icon"
              />
              <div className="sidebar-link-text">Nouvel email</div>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
