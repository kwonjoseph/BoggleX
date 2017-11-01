import React from 'react';
import ReactDOM from 'react-dom';
import DiceRow from './dicerow.js';

const Board = (props) => (
  <div id="board">
    <b>
      {props.dice.map((diceRow, idx) => (
        <DiceRow dice={diceRow} key={idx} />
        )
      )}
    </b>
  </div>
)


export default Board;
