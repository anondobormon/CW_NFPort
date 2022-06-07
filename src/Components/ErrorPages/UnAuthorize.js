import React from "react";
import MetaData from "../Utils/MetaData";
import "./Error.scss";

export default function UnAuthorize() {
  return (
    <div className="error">
      <MetaData title={"NFBoat"} />

      <div className="utility-page-wrap">
        <div className="utility-page-content">
          <form className="utility-page-form">
            <h2>Page sécurisée</h2>
            <div className="field-area">
              <input
                type="password"
                className="input-filed"
                autofocus="true"
                maxLength="256"
                name="pass"
                data-name="field"
                placeholder="Enter your password"
                id="field"
              />
            </div>
            <input type="submit" value="Connexion" className="button" />
            <div className="w-password-page">
              <div>Mot de passe incorect. Réessayez</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
