import React from 'react';
import ReactDOM from 'react-dom';
import Die from './die.js';

const DiceRow = (props) => (
  <div className="dice-row">
    {props.dice.map((die, idx) => (
      <Die die={die} pos={`${props.idx}${idx}`} handleSelect={props.handleSelect} key={idx} />
      )
    )}
  </div>
)

export default DiceRow;
