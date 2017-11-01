import React from 'react';
import ReactDOM from 'react-dom';

const Die = (props) => {
  return props.die === 'Qu' ? (
      <div className="qu die white">
        {props.die}
      </div>
    ) : (
        <div className="die white">
          {props.die}
        </div>
    )
}

export default Die;
