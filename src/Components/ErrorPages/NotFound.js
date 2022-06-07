import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Account/Navbar/Nav";
import MetaData from "../Utils/MetaData";
import "./Error.scss";

export default function NotFound() {
  return (
    <div className="error">
      <MetaData title={"Not Found"} />

      <Nav />
      <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
          <h2>Erreur 404</h2>
          <p>La page que vous cherchez n&#x27;existe plus.</p>
          <div className="spacer_16"></div>
          <Link to="/" className="button w-button">
            Revenir a l&#x27;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
