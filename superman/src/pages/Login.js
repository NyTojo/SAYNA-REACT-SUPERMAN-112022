import React, { useState } from 'react';
import '../styles/Login.css'; // You should create a separate CSS file for your login styles
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // Add your code for authenticating the user here
    try {
      // Authentication logic (e.g., using Firebase, JWT, etc.)
      navigate('Compte'); // Navigate to the user's account page upon successful login
    } catch (e) {
      setError('Adresse e-mail ou mot de passe invalide. Veuillez réessayer.');
    }
  }

  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 className="hero-title text-uppercase text-white">Connexion</h1>
          </div>
        </div>
      </section>
      <div className="container formulaire">
        <div className="head text-center">
          <h2>Connexion</h2>
          <p>
            Vous n'avez pas de compte? <Link to='/signup'>Inscrivez-vous ici!</Link>
          </p>
        </div>

        <div className="form-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Adresse e-mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="text-danger">{error}</div>
            <button type="submit" className="button">Se connecter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
