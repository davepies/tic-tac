import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming';

import { theme, globalStyles } from './common/theme';

import Game from './components/Game';

const Welcome = () => <h1>Welcome</h1>;
const GameEntry = () => <Link to="/intro">Bored?</Link>

const Intro = () => <>
  <p>Some info here <Link to="/game">Ready!</Link></p>
  <select>
    <option>1 player</option>
    <option>2 players</option>
  </select>
  <Link to="/game/2">Ready!</Link>
</>;

const App = () => (
  <>
    <Global
      styles={globalStyles}
    />
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Welcome />
          <Route path="/" exact component={GameEntry} />
          <Route path="/intro" component={Intro} />
          <Route path="/game/:players" component={Game} />
        </>
      </Router>
    </ThemeProvider>
  </>
);

export default App;