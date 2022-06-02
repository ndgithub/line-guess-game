import React, { useEffect, useRef, useState } from 'react';

export const Lines = (props) => {
  const myRef = useRef();

  //lines object 4-point object
  const [lines, setLines] = useState({
    line1: { x1: 0, y1: 0, x2: 0, y2: 0 },
    line2: { x1: 0, y1: 0, x2: 0, y2: 0 },
  });

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    console.log(
      `Client Width: ${myRef.current.clientWidth}, Client Height: ${myRef.current.clientHeight}`
    );
    console.log(myRef.current.offsetWidth, myRef.current.offsetHeight);

    let line1 = makeLine(myRef.current.offsetWidth, myRef.current.offsetHeight);
    let line2 = makeLine(myRef.current.offsetWidth, myRef.current.offsetHeight);

    console.log(`red: ${line1.distance}, blue: ${line2.distance}`);
    props.getAnswers(line1.distance, line2.distance);
    setLines({ line1, line2 });
  };

  const makeLine = (width, height) => {
    let x1 = Math.floor(Math.random() * width);
    let y1 = Math.floor(Math.random() * height);
    let x2 = Math.floor(Math.random() * width);
    let y2 = Math.floor(Math.random() * height);
    let distance = getDistance({ x1, y1, x2, y2 });
    console.log(distance);
    return { x1, y1, x2, y2, distance };
  };

  const getDistance = ({ x1, y1, x2, y2 }) => {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);

    let aSqrd = (x2 - x1) * (x2 - x1);
    let bSqrd = (y2 - y1) * (y2 - y1);
    let cSqrd = aSqrd + bSqrd;
    let c = Math.floor(Math.sqrt(cSqrd));

    return c;
  };

  return (
    <div id='line-box' height='100%' width='100%' ref={myRef}>
      <button onClick={refresh} id='refresh'>
        Refresh
      </button>
      <svg height='100%' width='100%'>
        <line
          x1={lines.line1.x1}
          y1={lines.line1.y1}
          x2={lines.line1.x2}
          y2={lines.line1.y2}
          style={{ stroke: 'red', strokeWidth: 4 }}
        />
        <line
          x1={lines.line2.x1}
          y1={lines.line2.y1}
          x2={lines.line2.x2}
          y2={lines.line2.y2}
          style={{ stroke: 'blue', strokeWidth: 4 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};
