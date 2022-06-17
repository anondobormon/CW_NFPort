import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import Slider from "./Layout/MessageSlider/Slider";
import "./Messagerie.scss";

export default function Messagerie() {
  return (
    <div className="messagerie">
      <MetaData title={"Messagerie | NFPort"} />
      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2 className="heading-2">Mes messages</h2>
          <a href="#" className="button page w-button">
            Envoyer un message
          </a>
        </div>

        <form className="search w-form">
          <input
            type="submit"
            value="Search"
            className="search-button w-button"
          />
          <input
            type="search"
            className="search-input w-input"
            maxlength="256"
            name="query"
            placeholder="Rechercher"
            id="search"
            required=""
          />
        </form>

        <Slider />

        <div className="dashboard-page-contents">
          <div className="module">
            <div className="module-main">
              <div className="email-section">
                <h3 className="module-heading">Aujourd'hui</h3>
                <div className="module-main">
                  <div>
                    <a
                      href="email-detail.html"
                      className="email-element simple w-inline-block"
                    >
                      <div className="notification-top special">
                        <div className="notification-dot"></div>
                        <div className="notificaiton-title">
                          Marc - Demande de réservation
                        </div>
                        <div className="email-time">14h45</div>
                      </div>
                      <p className="notification-subtitle special">
                        Zodiac Medline III
                      </p>
                      <p className="notification-description">
                        Demande de réservation du 16 avril au 1 juin
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="email-section">
                <h3 className="module-heading">Hier</h3>
                <div className="module-main">
                  <div>
                    <a
                      href="email-detail.html"
                      className="email-element simple w-inline-block"
                    >
                      <div className="notification-top spc">
                        <div className="notification-dot"></div>
                        <div className="notificaiton-title">
                          Jean pierre - Demande de réservation
                        </div>
                        <div className="email-time">14h45</div>
                      </div>
                      <p className="notification-subtitle spcial">
                        Zodiac Medline III
                      </p>
                      <p className="notification-description">
                        Demande de réservation du 16 avril au 1 juin
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <button className="module-button">
                Charger plus de messages
              </button>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
