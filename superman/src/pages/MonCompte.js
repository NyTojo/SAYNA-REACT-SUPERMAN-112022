import React from 'react'
import Profil from '../components/Profil';
import '../styles/Profil.css'
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import iconFacebook from '../assets/logos/icon_facebook.png';


function MonCompte() {
  return (
    <>
      <Profil />
      <div className="scroll">
        <img className="social" src={iconFacebook} alt="icon_facebook" />
        <img className="social" src={iconInstagram} alt="icon_instagram" />
        <img className="social" src={iconTwitter} alt="icon_twitter" />
      </div>
      <div style={{ background: '#10121b' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className='info'>
                <a href="#">Mes informations</a>
                <a href="#">Historique des commandes</a>
                <a href="#">Mes avis</a>
                <a href="#">Mes favoris</a>
              </div>
              <button value='logout' className='deconnection'>Deconnexion</button>
            </div>
            <div className="col-md-9">
              <div className="row">
                <h1>Informations personnelles</h1>
                <hr />
                <p>Nom : John Doe</p>
                <p>Prénom : Jane Doe</p>
                <p>Mot de passe : *********</p>
                <p>Email : johndoe@example.com</p>
                <p>Numéro de téléphone : (123) 456-7890</p>
                <p>Adresse de livraison : 123 Rue de la Livraison</p>
                <p>Adresse de facturation : 456 Rue de la Facturation</p>
                <button className="valide">MODIFIER</button>
              </div>
              <div className="espace-vertical"></div>
              <div>
                <div className='row'>
                  <h1>Newsletter</h1>
                  <hr />
                  <label>
                    <input
                      type="checkbox"
                      value="Oui"
                      name="abonnement"
                      id="oui"
                      
                    />
                    Oui
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Non"
                      name="abonnement"
                      id="non"
                     
                    />
                    Non
                  </label>

                  <button className="save">Enregistrer</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default MonCompte