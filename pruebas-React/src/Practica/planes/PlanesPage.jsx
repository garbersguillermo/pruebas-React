// PlanesPage.jsx
import React, { useState } from 'react';
import './Planespage.scss'; // Asegúrate de que el nombre del archivo coincida con tu archivo CSS


const PlanesPage = () => {
  const [paymentType, setPaymentType] = useState('monthly');

  const prices = {
      '0 a 10 ventas': 7200,
      '11 a 100 ventas': 9600,
      '101 a 350 ventas': 13600,
      '351 a 1.000 ventas': 20000,
      '1.001 a 2.500 ventas': 24000,
      'Más de 2.500 ventas': 29600
  };

  const formatPrice = (price) => {
      return price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const calculateAnnualPrice = (monthlyPrice) => {
      const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount
      return formatPrice(annualPrice);
  };

  const togglePayment = (type) => {
      setPaymentType(type);
  };

  return (
      <div className="main-plan-container">
          <div className="plan-container">
              <div className="header">
                  <img src="https://eci.dc.uba.ar/wp-content/uploads/2022/05/Logo-MercadoLibre-.png" alt="Logo Mercado Libre" />
                  <h2>¡Encendé tus ventas en Mercado Libre!</h2>
              </div>
              <div className="switch">
                  <button id="monthly" onClick={() => togglePayment('monthly')} className={paymentType === 'monthly' ? 'active' : ''}>Pago mensual</button>
                  <button id="annual" onClick={() => togglePayment('annual')} className={paymentType === 'annual' ? 'active' : ''}>Pago anual</button>
                  <div className={`slider ${paymentType}`}></div>
                  <div className="discount-tag">20% OFF</div>
              </div>
              <table>
                  <tr><td>Ventas/mes</td><td>{paymentType === 'monthly' ? 'Precio Mensual' : 'Precio Anual'}</td></tr>
                  {Object.entries(prices).map(([range, price]) => (
                      <tr key={range}>
                          <td>{range}</td>
                          <td>
                              {paymentType === 'monthly' ? `$${formatPrice(price)}/mes` : `$${calculateAnnualPrice(price)}/año`}
                          </td>
                      </tr>
                  ))}
              </table>
              <p className="disclaimer">Los precios están expresados en pesos argentinos y no incluyen IVA.</p>
              <div className="footer">
                  <img src="https://1000marcas.net/wp-content/uploads/2023/01/Mercado-Pago-Logo.png" alt="Logo Mercado Pago" />
              </div>
          </div>
      </div>
  );
};

export default PlanesPage;

