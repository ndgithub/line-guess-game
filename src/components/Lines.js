import React, { useEffect, useRef } from 'react'

export const Lines = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        useEffect(() => {
            console.log('height: ', ref.current.clientHeight);
            console.log('width: ', ref.current.clientWidth);
        }, []);

    });

    return (
        <div>Lines</div>
    )
}
