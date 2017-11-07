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
      dice: generateDice(),
      cw: '',
      scores: [],
      total: 0,
      selected: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  calcPoints(word) {
    if (word.length <= 2) {
      return 0;
    } else if (word.length <= 4) {
      return 1;
    } else if (word.length <= 5) {
      return 2;
    } else if (word.length <= 6) {
      return 3;
    } else if (word.length <= 7) {
      return 5;
    } else {
      return 11;
    }
  }

  addScore() {
    let scores = this.state.scores.slice();
    let points = this.calcPoints(this.state.cw);
    if (this.state.cw.length && !this.isSubmitted(scores, this.state.cw)) {
      scores.push([this.state.cw, points]);
      this.setState({
        scores: scores,
        total: this.state.total + points
      });
    }
  }

  isSubmitted(scores, cw) {
    for (let i = 0; i < scores.length; i++) {
      if (scores[i][0] === cw) {
        return true;
      }
    }
    return false
  }

  resetSelected() {
    let selectedDice = document.getElementsByClassName('selected');
    Array.from(selectedDice).forEach(die => {
      selectedDice[0].className = 'die white';
    });

    this.setState({
      cw: '',
      selected: []
    })
  }

  toggleDie(e, letter, selected, prev, coord, isOneSpaceAway, isPrev) {
    if (isNaN(prev[0]) || (isOneSpaceAway && !isPrev && e.target.className.split(' ')[1] === 'white')) {
      selected.push(coord);
      this.setState({
        cw: this.state.cw + letter,
        selected: selected
      });
      e.target.className = 'die babyblue selected';
    } else if (isPrev) {
      if (selected.pop()[2] === 'QU') {
        this.setState({
          cw: this.state.cw.substring(0 , this.state.cw.length - 2),
          selected: selected
        });
      } else {
        this.setState({
          cw: this.state.cw.substring(0 , this.state.cw.length - 1),
          selected: selected
        });
      }
      e.target.className = 'die white';
    }
  }


  handleSubmit() {
    this.addScore();
    this.resetSelected();
  }

  handleSelect(e) {
    let letter = e.target.innerHTML === 'Qu' ? 'QU' : e.target.innerHTML;
    let selected = this.state.selected.slice();
    let prev = selected[selected.length - 1] || [NaN, NaN, ''];
    let coord = [parseInt(e.target.dataset.pos[0]), parseInt(e.target.dataset.pos[1]), letter];
    let isOneSpaceAway = coord[0] <= prev[0] + 1 && coord[0] >= prev[0] - 1 && coord[1] <= prev[1] + 1 && coord[1] >= prev[1] - 1;
    let isPrev = coord[0] === prev[0] && coord[1] === prev[1];

    this.toggleDie(e, letter, selected, prev, coord, isOneSpaceAway, isPrev);
  }

  render () {
    return (
      <div id="container">
        <div id="logo">
          <img src="logo.png" />
        </div>
        <div id="interface">
          <Board dice={this.state.dice} handleSelect={this.handleSelect} />
          <Input cw={this.state.cw} handleSubmit={this.handleSubmit} />
          <Scoreboard total={this.state.total} scores={this.state.scores} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
