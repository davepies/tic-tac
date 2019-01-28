import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Game from './components/Game';

import theme from './common/theme';

const GlobalStyle = createGlobalStyle`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Game />
    </>
  </ThemeProvider>
);

export default App;