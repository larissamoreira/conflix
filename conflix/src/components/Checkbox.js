import React from 'react';
import styled from 'styled-components';

const InputCheckbox = styled.input``

const Span = styled.span``

const Label = styled.label` 
    & ${InputCheckbox}:checked + ${Span} {
        text-decoration: line-through;
        text-decoration-color: #fa9f4f;
        text-decoration-style: solid;
        font-style: italic;
    }`

const Checkbox = props => (
    <Label>
        <InputCheckbox
            id="input"
            type='checkbox'
            onClick={props.handleClick}
            {...props} />
        <Span>{props.value}</Span>
    </Label>
)

export default Checkbox;