import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!acceptTerms) {
      setError('Vous devez accepter les termes et conditions.');
      return;
    }
    // Add your code to create a user with the provided information here
    navigate('Compte');
  }

  return (
    <>
      <div className='background'>
        <div className="container formulaire">
          <div className="head text-center">
            <h2>Inscription</h2>
            <p>
              Vous avez déjà un compte? <Link to="/login">Connectez-vous ici!</Link>
            </p>
          </div>

          <div className="form-body">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Prénom
                </label>
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="form-control"
                  id="exampleInputEmail1"
                />
                <div id="emailHelp" className="form-text">
                  Nous ne partagerons jamais votre adresse e-mail avec quiconque.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mot de passe
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className="form-control"
                  id="confirmPassword"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Je reconnais avoir pris connaissance et j’accepte les
                  <a href="#">termes des conditions générales d’utilisation.</a>
                </label>
                <div>
                  <Switch
                    onChange={() => setAcceptTerms(!acceptTerms)}
                    checked={acceptTerms}
                  />
                </div>
              </div>
              <div className="text-danger">{error}</div>
              <button type="submit" className="valider">
                Valider
              </button>
              <p className='sociale'>Connectez vous avec <hr /></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
