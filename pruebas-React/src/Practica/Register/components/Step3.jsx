import React from 'react';
import { Button } from '@chakra-ui/react';
import './Step3.scss';

export default function Step3() {
    const imageUrl = "https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png"; // Reemplaza con tu URL de imagen

    return (
    <div>
      <Button
        bgImage={`url(${imageUrl})`}
        bgSize="cover" // Asegura que la imagen cubra todo el botón
        bgPosition="center" // Centra la imagen en el botón
        bgRepeat="no-repeat"
        height="100px" // Ajusta el alto del botón
        width="200px" // Ajusta el ancho del botón
        // Agrega estilos adicionales si lo necesitas
      >
        {/* Texto transparente o vacío si no necesitas texto */}
      </Button>
    </div>

    );
  }