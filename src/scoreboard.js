import React from 'react';
import ReactDOM from 'react-dom';
import ScoreRow from './scorerow.js';
import TotalRow from './totalrow.js';

const Scoreboard = (props) => (
  <div id="scoreboard">
    <b>
      <ScoreRow word={'Word'} score={'Score'} />
    </b>
    {props.scores.map((score, idx) => (
      <ScoreRow word={score[0]} score={score[1]} key={idx} />
      )
    )}
    <b>
      <TotalRow total={props.total} />
    </b>
  </div>
)

export default Scoreboard;
