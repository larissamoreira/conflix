import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: grey;
    padding: 30px;
    border-radius: 20px;
    max-width: 600px;
    margin: 0 auto; 
`

export const Title = styled.h1`
    color: tomato;
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

    ${props => props.disabled && css`
    background: gray;
    border: none; 
    cursor: default;
    `
}
    `;

export const Form = styled.form`
    display: flex;
    height: 600px;
    flex-flow: column wrap;
    justify-content: space-around;
    
    @media(max-width: 768px) {
        width: 100%;
    }
    `;

export const Input = styled.input`
    padding: 0.5em;
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

export const WrapperInput = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export const WrapperInputRadio = styled(WrapperInput)`
    width: 30%;
`