import React from "react";
import { Link } from "react-router-dom";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import NavbarCommon from "../Navbar/NavbarCommon";
import "./ContactezNous.scss";

export default function ContactezNous() {
  return (
    <div className="contact">
      <MetaData title={"Contactez-nous | NFPort"} />

      <NavbarCommon />

      <div className="section">
        <div className="contact-sales-grid">
          <div className="simple-text-box">
            <h2>Contactez notre équipe</h2>
            <p>
              Demandez votre accès anticipé gratuit
              <br />
            </p>
          </div>
          <div className="module">
            <div className="w-form">
              <form className="form">
                <div className="_2-fields-split">
                  <div className="field-block-contact">
                    <label>Prénom</label>
                    <input
                      type="text"
                      className="text-input-contact  "
                      maxLength="256"
                      name="name"
                      placeholder="John"
                      id="field"
                      required=""
                    />
                  </div>
                  <div className="field-spacer"></div>
                  <div className="field-block-contact">
                    <label>Nom</label>
                    <input
                      type="text"
                      className="text-input-contact  "
                      maxLength="256"
                      name="name"
                      placeholder="Dupont"
                      id="field"
                      required=""
                    />
                  </div>
                </div>
                <div className="_2-fields-split">
                  <div className="field-block-contact">
                    <label>Email</label>
                    <input
                      type="email"
                      className="text-input-contact  "
                      maxLength="256"
                      name="profile-email"
                      placeholder="example@email.com"
                      id="field"
                      required=""
                    />
                  </div>
                  <div className="field-spacer"></div>
                  <div className="field-block-contact">
                    <label>Téléphone</label>
                    <input
                      type="tel"
                      className="text-input-contact  "
                      maxLength="256"
                      name="number"
                      placeholder="027 123 1234"
                      id="number"
                      required=""
                    />
                  </div>
                </div>
                <div className="_2-fields-split">
                  <div className="field-block-contact">
                    <label>Nom du port</label>
                    <input
                      type="text"
                      className="text-input-contact  "
                      maxLength="256"
                      name="Port-Name"
                      placeholder="Vieux port de marseille"
                      id="Port-Name"
                      required=""
                    />
                  </div>
                  <div className="field-spacer"></div>
                  <div className="field-block-contact">
                    <label>Capacité</label>
                    <input
                      type="number"
                      className="text-input-contact  "
                      maxLength="256"
                      name="Company-Size"
                      placeholder="140"
                      id="Company-Size"
                      required=""
                    />
                  </div>
                </div>
                <div className="_2-fields-split">
                  <div className="field-block-contact">
                    <label>Département</label>
                    <input
                      type="text"
                      className="text-input-contact  "
                      maxLength="256"
                      name="Company-Name-2"
                      placeholder="13"
                      id="Company-Name-2"
                      required=""
                    />
                  </div>
                  <div className="field-spacer"></div>
                  <div className="field-block-contact">
                    <label>Fonction</label>
                    <input
                      type="text"
                      className="text-input-contact  "
                      maxLength="256"
                      name="Role"
                      placeholder="Chef de projet"
                      id="Role"
                      required=""
                    />
                  </div>
                </div>
                <div className="field-block-contact">
                  <label>Comment pouvons nous vous aider ?</label>
                  <textarea
                    placeholder="Entrez votre message"
                    maxLength="5000"
                    name="field"
                    id="field"
                    className="text-area "
                  ></textarea>
                </div>
                <input type="submit" value="Envoyer" className="button" />
                <p className="paragraph-small light">
                  En cliquant sur le bouton ci-dessus, vous acceptez nos
                  <Link to="/compte/terms" className="simple-link light">
                    Conditions Générales
                  </Link>
                  et notre
                  <Link to="/compte/politique" className="simple-link light">
                    Politique de confidentialité.
                  </Link>
                </p>
              </form>
              <div className="form-success w-form-done">
                <div>
                  Votre demande a été soumise et nous vous contacterons sous
                  peu.
                </div>
              </div>
              <div className="form-error w-form-fail">
                <div>Un problème est survenu. Veuillez réessayer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
