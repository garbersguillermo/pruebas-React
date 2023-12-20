import React, { useState } from 'react';

export default function Step2({ onValidation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);



  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'password':
        setPasswordError(value && /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(value) ? '' : 'La contraseña no es válida.');
        break;
      case 'confirmPassword':
        setConfirmPasswordError(value && value === password ? '' : 'Las contraseñas no coinciden.');
        break;
      case 'terms':
        setTermsError(value ? '' : 'Debes estar de acuerdo con los Términos y Condiciones.');
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateField('password', password);
    validateField('confirmPassword', confirmPassword);
    validateField('terms', agreedToTerms);

     const formIsValid = !passwordError && !confirmPasswordError && !termsError;

    onValidation(formIsValid);

    if (formIsValid) {
      // Código para manejar los datos del formulario
      // Esto podría ser pasar los datos a un componente padre o hacer una solicitud de API
    } else {
      // Manejo de errores o alertas
    }

    
  };

  return (
    <div className="step2-box">
      <form onSubmit={handleSubmit}>
        <div className="group">
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onBlur={() => validateField('password', password)}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*[A-Z])(?=.*[0-9]).{8,}$"
              autoComplete="new-password"
              required
            />
            <span className="form-required">{passwordError}</span>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onBlur={() => validateField('confirmPassword', confirmPassword)}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <span className="form-required">{confirmPasswordError}</span>
          </div>
                      
        </div>
        <div className="checkbox-container">
            <div>
            <input
              type="checkbox"
              id="terms-checkbox"
              className="custom-checkbox"
              checked={agreedToTerms}
              onChange={(e) => {
                setAgreedToTerms(e.target.checked);
                validateField('terms', e.target.checked);
              }}
              required
            />
            </div>
            <div>
            <label htmlFor="terms-checkbox">
            Estoy de acuerdo con los <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          </label>
          </div>
        </div>
        {/* Botones u otros controles, si son necesarios */}
      </form>
    </div>
  );
}
