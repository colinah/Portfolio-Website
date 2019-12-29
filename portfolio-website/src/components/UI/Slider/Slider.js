import React from 'react';

const slider = (props) => {
    return(
        <div>
            <input type="range" min={props.min} max={props.max} name={props.name}/>
        </div>
    )
}

export default slider