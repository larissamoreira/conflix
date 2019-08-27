import React from 'react';

const Checkbox = props => (
    <div>
        <input
            type='checkbox'
            onClick={props.handleClick}
            {...props}
        /> {props.value}
    </div>
)

export default Checkbox;