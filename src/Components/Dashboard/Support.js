import React from "react";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../Utils/MetaData";
import "./Support.scss";

export default function Support() {
  return (
    <div>
      <MetaData title={"Support | Dawn"} />

      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2>Support</h2>
          <a href="#" className="button page w-button">
            Ajouter un ticket
          </a>
        </div>
        <div className="container">
          <div className="module">
            <div className="module-tabs w-tab-menu">
              <button className="tab active">
                <div>Tous les tickets</div>
              </button>
              <button className="tab">
                <div>Nouveaux</div>
              </button>
              <button className="tab">
                <div>Ouverts</div>
              </button>
              <button className="tab">
                <div>En attente</div>
              </button>
              <button className="tab">
                <div>Fermés</div>
              </button>
            </div>
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
                  <h4 className="table-header">Date</h4>
                  <h4 className="table-header">Customer</h4>
                  <h4 className="table-header">Status</h4>
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
                      <div id="input_ticketnumber">ticketnumber</div>
                    </div>
                    <div className="grid-block mob-hidden">
                      <div id="inpute_ticketdate">06/84/3020</div>
                    </div>
                    <div id="input.customer">Customer</div>
                    <div>
                      <div className="tag new">New</div>
                      <div id="input_status" className="tag">
                        Open
                      </div>
                      <div className="tag issues">Issues</div>
                      <div className="tag closed">Closed</div>
                    </div>
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
