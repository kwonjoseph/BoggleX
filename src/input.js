import React from 'react';
import ReactDOM from 'react-dom';

const Input = (props) => (
  <div id="input">
    <b>
      Current Word:
    </b> {props.cw}
    <button id="submitter" onClick={props.handleSubmit}>
      Submit Word
    </button>
  </div>
)

export default Input;
