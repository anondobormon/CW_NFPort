import React, { useState } from "react";
import CaretDown from "../../../images/CaretDown.svg";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import "./Reglages.scss";

export default function Reglages() {
  const [language, setLanguages] = useState(false);
  const [pays, setPays] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="reglages">
      <MetaData title={"Réglages | NFPort"} />

      <div className="main-content">
        <div className="container w-container">
          <h2 className="page-title">Réglages</h2>
        </div>

        <div onClick={() => setLanguages(false)} className="hideDrop"></div>

        <div className="_1-2-5-grid">
          <div className="reglages-module sticky">
            <div className="menu-list">
              <a href="#Edit-Profile">
                <div className="w--current item ">Paramètres du compte</div>
              </a>
              <a href="#Password">
                <div className="item">Mot de passe</div>
              </a>
              <a href="#Email-Notifications">
                <div className="item">Email Notifications</div>
              </a>
              <a href="#Desktop-Notifications">
                <div className="item">Notifications du bureau</div>
              </a>
              <a href="#Integration-Access">
                <div className="item">Accès à l&#x27;intégration</div>
              </a>
              <a href="#Close-Account">
                <div className="item">Fermer le compte</div>
              </a>
            </div>
          </div>

          <div className="module-group">
            <div id="Edit-Profile" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Paramètres du compte</h3>
              </div>
              <div className="module-main">
                <div className="settings-div">
                  <div className="settings-label">Langue</div>
                  <div className="account-dropdown w-dropdown">
                    <div
                      onClick={() => setLanguages(!language)}
                      className="settings-dropdown-toggle"
                    >
                      <div>Français</div>
                      <div className="filter-dropdown-icon w-icon-dropdown-toggle">
                        <img src={CaretDown} alt="" />
                      </div>
                    </div>
                    {language && (
                      <div
                        onClick={() => setLanguages(!language)}
                        className="filter-dropdown"
                      >
                        <a href="#" className="filter-option w-dropdown-link">
                          English
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          French
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          Spanish
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          German
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="settings-div">
                  <div className="settings-label">Pays</div>
                  <div className="account-dropdown w-dropdown">
                    <div
                      onClick={() => setPays(!pays)}
                      className="settings-dropdown-toggle w-dropdown-toggle"
                    >
                      <div>France</div>
                      <div className="filter-dropdown-icon w-icon-dropdown-toggle">
                        <img src={CaretDown} alt="" />
                      </div>
                    </div>
                    {pays && (
                      <div className="filter-dropdown pays">
                        <a href="#" className="filter-option w-dropdown-link">
                          America
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          North Korea
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          Russia
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          Australia
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          New Zealand
                        </a>
                        <a href="#" className="filter-option w-dropdown-link">
                          South Africa
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <form className="form">
                  <div className="divider"></div>
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Ne pas recevoir de recommandations basées sur votre
                      activité
                    </span>
                  </label>
                </form>
              </div>
            </div>

            <div id="Password" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Mot de passe</h3>
              </div>
              <div className="module-main">
                <div className="w-form">
                  <form className="form">
                    <div className="field-area">
                      <label>Ancien mot de passe</label>
                      <input
                        type="password"
                        className="input-filed"
                        maxLength="256"
                        name="name-2"
                        placeholder=""
                        id="field"
                      />
                    </div>
                    <div className="field-area">
                      <label>Nouveau mot de passe</label>

                      <input
                        type="password"
                        className="input-filed"
                        maxLength="256"
                        name="profile-email-2"
                        placeholder=""
                        id="field"
                      />
                    </div>
                    <input value="Confirmer" className="button settings" />
                  </form>
                  <div className="form-success w-form-done">
                    <div>
                      We&#x27;ve updated your account. Please refresh the page.
                    </div>
                  </div>
                  <div className="form-error w-form-fail">
                    <div>
                      Oops! Something went wrong. Please fill in the required
                      fields and try again.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="Desktop-Notifications" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Notifications du bureau</h3>
              </div>
              <div className="module-main">
                <form className="form">
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Ne pas recevoir de recommandations basées sur votre
                      activité
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Recevoir des courriels concernant un nouveau client
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Recevez des courriels lorsque quelque chose change dans
                      votre compte
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Recevoir des courriels lors des mises à jour de NFPort
                    </span>
                  </label>
                </form>
                <div className="form-success w-form-done">
                  <div>Thank you! Your message has been received!</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>
                    Oops! Something went wrong. Please fill in the required
                    fields and try again.
                  </div>
                </div>
                <div className="settings-div">
                  <div className="settings-label">
                    Fréquence de notification
                  </div>
                  <div
                    data-hover="false"
                    data-delay="0"
                    className="account-dropdown w-dropdown"
                  >
                    <div className="settings-dropdown-toggle">
                      <div>Journalier</div>
                      <div className="filter-dropdown-icon w-icon-dropdown-toggle">
                        <img src={CaretDown} alt="" />
                      </div>
                    </div>

                    {/* <div className="filter-dropdown">
                    <a href="#" className="filter-option w-dropdown-link">
                      Journalier
                    </a>
                    <a href="#" className="filter-option w-dropdown-link">
                      Hebdomadaire
                    </a>
                    <a href="#" className="filter-option w-dropdown-link">
                      Bi-Weekly
                    </a>
                    <a href="#" className="filter-option w-dropdown-link">
                      Monthly
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div id="Desktop-Notifications" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Accès à l&#x27;intégration</h3>
              </div>
              <div className="module-main">
                <div className="w-form">
                  <form className="form">
                    <label className="w-checkbox checkbox-element">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom toggle"></div>
                      <input
                        type="checkbox"
                        data-name="Checkbox 4"
                        name="checkbox-4"
                        id="checkbox"
                      />
                      <span className="w-form-label">
                        Permettre à des logiciels tiers de se connecter à NFBoat
                      </span>
                    </label>
                    <div className="field-area">
                      <label>Token Zapier</label>
                      <input
                        type="password"
                        className="input-filed"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        placeholder=""
                        id="field"
                      />
                    </div>
                  </form>

                  <div className="form-success w-form-done">
                    <div>Thank you! Your message has been received!</div>
                  </div>
                  <div className="form-error w-form-fail">
                    <div>
                      Oops! Something went wrong. Please fill in the required
                      fields and try again.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="Close-Account" className="reglages-module red">
              <div className="module-header minimal">
                <h3 className="module-heading red">Fermer le compte</h3>
              </div>
              <div className="module-main">
                <p>
                  Êtes-vous sûr de vouloir supprimer votre compte ?<br />
                  Cette action ne peut être annulée.
                </p>
                <form className="form">
                  <label className="checkbox-element">
                    <div className={`checkbox ${checked && "checked"}`}>
                      {checked && (
                        <img
                          src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Je veux que mon compte soit supprimé.
                    </span>
                  </label>

                  <input
                    type="submit"
                    value="Supprimer mon compte"
                    data-wait="Veuillez patienter ..."
                    className="button delete w-button"
                  />
                </form>
                <div className="form-success w-form-done">
                  <div>We&#x27;re sorry to see you go.</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>Oops! Something went wrong. Try again later.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
