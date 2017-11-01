import React from 'react';
import ReactDOM from 'react-dom';
import Die from './die.js';

const DiceRow = (props) => (
  <div className="dice-row">
    {props.dice.map((die, idx) => (
      <Die die={die} key={idx} />
      )
    )}
  </div>
)

export default DiceRow;
