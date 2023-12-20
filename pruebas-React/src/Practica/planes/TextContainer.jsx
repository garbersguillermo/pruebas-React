// TextContainer.jsx
import React from 'react';
import './TextContainer.scss'; // Asegúrate de tener un archivo CSS correspondiente

const TextContainer = () => {
    return (
        <div className="text-container">
            <span>🚀 Impulsa tu éxito en MercadoLibre con</span>
            <div className="changing-text">
                <span className="active">negocio</span>
            </div>
            <span>Estudios de mercado confirman que al NO contestar dentro del primer minuto tu posibilidad de conversión disminuye un 80%.</span>
            <a href="https://smartselling.com.ar/register">
                <button>Comenzar prueba gratuita</button>
            </a>
        </div>
    );
};

export default TextContainer;
