import React from "react";

export default function Networks() {
  return (
    <div className="modules">
      <h3 className="module-heading">Réseaux sociaux</h3>
      <div className="module-main">
        <div className="w-form">
          <form className="form">
            <div className="field-area">
              <label>Twitter</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="twitter"
                placeholder="@foxtrot44"
                required=""
              />
            </div>
            <div className="field-area">
              <label>Facebook</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="Facebook"
                placeholder=""
                required=""
              />
            </div>
            <div className="field-area">
              <label>Instagram</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="Facebook-4"
                placeholder="foxtrot-official"
                required=""
              />
            </div>
            <div className="field-area">
              <label>Google</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="Facebook-3"
                placeholder=""
                required=""
              />
            </div>
            <input
              type="submit"
              value="Mettre à jour"
              className="button settings"
            />
          </form>
          <div className="form-success w-form-done">
            <div>
              Nous avons mis à jour votre compte. Veuillez rafraîchir la page.
            </div>
          </div>
          <div className="form-error w-form-fail">
            <div>
              Oops! Something went wrong. Please fill in the required fields and
              try again.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
