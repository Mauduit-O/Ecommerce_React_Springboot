export default function Login() {
  return (
    <div className="background-modal-connexion">
      <div className="container-modal-connexion">
        <div className="container-icon-close-connexion">
          <img className="icon-close" alt="Icon fermer" src="assets/icon/close.svg" />
        </div>
        <div className="content-modal-connexion">
          <form method="post">
            <div className="container-connexion">
              <h1 className="title-modal-connexion">Connexion</h1>
              <div className="container-input-modal-connexion container-input-modal-connexion1">
                  <div><input type="text" id="email" name="email" value="" placeholder="Email *" /></div>
              </div>
              <div className=" container-input-modal-connexion container-input-modal-connexion2">
                  <div><input className="pwd" type="password" id="password" name="password" placeholder="Mot de passe *" /></div>
              </div>
              <div className="container-btn-modal-connexion">
                <button name="btnConnexion" className="btn-modal-connexion" >Se connecter</button>
                <div className="container-alerty-co"><p className="alerty-co"></p></div>
              </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}
