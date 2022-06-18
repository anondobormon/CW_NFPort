import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import CaretDown from "../../../images/CaretDown.svg";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import "./Reglages.scss";

const fakeData = [
  {
    title: "Journalier",
    link: "/",
  },
  {
    title: "Hebdomadaire",
    link: "/",
  },
  {
    title: " Bi-Weekly",
    link: "/",
  },
  {
    title: "Monthly",
    link: "/",
  },
];

export default function Reglages() {
  const [language, setLanguages] = useState(false);
  const [pays, setPays] = useState(false);
  const [journalier, setJournalier] = useState(false);
  const [hebdomadaire, setHebdomadaire] = useState(false);
  const [notification, setNotification] = useState(false);
  const [current, setCurrent] = useState("profile");

  const handleNotification = (e) => {
    setNotification(e.target.checked);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      ReactDOM.findDOMNode(e.target).parentNode.children[0].className =
        "checkbox checked";
    } else {
      ReactDOM.findDOMNode(e.target).parentNode.children[0].className =
        "checkbox ";
    }
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
              <a onClick={() => setCurrent("profile")} href="#Edit-Profile">
                <div
                  className={` item ${current === "profile" && "w--current"}`}
                >
                  Paramètres du compte
                </div>
              </a>
              <a onClick={() => setCurrent("password")} href="#Password">
                <div
                  className={` item ${current === "password" && "w--current"}`}
                >
                  Mot de passe
                </div>
              </a>
              <a
                onClick={() => setCurrent("notifications")}
                href="#Email-Notifications"
              >
                <div
                  className={` item ${
                    current === "notifications" && "w--current"
                  }`}
                >
                  Email Notifications
                </div>
              </a>
              <a
                onClick={() => setCurrent("bureau")}
                href="#Desktop-Notifications"
              >
                <div
                  className={` item ${current === "bureau" && "w--current"}`}
                >
                  Notifications du bureau
                </div>
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
                      <ul
                        onClick={() => setLanguages(!language)}
                        className="filter-dropdown"
                      >
                        <li className="filter-option ">English</li>
                        <li className="filter-option ">French</li>
                        <li className="filter-option ">Spanish</li>
                        <li className="filter-option ">German</li>
                      </ul>
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
                      <ul className="filter-dropdown pays">
                        <li className="filter-option ">America</li>
                        <li className="filter-option ">North Korea</li>
                        <li className="filter-option ">Russia</li>
                        <li className="filter-option ">Australia</li>
                        <li className="filter-option ">New Zealand</li>
                        <li className="filter-option ">South Africa</li>
                      </ul>
                    )}
                  </div>
                </div>
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
                    <div className="field-area">
                      <label>Confirmez le mot de passe</label>

                      <input
                        type="password"
                        className="input-filed"
                        maxLength="256"
                        name="profile-email-2"
                        placeholder=""
                        id="field"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Confirmer"
                      className="button settings"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div id="Email-Notifications" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Email Notifications</h3>
              </div>
              <div className="module-main">
                <form className="form">
                  <label className="checkbox-element">
                    <div className={`checkbox`}>
                      <img
                        src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                        alt=""
                      />
                    </div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckbox(e)}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Ne pas recevoir de recommandations basées sur votre
                      activité
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox`}>
                      <img
                        src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                        alt=""
                      />
                    </div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckbox(e)}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Recevoir des courriels concernant un nouveau client
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox`}>
                      <img
                        src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                        alt=""
                      />
                    </div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckbox(e)}
                      id="checkbox"
                    />
                    <span className="w-form-label">
                      Recevez des courriels lorsque quelque chose change dans
                      votre compte
                    </span>
                  </label>
                  <label className="checkbox-element">
                    <div className={`checkbox`}>
                      <img
                        src="https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg"
                        alt=""
                      />
                    </div>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckbox(e)}
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
                    <div
                      onClick={() => setHebdomadaire(!hebdomadaire)}
                      className="settings-dropdown-toggle"
                    >
                      <div>Hebdomadaire</div>
                      <div className="filter-dropdown-icon w-icon-dropdown-toggle">
                        <img src={CaretDown} alt="" />
                      </div>
                    </div>
                    {hebdomadaire && (
                      <div className="filter-dropdown">
                        {fakeData.map((item, index) => (
                          <Link
                            to={item.link}
                            key={index}
                            className="filter-option "
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div id="Desktop-Notifications" className="reglages-module">
              <div className="module-header minimal">
                <h3 className="module-heading">Notifications du bureau</h3>
              </div>
              <div className="module-main">
                <div className="w-form">
                  <form className="form">
                    <label className="w-checkbox checkbox-element">
                      <div
                        className={`${
                          notification
                            ? "checkbox-checked-toggle"
                            : "checkbox-toggle"
                        } `}
                      ></div>
                      <input
                        type="checkbox"
                        name="checkbox-4"
                        onChange={handleNotification}
                        id="checkbox"
                      />
                      <span className="w-form-label">
                        Activer les notifications du bureau
                      </span>
                    </label>
                    <div className="settings-div">
                      <div className="settings-label">
                        Fréquence de notification
                      </div>
                      <div
                        data-hover="false"
                        data-delay="0"
                        className="account-dropdown w-dropdown"
                      >
                        <div
                          onClick={() => setJournalier(!journalier)}
                          className="settings-dropdown-toggle"
                        >
                          <div>Journalier</div>
                          <div className="filter-dropdown-icon w-icon-dropdown-toggle">
                            <img src={CaretDown} alt="" />
                          </div>
                        </div>
                        {journalier && (
                          <div className="filter-dropdown">
                            {fakeData.map((item, index) => (
                              <Link
                                to={item.link}
                                key={index}
                                className="filter-option "
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
