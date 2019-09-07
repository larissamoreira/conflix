import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    border-radius: 20px;
    max-width: 90%;
    margin: 0 auto; 

    @media(max-width: 768px) {
        max-width: 100%;
    }
`

export const Title = styled.h1`
    color: #fa9f4f;
    text-align: center;
`

export const Button = styled.button`
    width: 10em;
    font-size: 15px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #fa9f4f;
    color: white;
    margin: 0.1em;
    padding: 0.25em 1em;
    cursor: pointer;

    ${props => props.primary && css`
        background: #fa9f4f; 
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
    color: white;
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
    background: #663399;
    color: white;
    border: none;
    &::placeholder {
        color: white;
        font-family: monospace;
    }
    &::focus {
        outline: none;
    }
    `;

export const WrapperInput = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media(max-width: 768px) {
        flex-flow: column wrap;
        height: 100px;
    }

    & ${Input} {
        @media(min-width: 768px) {
            width: 32%;
        }
    }
`

export const WrapperInputRadio = styled(WrapperInput)`
    width: 30%;
    @media(max-width: 768px) {
        flex-flow: column wrap;
        height: 20px;    
    }
`