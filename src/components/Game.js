import React, { useState } from 'react';
import { Lines } from './Lines';

export const Game = (props) => {
  return (
    <div id='game-box'>
      <input type='number'></input>
      <button onClick={props.onSubmit}>Guess</button>
      <Lines />
    </div>
  );
};
