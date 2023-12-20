import React, { useState, useEffect } from 'react';

const words = ["eficiencia", "innovación", "rapidez", "inteligencia", "estrategia", "resultados"];
const horizontalPadding = 20;

const Inicio = () => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const changeWord = () => {
            const newIndex = (wordIndex + 1) % words.length;
            setWordIndex(newIndex);
            setCurrentWord(words[newIndex]);
        };

        const wordInterval = setInterval(changeWord, 2000);

        // Tawk.to Script
        const tawkScript = document.createElement("script");
        tawkScript.async = true;
        tawkScript.src = 'https://embed.tawk.to/6539c69aa84dd54dc4854434/1hg3ei45k';
        tawkScript.charset = 'UTF-8';
        tawkScript.setAttribute('crossorigin', '*');
        document.body.appendChild(tawkScript);

        // Parallax Effect
        const updateBackground = () => {
            const parallaxSpeed = 0.5;
            document.body.style.backgroundPositionY = -(window.pageYOffset * parallaxSpeed) + 'px';
        };
        window.addEventListener('scroll', updateBackground);

        return () => {
            clearInterval(wordInterval);
            window.removeEventListener('scroll', updateBackground);
        };
    }, [wordIndex]);

    return (
        <section id="inicio">
            <img src="/wp-content/uploads/2023/11/inicio-background.jpg" alt="Inicio Background" />
            <div>
                <div className="text-container">
                    <span>Impulsa tu éxito en MercadoLibre con</span>
                    <div className="changing-text">
                        <span className="active">{currentWord}</span>
                    </div>
                    <span>La única herramienta para automatizar tus comunicaciones de MercadoLibre.</span>
                </div>
                <a href="https://smartselling.com.ar/register">
                    <button>Comenzar prueba gratuita</button>
                </a>
                <div className="logo-container">
                    <img src="/wp-content/uploads/2023/11/1.png" alt="Logo 2" className="logo" />
                </div>
            </div>
        </section>
    );
};

export default Inicio;
