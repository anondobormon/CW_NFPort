import React from "react";
import Group from "../../../images/Group-1614-1.png";
import MetaData from "../../Utils/MetaData";
import "./Inscription.scss";

export default function Inscription() {
  return (
    <div className="inscription">
      <MetaData title={"Inscription | NFPort"} />

      <div className="center-card-container">
        <div className="center-card">
          <a href="../index.html" className="center-image w-inline-block">
            <img src={Group} loading="lazy" alt="" />
          </a>
          <div className="spacer_16"></div>
          <h2>Créez un compte</h2>
          <p>Inscrivez-vous en quelques étapes rapides.</p>
          <div className="spacer _16"></div>
          <div className="w-form">
            <div className="w-form">
              <form className="sign-up-form">
                <label className="field-label">Email</label>

                <input
                  type="email"
                  className="simple-input"
                  maxLength="256"
                  placeholder="Port et ville"
                  required=""
                />
                <label className="field-label">Mot de passe</label>
                <input
                  type="email"
                  className="simple-input"
                  maxLength="256"
                  placeholder="Entrez un email"
                  required=""
                />
                <div className="spacer_24"></div>
                <input type="submit" value="Se connecter" className="button" />
              </form>
              <div className="form-success w-form-done">
                <div>Check your email for next steps</div>
              </div>
              <div className="form-error w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <p className="paragraph-small light">
            By clicking the button above, you agree to our{" "}
            <a
              href="../pages/termes-conditions.html"
              target="_blank"
              className="simple-link light"
            >
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a
              href="../pages/politique-confidentialite.html"
              target="_blank"
              className="simple-link light"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
