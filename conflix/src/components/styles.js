import styled, { css } from 'styled-components';


export const Title = styled.h1`
    color: white;
    text-align: center;
`

export const Button = styled.button`
    width: 10em;
    font-size: 15px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid tomato;
    color: white;
    margin: 0.1em;
    padding: 0.25em 1em;
    cursor: pointer;

    ${props => props.primary && css`
        background: tomato; 
        color: white;
    `}
    `;

export const Form = styled.form`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    

    @media(max-width: 768px) {
        width: 100%;
    }
    `;

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: antiquewhite;
    color: darkslategray;
    border: none;
    border-radius: 3px;
    &::placeholder {
        color: darkslategray;
        text-transform: uppercase;
    }
    &::focus {
        outline: none;
    }
    `;