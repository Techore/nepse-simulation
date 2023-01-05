import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import BoxForm from './components/Outline';
import LoginForm from './components/Login';
import "./index.css";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#f9f9f9",
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BoxForm />
    </ChakraProvider>
  );
};

export default App;
