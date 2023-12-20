import React, { useState } from 'react';
import './login.scss'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('url-de-tu-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        window.location.href = '/dashboard';
      } else {
        alert('Se produjo un error al procesar tu solicitud.');
      }
    } catch (error) {
      alert('Se produjo un error al procesar tu solicitud.');
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Smartselling</h1>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email1">Email</label>
            <input
              type="text"
              id="email1"
              name="email1"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Contraseña</label>
            <input
              type="password"
              id="pass"
              name="pass"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-button">
            <button className="form-submit-btn" type="submit">
              Iniciar sesión
            </button>
            <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
