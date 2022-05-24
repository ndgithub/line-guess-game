import React from 'react'

export const Welcome = (props) => {
    return (<>
        <div>Can you guess the length of the blue line?</div>
        <button onClick={props.onStart}>START</button>
    </>)
}
