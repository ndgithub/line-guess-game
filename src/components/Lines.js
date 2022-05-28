import React, { useEffect, useRef, useState } from 'react';

export const Lines = (props) => {
  const myRef = useRef();

  //lines object 4-point object
  const [lines, setLines] = useState({
    line1: { x1: 0, y1: 0, x2: 0, y2: 0 },
    line2: { x1: 0, y1: 0, x2: 0, y2: 0 },
  });

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
    refresh();
  }, []);
  const getLength = (lineObj) => {
    // console.log(lineObj.x2);
    // console.log(parseInt(lineObj.x2));
    // console.log(parseInt(lineObj.x2) - parseInt(lineObj.x1));
    let aSqrd = parseInt(Math.pow(parseInt(lineObj.x2) - parseInt(lineObj.x1)));
    let bSqrd = Math.pow(parseInt(lineObj.y2) - parseInt(lineObj.y1));
    let cSqrd = aSqrd + bSqrd;
    return Math.sqrt(cSqrd);
  };
  const toPoints = (lineObj) =>
    `${lineObj.x1},${lineObj.y1} ${lineObj.x2},${lineObj.y2}`;

  const refresh = () => {
    console.log(myRef.current.clientWidth, myRef.current.clientHeight);
    line1 = makeLine(myRef.current.clientWidth, myRef.current.clientHeight);
    line2 = makeLine(myRef.current.clientWidth, myRef.current.clientHeight);
    // for (let i = 0; i < 10; i++) {
    //   console.log(
    //     makeLine(myRef.current.clientWidth, myRef.current.clientHeight)
    //   );
    // }
    setLines({ line1, line2 });
  };

  return (
    <div id='line-box' ref={myRef}>
      <button onClick={refresh} id='refresh'>
        Refresh
      </button>
      <svg height='95%' width='95%'>
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
          style={{ stroke: 'black', strokeWidth: 4 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
};
