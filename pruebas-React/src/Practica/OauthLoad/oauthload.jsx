import React, { useEffect } from 'react';
import './status-tree.scss'; // Importando los estilos SASS

const Oauthload = () => {
    useEffect(() => {
        // Aquí movemos la lógica para capturar los parámetros y hacer la petición AJAX
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (window.history && window.history.replaceState) {
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        }

        // Aquí puedes reemplazar con tu propia lógica de petición, posiblemente usando fetch o axios
        fetch('tu_endpoint_de_API', {
            method: 'POST',
            body: JSON.stringify({ code, state }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.replace("https://smartselling.com.ar/dashboard");
        });
    }, []);

    return (
        <div className="container">
            <span className="text">SMARTSELLING</span>
        </div>
    );
};

export default Oauthload;
