import React from "react";
import "./SendEmail.scss";

export default function SendEmail({ showModal }) {
  const [showSendEmail, setShowSendEmail] = showModal;

  return (
    <div className="sendEmailPopup">
      <div className="module">
        <div className="module-header minimal">
          <h3 className="module-heading">Envoyer un e-mail</h3>
        </div>

        <div className="module-main">
          <form className="form">
            <div className="_2-fields">
              <div className="field-area">
                <label>Email de</label>
                <input
                  type="email"
                  className="input-filed"
                  name="name-2"
                  placeholder="Enter your email..."
                  id="field"
                />
              </div>
              <div className="field-area">
                <label>Matière</label>
                <input
                  type="text"
                  className="input-filed"
                  maxLength="256"
                  name="name-2"
                  placeholder="Write your subject!"
                  id="field"
                />
              </div>
            </div>
            <div className="field-area">
              <label>Écrivez vos commentaires ici</label>
              <textarea
                placeholder="Entrez votre message"
                maxLength="5000"
                name="field"
                id="field"
                className="text-area-input"
              ></textarea>
            </div>
            <div className="button-area">
              <div
                onClick={() => setShowSendEmail(false)}
                className="button cancel"
              >
                Cancel
              </div>
              <div className="button ">Send Email</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
