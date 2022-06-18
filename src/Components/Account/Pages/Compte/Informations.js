export default function Informations() {
  return (
    <div className="modules">
      <h3 className="module-heading">Informations de compte</h3>
      <div className="module-main">
        <div className="settings-label">Photo de profil</div>
        <button className="button">
          Télécharger une nouvelle image de profil
        </button>
        <p className="paragraph-small no-margin">
          Vous pouvez télécharger des images jusqu&#x27;à 400x400px. <br />{" "}
        </p>
        <div className="divider"></div>

        <div className="w-form">
          <form className="form">
            <div className="field-area">
              <label>Nom du port</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="port_name"
                placeholder="Vieux-Port"
                required=""
              />
            </div>
            <div className="field-area">
              <label>Email</label>
              <input
                type="tel"
                className="input-filed "
                maxLength="15"
                name="phone"
                placeholder="0561558954"
                required=""
              />
              <label>Téléphone</label>
              <input
                type="email"
                className="input-filed "
                maxLength="256"
                name="profile-email"
                placeholder="example@email.com"
                required=""
              />
            </div>
            <div className="field-area">
              <label>Ville</label>
              <input
                type="text"
                className="input-filed "
                maxLength="20"
                name="Username"
                placeholder="Marseille"
                required=""
              />
            </div>
            <div className="field-area">
              <label>Responsable de compte</label>
              <input
                type="text"
                className="input-filed "
                maxLength="256"
                name="Role"
                placeholder="Owen Nahapo"
                required=""
              />
              <label>Canal de communication</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="canal"
                placeholder="VHF-9"
                required=""
              />
              <label>Capacité du port</label>
            </div>
            <div className="field-area">
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="capacity"
                placeholder="900 places"
                required=""
              />
              <label>Profondeur du port</label>
              <input
                type="text"
                className="input-filed"
                maxLength="256"
                name="depth"
                placeholder="8 mètres"
                required=""
              />
              <div className="settings-label">Photo de couverture (NFBoat)</div>
              <button className="button ">
                Télécharger une photo de couverture (800x300)
              </button>
              <label>Description du port (NFBoat)</label>
              <textarea
                id="description"
                name="description"
                maxLength="5000"
                placeholder="Description"
                className="text-area-input input-filed"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Mettre à jour le profil"
              className="button settings"
            />
          </form>
          <div className="form-success w-form-done">
            <div>
              Nous avons mis à jour votre compte. Veuillez rafraîchir la page.
            </div>
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
  );
}
