import React from 'react';
import Checkbox from './Checkbox';

const Filter = props => (
    <React.Fragment>
        <input defaultChecked type="radio" value="All" name="gender" onChange={props.handleChange} /> All
        <input type="radio" value="Male" name="gender" onChange={props.handleChange} /> Male
        <input type="radio" value="Female" name="gender" onChange={props.handleChange} /> Female

        <div>
            {
                props.interests.map((production) => {
                    return (
                        <Checkbox handleClick={props.handleCheck} {...production} />
                    )
                })
            }
        </div>
    </React.Fragment >
)

export default Filter;