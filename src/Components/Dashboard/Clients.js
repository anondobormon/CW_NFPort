import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";

export default function Clients() {
  return (
    <div>
      <MetaData title={"Clients | NFPort"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Clients</h2>
          <a href="#" className="button page w-button">
            Ajouter un nouveau client
          </a>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
