import React, { useState } from 'react';

export default function Step1({ onValidation }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        setNameError(value ? '' : 'Ingresa un nombre válido.');
        break;
      case 'lastName':
        setLastNameError(value ? '' : 'Ingresa un apellido válido.');
        break;
      case 'email':
        setEmailError(value && /.+@.+\..+/.test(value) ? '' : 'Ingresa un correo electrónico válido.');
        break;
      case 'telefono':
        setTelefonoError(value && /^\d+$/.test(value) ? '' : 'Ingresa un número de teléfono válido.');
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateField('name', name);
    validateField('lastName', lastName);
    validateField('email', email);
    validateField('telefono', telefono);


    const formIsValid = !nameError && !lastNameError && !emailError && !telefonoError;

    onValidation(formIsValid);

    if (formIsValid) {
      setAlertMessage('');
      // Código para el envío del formulario...
    } else {
      setAlertMessage('Por favor, completa todos los campos correctamente.');
    }
  };


  return (
    <div className="step1-box">
      <form onSubmit={handleSubmit}>
      <div id="alert-box">{alertMessage}</div>
      <div className="group">
           <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => validateField('name', name)}
            autoComplete="name"
            required
          />
          <span className="form-required">{nameError}</span>
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastName}
            onBlur={() => validateField('lastname', lastName)}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="lastname"
            required
          />
          <span className="form-required">{lastNameError}</span>
        </div>
      </div>
      <div className="group">
        <div className="input-group">
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onBlur={() => validateField('email', email)}
            onChange={(e) => setEmail(e.target.value)}
            pattern=".+@.+\..+"
            autoComplete="username"
            required
          />
          <span className="form-required">{emailError}</span>
        </div>
        <div className="input-group">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="number"
            id="telefono"
            name="telefono"
            value={telefono}
            onBlur={() => validateField('telefono', telefono)}
            onChange={(e) => setTelefono(e.target.value)}
            autoComplete="tel"
            required
          />
          <span className="form-required">{telefonoError}</span>
        </div>
      </div>
      </form>
    </div>
  );
}