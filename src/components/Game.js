import React, { useState } from 'react';
import { Lines } from './Lines';
import { Answers } from './Answers';

export const Game = (props) => {
  const [answer, setAnswer] = useState({ redDistance: '?', blueDistance: 0 });
  const getAnswer = (redDistance, blueDistance) => {
    setAnswer({ redDistance: redDistance, blueDistance: blueDistance });
  };
  return (
    <div id='game-box'>
      <input type='number'></input>
      <button onClick={props.onSubmit}>Guess</button>
      <Answers
        redDistance={answer.redDistance}
        blueDistance={answer.blueDistance}
      />
      <Lines getAnswers={getAnswer} />
    </div>
  );
};
