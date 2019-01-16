import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Game from './Game';

const GlobalStyle = createGlobalStyle`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
`;

const App = () => (
    <>
        <GlobalStyle />
        <Game />
    </>
);

export default App;