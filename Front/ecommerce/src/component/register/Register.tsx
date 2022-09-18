import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="background-modal-inscription">
	      <div className="container-modal-inscription">
		      <div className="container-icon-close-inscription">
			      <img className="icon-close-inscription" alt="Icon fermer" src="assets/icon/close.svg" />
		      </div>		
		      <div className="content-modal-inscription">
			      <form method="post" className="modal-inscription-form" >
              <div className="container-inscription">
					      <h1 className="modal-inscription-title">Inscription </h1>
					
						    <div className="container-modal-inscription-input">
                  <div className="row-input-inscription">
                    <input className="register-input-txt" type="text" id="name" name="name" value=""  placeholder="Nom *" />
                    <input className="register-input-txt"  type="text" id="firstname" name="firstname" value="" placeholder="Prénom *" /> 
                  </div>
              
                  <div><input type="text" id="email" name="email" value="" placeholder="Email *" /></div>
              
                  <div><input type="text" id="address" name="address" value="" placeholder="Adresse *" /></div>
            
                  <div className="row-input-inscription">
                    <input className="register-input-txt" type="text" id="city" name="city" value="" placeholder="Ville *" />
                    <input type="number" id="zipCode" name="zipCode" value="" placeholder="Code Postal *" />
                  </div>
          
                  <div className="row-input-inscription">
                    <input className="register-input-txt" type="text" id="country" name="country" value="" placeholder="Pays *" />
                    <input type="number" id="phone" name="phone" value="" placeholder="Téléphone *" />
                  </div>
            
                  <div><input className="pwd" type="password" id="password" name="password" placeholder="Mot de passe *" /></div>
            
                  <div><input className="pwd" type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Répéter votre mot de passe *" /></div>
                  <div className="container-alerty"><p className="alerty"></p></div>
						    </div>
                <div className="container-btn-inscription">
                  <input name="btnInscription" className="btn-inscription" type="submit" value="Créer mon compte" /> 
                </div>
              </div>
			      </form>
          </div>
		    </div>
	    </div>	
    </div>
  )
}
