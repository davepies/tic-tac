import React from 'react';

import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming';

import Game from './components/Game';

import theme from './common/theme';

const globalStyle = css`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
`;

const App = () => (
  <>
    <Global
      styles={globalStyle}
    />
    <ThemeProvider theme={theme}>
        <Game />
    </ThemeProvider>
  </>
);

export default App;