import React, { useState } from "react";
import "./AddTask.scss";

export default function AddTask() {
  const [notification, setNotification] = useState(false);

  const handleNotification = (e) => {
    setNotification(e.target.checked);
  };
  return (
    <div className="task">
      <div className="module">
        <div className="module-header minimal">
          <h3 className="module-heading">Ajouter une tâche</h3>
        </div>
        <div className="module-main">
          <form className="form">
            <div className="field-area">
              <label>Task Title</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="name-2"
                placeholder=""
                id="field"
              />
            </div>
            <div className="field-area">
              <label>Task Subtest</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="name-2"
                placeholder=""
                id="field"
              />
            </div>
            <label className="w-checkbox checkbox-element">
              <div
                className={`${
                  notification ? "checkbox-checked-toggle" : "checkbox-toggle"
                } `}
              ></div>
              <input
                type="checkbox"
                name="checkbox-4"
                onChange={handleNotification}
                id="checkbox"
              />
              <span className="form-label">Urgent</span>
            </label>

            <input value="Confirmer" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
}
