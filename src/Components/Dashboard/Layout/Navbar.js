import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bell from "../../../images/Bell.svg";
import CaretDown from "../../../images/CaretDown.svg";
import Ellipse from "../../../images/Ellipse-196.png";
import Menu from "../../../images/Menu.svg";
import "./Navbar.scss";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [notification, setNotification] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="dashboard-nav">
        <div
          onClick={function () {
            setShow(!show);
            console.log(show);
          }}
          className="menu"
        >
          <img src={Menu} alt="" />
        </div>
        <form className="search">
          <input type="submit" className="search-button " />
          <input
            type="search"
            className="search-input"
            maxLength="256"
            name="query"
            placeholder="Rechercher"
            id="search"
            required=""
          />
        </form>

        <div className="nav-spacer"></div>
        <a
          href="http://www.nfboat.com"
          target="_blank"
          className="button upgrade"
        >
          NFBoat.com
        </a>

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
                  <Link to="/" className="module-button">
                    Voir toutes les notifications
                  </Link>
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
                <Link to="/compte" href="compte.html">
                  Compte
                </Link>
                <Link to="/compte/reglages">Réglages</Link>
                <div className="menu-divider"></div>
                <Link to="/compte/centre-aide">Contacter le support</Link>
                <Link to="/contactez-nous">Signaler un problème</Link>
                <Link to="/compte/terms">Termes et conditions</Link>
                <Link to="/compte/politique">Politique de confidentialité</Link>
                <Link to="/">Numéro de licence</Link>
                <div className="menu-divider"></div>
                <Link to="/connexion">Déconnexion</Link>
              </nav>
            </div>
          )}
        </div>
      </div>

      {show && <Sidebar show={show} />}
      {show && (
        <div onClick={() => setShow(false)} className="hideSidebar"></div>
      )}
    </div>
  );
}
