import React from "react";
import "./PendingReservation.scss";

export default function PendingReservation() {
  return (
    <div className="module-main">
      <div className="w-layout-grid schedule-grid">
        <div className="schedue-time">
          <div>08h00</div>
        </div>
        <div className="schedule-div">
          <div className="columns">
            <div className="input booking _1 w-col w-col-6">
              <div>
                <div className="w-form">
                  <form
                    id="email-form-2"
                    name="email-form-2"
                    data-name="Email Form 2"
                    method="get"
                    className="form-2"
                  >
                    <label>Nom du client</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="client_name-2"
                      placeholder=""
                      id="client_name-2"
                    />
                    <label>Largeur du bateau</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_width-2"
                      placeholder=""
                      id="boat_width-2"
                      required=""
                    />
                    <label>Nom du bateau</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_name-2"
                      placeholder=""
                      id="boat_name-2"
                      required=""
                    />
                    <label>Durée</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_name-2"
                      placeholder=""
                      id="boat_name-2"
                      required=""
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Merci ! Votre demande a été reçue !</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oups ! Un problème est survenu lors de l&#x27;envoi du
                      formulaire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input booking _2 w-col w-col-6">
              <div className="w-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  data-name="Email Form 2"
                  method="get"
                  className="form-3"
                >
                  <label>Immatriculation</label>
                  <input
                    type="text"
                    className="boat_matriculation w-input"
                    maxLength="256"
                    name="boat_matriculation-2"
                    data-name="Boat Matriculation 2"
                    placeholder=""
                    id="boat_matriculation-2"
                  />
                  <label>Longueur du bateau</label>
                  <input
                    type="text"
                    className="boath_length w-input"
                    maxLength="256"
                    name="boat_length-2"
                    data-name="Boat Length 2"
                    placeholder=""
                    id="boat_length-2"
                  />
                  <label>Montant (€)</label>
                  <input
                    type="text"
                    className="price w-input"
                    maxLength="256"
                    name="payment_status-2"
                    data-name="Payment Status 2"
                    placeholder=""
                    id="payment_status-2"
                  />
                </form>
                <div className="w-form-done">
                  <div>Merci ! Votre demande a été reçue !</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oups ! Un problème est survenu lors de l&#x27;envoi du
                    formulaire.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block">
            <a
              href="https://webflow.com/templates/html/dawn-dashboard-website-template"
              target="_blank"
              className="button confirm w-button"
            >
              Annuler
            </a>
            <a
              href="https://webflow.com/templates/html/dawn-dashboard-website-template"
              target="_blank"
              className="button cancel w-button"
            >
              Confirmer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
