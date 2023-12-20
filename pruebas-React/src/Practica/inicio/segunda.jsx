import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Card = ({ href, imageSrc, imageAlt, title, description }) => {
  const handleClick = () => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Box className="card" onClick={handleClick} cursor="pointer">
      <VStack spacing={4}>
        <Box className="card-title">
          <Image src={imageSrc} alt={imageAlt} />
          <Text fontSize="xl" fontWeight="bold">{title}</Text>
        </Box>
        <Text>{description}</Text>
      </VStack>
    </Box>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const CardsSection = () => {
    return (
      <section id="cards-4">
        <Card
          href="#post-sale-card"
          imageSrc="/wp-content/uploads/2023/11/SmartSelling-brillo.png"
          imageAlt="Logo 1"
          title="Chatbot post-venta"
          description="Resuelve problemas y brinda asistencia posventa de manera eficiente."
        />
        <Card
          href="#pre-sale-card"
          imageSrc="/wp-content/uploads/2023/11/OpenAI-brillo.png"
          imageAlt="Logo 2"
          title="Pre-venta con GPT"
          description="Ofrece recomendaciones de productos personalizadas y responde consultas de los clientes antes de comprar."
        />
        <Card
          href="#quick-response-card"
          imageSrc="/wp-content/uploads/2023/11/Campana-brillo.png"
          imageAlt="Logo 3"
          title="Mensajes automáticos"
          description="Mantén a los clientes informados sobre el estado de sus pedidos de forma proactiva."
        />
        <Card
          href="#dashboard-card"
          imageSrc="/wp-content/uploads/2023/11/Metricas-brillo.png"
          imageAlt="Logo 4"
          title="Análisis integral"
          description="Obtén información valiosa sobre el comportamiento del cliente y optimiza tus estrategias de atención al cliente y marketing."
        />
      </section>
    );
  };
  
  export default CardsSection;
