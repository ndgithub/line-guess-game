import React, { useEffect, useRef, useState } from 'react';

export const Lines = (props) => {
  const ref = useRef();

  const [lines, setLines] = useState({});

  const [points1, setPoints1] = useState('0,0 0,0');
  const [points2, setPoints2] = useState('0,0 0,0');

  let line1;
  let line2;

  const makeLine = (width, height) => {
    return {
      x1: Math.floor(Math.random() * width),
      y1: Math.floor(Math.random() * height),
      x2: Math.floor(Math.random() * width),
      y2: Math.floor(Math.random() * height),
    };
  };

  useEffect(() => {
    line1 = makeLine(ref.current.clientWidth, ref.current.clientHeight);
    line2 = makeLine(ref.current.clientWidth, ref.current.clientHeight);
    setLines({ line1, line2 });
    console.log(toPoints(line1));
    setPoints1(toPoints(line1));
    setPoints2(toPoints(line2));
  }, []);
  const getLength = (lineObj) => {};
  const toPoints = (lineObj) =>
    `${lineObj.x1},${lineObj.y1} ${lineObj.x2},${lineObj.y2}`;

  return (
    <div id='line-box' ref={ref}>
      <svg height='600' width='500'>
        <polyline
          points={points1}
          style={{ fill: 'none', stroke: 'black', strokeWidth: 3 }}
        />
        <polyline
          points={points2}
          style={{ fill: 'none', stroke: 'black', strokeWidth: 3 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};
