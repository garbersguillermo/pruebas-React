import React from 'react';
import Register from './Practica/Register/register';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import StatusTree from './Practica/status-tree/Status-Tree';
import './Practica/status-tree/status-tree.scss'



const theme = extendTheme({
  // Configura el tema personalizado si es necesario
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div className="App">
         <Register /> 
       {/*  <StatusTree /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
