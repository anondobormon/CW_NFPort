import React, { useState } from "react";
import Archive from "../../../images/Archive.svg";
import ArrowFatLineRight from "../../../images/ArrowFatLineRight.svg";
import PaperPlaneRight from "../../../images/PaperPlaneRight.svg";
import Trush from "../../../images/Trush.svg";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import SendEmail from "../DashboardCards/SendEmail";
import "./EmailDetails.scss";

export default function EmailDetails() {
  const [showSendEmail, setShowSendEmail] = useState(false);

  return (
    <div>
      <div className="dashboard-main-content">
        <MetaData title={"Détails du mail | NFPort"} />

        <div className="dashboard-page-header">
          <h2>AudioHunt</h2>
          <button className="button page w-button">Return</button>
        </div>
        <div className="_2-5-1-grid">
          <div className="module">
            <div className="module-main large">
              <h3 className="module-heading large">Demande de réservation</h3>
              <div className="email-time">18h44</div>
              <div className="spacer _32"></div>
              <div className="rich-text w-richtext">
                <p>
                  <strong>Zodiac Medline III - </strong>
                </p>
                <p>Demande de réservation du 16 avril au 1 juin</p>
                <p>Nom du bateau : Esmeralada</p>
                <p>Immatriculation : ZRX-500WO</p>
                <p>
                  The rich text element allows you to create and format
                  headings, paragraphs, blockquotes, images, and video all in
                  one place instead of having to add and format them
                  individually. Just double-click and easily create content.
                </p>
                <p>
                  For dynamic content, add a rich text field to any collection
                  and then connect a rich text element to that field in the
                  settings panel. Voila!
                </p>
                <p>___</p>
                <p>NFBoat</p>
              </div>
            </div>
          </div>
          <div className="action-group">
            <button
              onClick={() => setShowSendEmail(true)}
              className="action-card"
            >
              <img
                src={PaperPlaneRight}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Répondre</h3>
            </button>
            <button className="action-card">
              <img
                src={ArrowFatLineRight}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Transférer</h3>
            </button>
            <button className="action-card">
              <img
                src={Archive}
                loading="lazy"
                width="22"
                alt=""
                className="action-icon"
              />
              <h3 className="module-heading">Archiver</h3>
            </button>
            <button className="action-card delete-button">
              <img
                src={Trush}
                loading="lazy"
                width="18"
                alt=""
                className="action-icon "
              />
              <h3 className="module-heading">Delete</h3>
            </button>
          </div>
        </div>
      </div>
      <CopyWrite />
      {showSendEmail && (
        <div className="sendEmail">
          <div className="mainContent">
            <SendEmail showModal={[showSendEmail, setShowSendEmail]} />
            <div
              onClick={() => setShowSendEmail(false)}
              className="hideModal"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
