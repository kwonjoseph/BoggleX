import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js';
import Input from './input.js';
import Scoreboard from './scoreboard.js';
import generateDice from './generate.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cw: '',
      total: 0,
      scores: [],
      dice: generateDice()
    }
  }

  render () {
    return (
      <div id="container">
        <div id="logo">
          <img src="logo.png" />
        </div>
        <div id="interface">
          <Board dice={this.state.dice} />
          <Input cw={this.state.cw} />
          <Scoreboard total={this.state.total} scores={this.state.scores} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
