import React from 'react';
import ReactDOM from 'react-dom';

const ScoreRow = (props) => (
  <div className="row">
    <div className="word white padded">
        {props.word}
    </div>
    <div className="score white padded">
        {props.score}
    </div>
  </div>
)


export default ScoreRow;
