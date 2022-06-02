import React from 'react';

export const Answers = (props) => {
  return (
    <div>
      <div className='red-text'>Red: {props.redDistance}</div>
      <div className='blue-text'>Blue: {props.blueDistance}</div>
    </div>
  );
};
