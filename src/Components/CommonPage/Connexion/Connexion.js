import React from "react";
import Group from "../../../images/Group-1614-1.png";
import MetaData from "../../Utils/MetaData";
import "./Connexion.scss";

export default function Connexion() {
  return (
    <div className="connecxion">
      <MetaData title={"Connexion | NFPort"} />

      <div className="center-card-container">
        <div className="center-card">
          <a href="../index.html" className="center-image w-inline-block">
            <img src={Group} loading="lazy" alt="" />
          </a>
          <h2>Connexion</h2>
          <p>Entrez vos identifiants pour accéder a la plateforme</p>
          <div className="spacer_16"></div>
          <div className="w-form">
            <form className="sign-up-form">
              <label className="field-label">Email</label>

              <input
                type="email"
                className="simple-input no-margin w-input"
                maxLength="256"
                name="Subscriber-Email"
                data-name="Subscriber Email"
                placeholder="name@company.com"
                id="Subscriber-Email"
                required=""
              />
              <label className="field-label">Mot de passe</label>
              <input
                type="password"
                className="simple-input no-margin w-input"
                maxLength="256"
                name="Subscriber-Password"
                data-name="Subscriber Password"
                placeholder="***********"
                id="Subscriber-Password"
                required=""
              />
              <div className="spacer_24"></div>
              <input
                type="submit"
                value="Se connecter"
                data-wait="Veuillez patienter"
                className="button no-margin w-button"
              />
            </form>
            <div className="form-success w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="form-error w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <p className="paragraph-small">
            Vous avez oublié votre mot de passe ?{" "}
            <a href="../pages/reinitialisation.html" className="simple-link">
              Réinitialisez-le ici.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
