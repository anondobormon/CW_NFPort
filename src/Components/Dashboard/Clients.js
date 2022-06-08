import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Support.scss";

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
        <div className="container">
          <div className="module">
            <div className="module-main">
              <div className="grid-section">
                <div className="support-row head">
                  <div className="checkbox-grid w-form">
                    <input
                      type="checkbox"
                      id="checkbox-8"
                      name="checkbox-8"
                      className="checkmark"
                    />
                  </div>
                  <h4 className="table-header">ID</h4>
                  <h4 className="table-header">Nom</h4>
                  <h4 className="table-header">Email</h4>
                  <h4 className="table-header">Numéro</h4>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="support-row">
                    <div className="checkbox-grid w-form">
                      <input
                        type="checkbox"
                        id="checkbox-8"
                        name="checkbox-8"
                        className="checkmark"
                      />
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="grid-number-block">
                      <div>#</div>
                      <div id="input_ticketnumber">20</div>
                    </div>
                    <div className="grid-block mob-hidden">
                      <div id="inpute_ticketdate">Valentin</div>
                    </div>
                    <div id="input.customer">Mail</div>
                    <div>083749382</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
