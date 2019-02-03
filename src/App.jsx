import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming';

import { theme, globalStyles } from './common/theme';

import Game from './components/Game';

const Welcome = () => <h1>Welcome</h1>;
const GameEntry = () => <Link to="/intro">Bored?</Link>

class Intro extends React.Component {
  state = {
    playersCount: 1
  };

  handleSelect(option) {
    debugger;
    this.setState({
      playersCount: option
    })
  }
  render() {
    const { playersCount } = this.state;
    return (
      <>
        <p>Some info here <Link to="/game">Ready!</Link></p>
        <select onChange={(e) => this.handleSelect(e.target.value)}>
          <option value="1" selected>1 player</option>
          <option value="2">2 players</option>
        </select>
        <Link to={`/game/${playersCount}`}>Ready!</Link>
      </>
    );
  }
}
const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Global
        styles={globalStyles}
      />
      <Router>
        <>
          <Welcome />
          <Route path="/" exact component={GameEntry} />
          <Route path="/intro" component={Intro} />
          <Route path="/game/:players" render={(props) => (
            <Game numberOfPlayers={props.match.params.players} />
          )} />
        </>
      </Router>
    </ThemeProvider>
  </>
);

export default App;