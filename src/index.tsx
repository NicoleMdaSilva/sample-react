import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#aa00ff',
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
