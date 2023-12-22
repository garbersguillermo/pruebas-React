import React from 'react';
import { Button } from '@chakra-ui/react';
import './Step3.scss';

export default function Step3() {
    // Estilos en línea para el botón
    const buttonStyle = {
      backgroundImage: 'url(https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png)',
      backgroundSize: 'auto 43px', // Asegura que la imagen cubra todo el botón
      backgroundPosition: 'center', // Centra la imagen en el botón
      backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
      backgroundColor: '#FFCC00', // Establece el color de fondo a amarillo
      padding: '10px', // Agrega relleno para que la imagen no toque los bordes
      height: '70px', // Ajusta esto según el tamaño deseado del botón
      width: '200px', // Ajusta esto según el tamaño deseado del botón
      // Agrega aquí más propiedades de estilo si las necesitas
  };
  
  const hoverStyle = {
    ...baseStyle,
    // Aquí puedes agregar los cambios que desees, como un cambio en la sombra, borde, etc.
    transform: 'scale(1.05)', // Ejemplo: un ligero aumento de tamaño
    transition: 'transform 0.3s', // Suaviza la transición del efecto
};
return (
  <div>
      <Button 
          style={isHovered ? hoverStyle : baseStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
          {/* Texto del botón */}
      </Button>
  </div>
);
}