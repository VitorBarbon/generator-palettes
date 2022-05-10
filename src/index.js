import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { FormProvider } from './context/FormContext';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/global-style';
import { theme } from './styles/theme';
import Home from './template/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>,
);

reportWebVitals();
