import { Link } from "react-router-dom";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import "./Message.scss";

const messageFakeData = [
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "writer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "answer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "writer",
  },
  {
    name: "Olivier Giroud",
    title: "  Bonjour",
    description:
      "J'aurais souhaité connaître le prix pour 5 nuits dans votre port.",
    greetings: "Cordialement",
    sender: "Olivier",
    time: "14h45",
    status: "answer",
  },
];

export default function Message() {
  return (
    <div className="message">
      <div className="dashboard-main-content">
        <div className="dashboard-page-header">
          <h2 className="heading smart">Olivier Giroud</h2>
          <a href="#" className="button page w-button">
            Retour aux messages
          </a>
        </div>

        <div className="dashboard-page-contents">
          <div className="module">
            {messageFakeData.map((item, index) => (
              <div key={index} className={`module-main ${item.status}`}>
                <div className="email-section question">
                  {item.status === "writer" && (
                    <div className="top-message">
                      <div className="image cover"></div>
                      <h3 className="module-heading">Olivier Giroud</h3>
                      {item.name}
                    </div>
                  )}

                  <div className="module-main">
                    <Link to="/email-details" className="email-element">
                      <div id="sender-message" className="notification-top">
                        <div className="title">
                          {item.title}
                          <br />
                          {item.description}
                          <br />
                          <br />
                          {item.greetings},
                          <br />
                          <br />
                          {item.sender}
                        </div>
                        <div className="email-time">{item.time}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="div-block-3">
          <div className="div-block-4">
            <div className="form-block">
              <form>
                <textarea
                  name="message"
                  placeholder="Aa"
                  required
                  className="text-field"
                  id=""
                ></textarea>

                <input type="submit" value="Envoyer" className="button" />
              </form>
              <div className="form-success">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="form-error">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
