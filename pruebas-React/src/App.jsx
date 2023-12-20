import React from 'react';
import Register from './Practica/Register/register';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Configura el tema personalizado si es necesario
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div className="App">
        {/* Aquí puedes renderizar tu componente de registro */}
        <Register />
      </div>
    </ChakraProvider>
  );
}

export default App;
