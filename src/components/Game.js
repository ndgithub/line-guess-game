import React, { useState } from 'react'
import { Lines } from './Lines';

export const Game = (props) => {
    return (
        <><input type="number"></input>
            <button onClick={props.onSubmit}>Guess</button>
            < Lines />
        </>)
}
