import "./PendingReservation.scss";

export default function PendingReservation({ item }) {
  return (
    <div className="module-main">
      <div className="w-layout-grid schedule-grid">
        <div className="schedue-time">
          <div>{item.time}</div>
        </div>
        <div className="schedule-div">
          <div className="columns">
            <div className="input booking _1 w-col w-col-6">
              <div>
                <div className="w-form">
                  <form className="form-2">
                    <label>Nom du client</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="client_name-2"
                      placeholder=""
                      id="client_name-2"
                      value={item.name}
                    />
                    <label>Largeur du bateau</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_width-2"
                      placeholder=""
                      id="boat_width-2"
                      required=""
                      value={item.boatWidth}
                    />
                    <label>Nom du bateau</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_name-2"
                      placeholder=""
                      id="boat_name-2"
                      required=""
                      value={item.boatName}
                    />
                    <label>Durée</label>
                    <input
                      type="text"
                      maxLength="256"
                      name="boat_name-2"
                      placeholder=""
                      id="boat_name-2"
                      required=""
                      value={item.duration}
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Merci ! Votre demande a été reçue !</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oups ! Un problème est survenu lors de l&#x27;envoi du
                      formulaire.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input booking _2 w-col w-col-6">
              <div className="w-form">
                <form className="form-3">
                  <label>Immatriculation</label>
                  <input
                    type="text"
                    className="boat_matriculation w-input"
                    maxLength="256"
                    name="boat_matriculation-2"
                    data-name="Boat Matriculation 2"
                    placeholder=""
                    id="boat_matriculation-2"
                    value={item.registration}
                  />
                  <label>Longueur du bateau</label>
                  <input
                    type="text"
                    className="boath_length w-input"
                    maxLength="256"
                    name="boat_length-2"
                    data-name="Boat Length 2"
                    placeholder=""
                    value={item.boatLength}
                    id="boat_length-2"
                  />
                  <label>Montant (€)</label>
                  <input
                    type="text"
                    className="price w-input"
                    maxLength="256"
                    name="payment_status-2"
                    data-name="Payment Status 2"
                    placeholder=""
                    id="payment_status-2"
                    value={item.amount}
                  />
                </form>
                <div className="w-form-done">
                  <div>Merci ! Votre demande a été reçue !</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oups ! Un problème est survenu lors de l&#x27;envoi du
                    formulaire.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block">
            <button className="button confirm w-button">Annuler</button>
            <button className="button cancel w-button">Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
