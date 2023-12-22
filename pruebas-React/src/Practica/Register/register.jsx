import React, { useState } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Flex, Circle, Text } from '@chakra-ui/react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './components/Step1.scss';
import './components/Step2.scss';
import './components/Step3.scss';
import './register.scss';

const StepIndicator = ({ steps, currentStep }) => {
  return (
    <Flex justifyContent="center" mb={4}>
      {steps.map((_, index) => (
        <Circle
          key={index}
          size="40px" // Aumenta el tamaño aquí
          bg={currentStep === index ? "#e81cff" : "gray.700"}
          color="white"
          mx={2}
        >
          {index + 1}
        </Circle>
      ))}
    </Flex>
  );
};

function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Paso 1", "Paso 2", "Paso 3"];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <div className="login-box">
      <Box p={4}>
        <StepIndicator steps={steps} currentStep={activeStep} />

        <Tabs index={activeStep} isManual onChange={(index) => setActiveStep(index)}>

          <TabPanels>
            <TabPanel>
              <h3>1. CREA UNA CUENTA DE SMARTSELLING</h3>
              <Step1 />
            </TabPanel>
            <TabPanel>
              <h3>2. CREA UNA CONTRASEÑA</h3>
              <Step2 />
            </TabPanel>
            <TabPanel>
              <h3>3. AUTORIZACIÓN SOBRE MERCADO LIBRE</h3>
              <h3>Te pedimos ingresar con tu cuenta de Mercado Libre y autorizar a Nubimetrics para analizar tus datos de negocio.</h3>
              <Step3 />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Flex mt={4} justifyContent="space-between">
          <Button onClick={handleBack} isDisabled={activeStep === 0}>Atrás</Button>
          <Button onClick={handleNext} isDisabled={activeStep === steps.length - 1}>Siguiente</Button>
        </Flex>
      </Box>
    </div>
  );
}

export default Register;
