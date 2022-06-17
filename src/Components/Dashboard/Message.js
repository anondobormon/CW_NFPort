import { Link } from "react-router-dom";
import CopyWrite from "../CommonPage/CopyWrite/CopyWrite";
import "./Message.scss";

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
            <div className="module-main writer">
              <div className="email-section question">
                <div className="top-message">
                  <div className="image cover"></div>
                  <h3 className="module-heading">Olivier Giroud</h3>
                </div>

                <div className="module-main special">
                  <Link
                    to="/email-details"
                    className="email-element simple w-inline-block"
                  >
                    <div id="sender-message" className="notification-top">
                      <div className="title">
                        Bonjour,
                        <br />
                        J'aurais souhaité connaître le prix pour 5 nuits dans
                        votre port.
                        <br />
                        Mon voilier fait 9m50 de long et xm de profondeur
                        <br />
                        <br />
                        Cordialement,
                        <br />
                        <br />
                        Olivier
                      </div>
                      <div className="email-time">14h45</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="module-main messages-blue">
              <div className="email-section">
                <div className="module-main">
                  <div>
                    <Link to="/email-details" className="email-element">
                      <div className="notification-top spacial">
                        <div className="email-time special">14h45</div>
                        <div className="title answer">
                          Bonjour Olivier,
                          <br />
                          Merci pour votre intérêt.
                          <br />
                          Les nuits sont a x€ sur cette période. Souhaitez-vous
                          réserver <br />
                          <br />
                          ‍Cordialement,
                          <br />
                          <br />
                          Jérome, Port de Marseille
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="module-main writer">
              <div className="email-section question">
                <div className="top-message">
                  <div className="image cover"></div>
                  <h3 className="module-heading">Olivier Giroud</h3>
                </div>

                <div className="module-main special">
                  <Link to="/email-details" className="email-element">
                    <div id="sender-message" className="notification-top">
                      <div className="title">
                        Bonjour,
                        <br />
                        <br />
                        J'aurais souhaité connaître le prix pour 5 nuits dans
                        votre port.
                        <br />
                        Mon voilier fait 9m50 de long et xm de profondeur
                        <br />
                        <br />
                        Cordialement,
                        <br />
                        <br />
                        Olivier
                      </div>
                      <div className="email-time">14h45</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
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
