import React from 'react';
import ReactDOM from 'react-dom';

const Die = (props) => {
  return props.die === 'Qu' ? (
      <div id="qu" className="die white" onClick={props.handleSelect} data-pos={props.pos}>
        {props.die}
      </div>
    ) : (
        <div className="die white" onClick={props.handleSelect} data-pos={props.pos}>
          {props.die}
        </div>
      )
};

export default Die;
