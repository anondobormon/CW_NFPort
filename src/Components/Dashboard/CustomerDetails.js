import React from "react";
import Archive from "../../images/Archive.svg";
import Note from "../../images/Note.svg";
import PaperPlaneRight from "../../images/PaperPlaneRight.svg";
import Receipt from "../../images/Receipt.svg";

export default function CustomerDetails() {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-page-header">{/* <h2></h2> */}</div>
      <div className="container">
        <div className="_2-5-1-grid">
          <div className="module-group">
            <div className="module">
              <div className="module-header">
                <h3 className="module-heading">Customer Info</h3>
              </div>
              <div className="module-main">
                <div className="_50-width">
                  <div className="field-label">Email</div>
                  <p></p>
                </div>
                <div className="_50-width">
                  <div className="field-label">Phone Number</div>
                  <p></p>
                </div>
                <div className="_50-width">
                  <div className="field-label">Status</div>
                  <p></p>
                </div>
                <div className="_50-width">
                  <div className="field-label">Customer ID</div>
                  <p></p>
                </div>
                <div className="_50-width">
                  <div className="field-label">Date Created</div>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="module marginT-20">
              <div className="module-header">
                <h3 className="module-heading">Customer Tasks</h3>
                <a href="#" className="module-button add w-button">
                  +
                </a>
              </div>
              <div className="module-main">
                <div className="w-form">
                  <form>
                    <div className="checkbox-element">
                      <label className="w-checkbox checkbox-top">
                        <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                        <input
                          type="checkbox"
                          id="checkbox-8"
                          name="checkbox-8"
                          data-name="Checkbox 8"
                        />
                        <span className="task-title w-form-label">
                          Submit refund for latest order
                        </span>
                        <div className="tag task">Urgent</div>
                      </label>
                      <p className="task-description">
                        Customer had issues with latest order and requires a
                        refund to their account
                      </p>
                    </div>
                    <div className="checkbox-element">
                      <label className="w-checkbox checkbox-top">
                        <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                        <input
                          type="checkbox"
                          id="checkbox-6"
                          name="checkbox-6"
                          data-name="Checkbox 6"
                        />
                        <span className="task-title w-form-label">
                          Update customer phone number
                        </span>
                      </label>
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="action-group">
            <a href="#" className="action-card w-inline-block">
              <img src={Receipt} alt="" width="22" className="action-icon" />
              <h3 className="module-heading">Add support ticket</h3>
            </a>
            <a href="#" className="action-card w-inline-block">
              <img
                src={PaperPlaneRight}
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Send an email</h3>
            </a>
            <a href="#" className="action-card w-inline-block">
              <img src={Note} alt="" width="22" className="action-icon" />
              <h3 className="module-heading">Add a note</h3>
            </a>
            <a href="#" className="action-card w-inline-block">
              <img src={Archive} width="22" alt="" className="action-icon" />
              <h3 className="module-heading">Archive customer</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
