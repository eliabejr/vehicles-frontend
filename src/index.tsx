
import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { LocationProvider } from '@reach/router'
import theme from '@/theme/theme';

import App from './app'

function renderApp() {
  return (
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <LocationProvider>
          <App />
        </LocationProvider>
      </React.StrictMode>
    </ChakraProvider>
  );
}

ReactDOM.render(renderApp(), document.getElementById('infosis-front'))
