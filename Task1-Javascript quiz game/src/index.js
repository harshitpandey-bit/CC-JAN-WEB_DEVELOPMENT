import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuizHolder from './Context/QuizHolder';
import { ChakraProvider } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizHolder>
       <ChakraProvider>
      <App />
      </ChakraProvider>

    </QuizHolder>
  </React.StrictMode>
);
