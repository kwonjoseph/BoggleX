import React from 'react';
import ReactDOM from 'react-dom';

const TotalRow = (props) => (
  <div className="row">
    <div className="word babyblue padded">
        Total:
    </div>
    <div className="score babyblue padded">
        {props.total}
    </div>
  </div>
)


export default TotalRow;
