import React from "react";
import { Link, NavLink } from "react-router-dom";
import CalendarBlank from "../../../images/CalendarBlank.svg";
import Chats from "../../../images/Chats.svg";
import Collapse from "../../../images/Collapse-Icon.svg";
import EnvelopeOpen from "../../../images/EnvelopeOpen.svg";
import Logo from "../../../images/Group-1614-1.png";
import House from "../../../images/House.svg";
import Note from "../../../images/Note.svg";
import Question from "../../../images/Question.svg";
import Users from "../../../images/Users.svg";
import "./Sidebar.scss";

export default function Sidebar({ show }) {
  return (
    <div className={`sidebar ${show && "sidebar-active"} `}>
      <div className="sidebar-logo">
        <Link to="/" className="dashboard-logo">
          <img src={Logo} loading="lazy" alt="" className="image" />
        </Link>
        <div className="sidebar-collapse">
          <img src={Collapse} loading="lazy" alt="" />
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-section bottom-divider">
          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/"
          >
            <img src={House} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Dashboard</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/reservations"
          >
            <img src={Note} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Réservations</div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/emails"
          >
            <img src={EnvelopeOpen} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Emails</div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/calendar"
          >
            <img src={CalendarBlank} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Calendrier</div>
          </NavLink>
        </div>

        <div className="sidebar-menu-section bottom-divider">
          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/clients"
          >
            <img src={Users} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Clients</div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `sidebar-link ${isActive && " w--current"} `
            }
            to="/support"
          >
            <img src={Chats} alt="" className="sidebar-icon" />
            <div className="sidebar-link-text">Support</div>
          </NavLink>
        </div>
      </div>
      <div className="sidebar-footer">
        <Link to="/compte/centre-aide" className="sidebar-link w-inline-block">
          <img src={Question} className="sidebar-icon" alt="" />
          <div className="sidebar-link-text">Centre d'aide</div>
        </Link>
      </div>
    </div>
  );
}
