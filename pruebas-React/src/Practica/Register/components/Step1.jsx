import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import { FaEnvelope } from 'react-icons/fa'; 
import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';



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
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Icon as={FaEnvelope} color="gray.300" />
                    </InputLeftElement>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateField('email', email)}
                        pattern=".+@.+\..+"
                        autoComplete="username"
                        required
                        placeholder="Tu Correo"
                        className="correo-input" 

                                            />
                </InputGroup>
                <span className="form-required">{emailError}</span>
            </div>
        <div className="input-group">
                <label htmlFor="telefono">Teléfono</label>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Icon as={FaPhone} color="gray.300" /> {/* Ícono de teléfono */}
                    </InputLeftElement>
                    <Input
                     type="tel"
                     id="telefono"
                     name="telefono"
                     value={telefono}
                     onChange={(e) => setTelefono(e.target.value)}
                     onBlur={() => validateField('telefono', telefono)}
                     autoComplete="tel"
                     placeholder="Tu teléfono"
                     className="telefono-input" 
                     required
                                          />
                </InputGroup>
                <span className="form-required">{telefonoError}</span>
            </div>
      </div>
      </form>
    </div>
  );
}