import React from "react";
import MagnifyingGlass from "../../../images/MagnifyingGlass2.svg";
import CopyWrite from "../../CommonPage/CopyWrite/CopyWrite";
import MetaData from "../../Utils/MetaData";
import "./CentreAide.scss";
import CentreCard from "./Compte/CentreCard";

export default function CentreAide() {
  return (
    <div>
      <MetaData title={"Centre d'aide | NFPort"} />

      <div className="main-content">
        <div className="container">
          <h1 className="page-title">Centre d&#x27;aide</h1>
          <div className="module">
            <div className="module-main large">
              <h3 className="module-heading large">
                Comment pouvons-nous vous aider ?
              </h3>

              <form className="help-search">
                <button className="search-button">
                  <img src={MagnifyingGlass} alt="" />
                </button>
                <input
                  type="search"
                  className="search-input w-input"
                  maxLength="256"
                  name="query"
                  placeholder="Rechercher un sujet"
                  id="search"
                  required=""
                />
              </form>

              <h3 className="module-heading">Tous sujets</h3>
              <div className="_3-grid wf-section">
                <CentreCard />
                <CentreCard />
                <CentreCard />
                <CentreCard />
                <CentreCard />
                <CentreCard />
              </div>
            </div>
          </div>

          <div className="module">
            <div className="module-main large">
              <h3 className="module-heading large">
                Vous ne trouvez pas ce que vous cherchez ?<br />
                Envoyez-nous un courriel ci-dessous.
              </h3>
              <div className="w-form">
                <form className="form">
                  <div className="_2-fields-split">
                    <div className="field-area">
                      <label>Nom du port</label>

                      <input
                        type="text"
                        className="input-filed "
                        maxLength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Nom du port"
                        id="field"
                        required=""
                      />
                    </div>
                    <div className="field-area">
                      <label>Ville</label>
                      <input
                        type="text"
                        className="input-filed "
                        maxLength="256"
                        name="ville"
                        data-name="ville"
                        placeholder="Ville"
                        id="ville"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="_2-fields-split">
                    <div className="field-area">
                      <label>Email*</label>
                      <input
                        type="email"
                        className="input-filed "
                        maxLength="256"
                        name="profile-email"
                        data-name="profile-email"
                        placeholder="example@email.com"
                        id="field"
                        required=""
                      />
                    </div>
                    <div className="field-area">
                      <label>Numéro de téléphone</label>
                      <input
                        type="tel"
                        className="input-filed"
                        maxLength="256"
                        name="number"
                        data-name="Number"
                        placeholder="027 123 1234"
                        id="number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="field-area">
                    <label>Comment pouvons-nous vous aider ?</label>
                    <textarea
                      placeholder=""
                      maxLength="5000"
                      data-name="Field"
                      name="field"
                      id="field"
                      className="text-area-input"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    value="Envoyer"
                    data-wait="Veuillez patienter ..."
                    className="button w-button"
                  />
                </form>
                <div className="form-success w-form-done">
                  <div>Merci pour votre courriel.</div>
                </div>
                <div className="form-error w-form-fail">
                  <div>
                    Oups ! Un problème est survenu. Veuillez remplir les champs
                    obligatoires et réessayer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </div>
  );
}
