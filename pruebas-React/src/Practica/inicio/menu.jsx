import React from 'react';

const Navbar = () => {
    const scrollToSection = (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <ul className="menu">
                <li className="con-flecha">
                    <a href="#imagenSecundaria" className="scroll-to-section" onClick={scrollToSection}>Chatbot</a>
                </li>
                <li className="con-flecha">
                    <a href="#imagen1" className="scroll-to-section" onClick={scrollToSection}>Inteligencia artificial</a>
                </li>
                <li className="con-flecha">
                    <a href="#" onClick={scrollToSection}>Respuestas automáticas</a>
                </li>
                <li>
                    <a href="#">Precios</a>
                </li>
            </ul>
            <ul className="menu-right">
                <li><a href="https://smartselling.com.ar/register/">Registrarse</a></li>
                <li><a href="https://smartselling.com.ar/login/" id="btn-login">Iniciar Sesión</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
