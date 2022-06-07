import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bell from "../../../images/Bell.svg";
import CaretDown from "../../../images/CaretDown.svg";
import Ellipse from "../../../images/Ellipse-196.png";
import Group from "../../../images/Group-1614-1.png";
import "./Nav.scss";

export default function Nav() {
  const [notification, setNotification] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="dashboard-nav">
        <Link to="/" className="dashboard-logo">
          <img src={Group} alt="" />
        </Link>

        <div className="nav-spacer"></div>
        <Link to="/" className="cta">
          Retour à l&#x27;accueil
        </Link>

        <div
          data-hover="false"
          data-delay="0"
          className="nav-dropdown w-dropdown"
        >
          <div className="nav-dropdown-toggle w-dropdown-toggle">
            <div
              onClick={function () {
                setNotification(!notification);
                setProfileMenu(false);
              }}
              className="nav-icon-item"
            >
              <img
                src={Bell}
                loading="lazy"
                width="23"
                alt=""
                className="nav-icon"
              />
              <div className="bell-dot"></div>
            </div>
            {notification && (
              <div>
                <div
                  onClick={(e) => setNotification(false)}
                  className="close-modal"
                ></div>
                <div className="notification">
                  <div className="notificaiton-element">
                    <div className="notification-top">
                      <div className="notification-dot"></div>
                      <div className="notificaiton-title">3 notifications</div>
                    </div>
                    <p className="notification-description">
                      Vous avez 2 demandes de réservation, et 1 email en attente
                      de réponse
                    </p>
                  </div>
                  <div className="notificaiton-element seen">
                    <div className="notification-top">
                      <div className="notification-dot seen"></div>
                      <div className="notificaiton-title">
                        2 demandes a traiter
                      </div>
                    </div>
                    <p className="notification-description">
                      Il y a de nouvelles commandes à confirmer.
                    </p>
                  </div>
                  <div className="notificaiton-element seen">
                    <div className="notification-top">
                      <div className="notification-dot seen"></div>
                      <div className="notificaiton-title">
                        1 email en attente de réponse
                      </div>
                    </div>
                    <p className="notification-description">
                      Il y a de nouveaux billets à vérifier.
                    </p>
                  </div>
                  <a href="#" className="module-button w-button">
                    Voir toutes les notifications
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="profile-top">
          <div
            onClick={function () {
              setProfileMenu(!profileMenu);
              setNotification(false);
            }}
            className="profile-menu "
          >
            <div className="profile-image">
              <img src={Ellipse} loading="lazy" alt="" />
            </div>
            <img
              src={CaretDown}
              loading="lazy"
              width="15"
              alt=""
              className={`menu-down ${profileMenu && "active-menu"}`}
            />
          </div>

          {profileMenu && (
            <div>
              <div
                onClick={(e) => setProfileMenu(false)}
                className="close-modal"
              ></div>
              <nav className="profile-menu-list">
                <Link to="/compte">Compte</Link>
                <Link to="/compte/reglages">Réglages</Link>

                <div className="menu-divider"></div>

                <Link to="/compte/centre-aide">Contacter le support</Link>
                <Link to="/contactez-nous">Signaler un problème</Link>
                <Link to="/compte/terms">Termes et conditions</Link>
                <Link to="/compte/politique">Politique de confidentialité</Link>

                <div className="menu-divider"></div>

                <Link to="/connexion">Déconnexion</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
