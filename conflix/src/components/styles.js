import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    border-radius: 20px;
    max-width: 950px;
    margin: 0 auto;
    padding: 10px;

    @media(max-width: 768px) {
        max-width: 100%;
    }
`

export const HeaderStyle = styled.header`
    background: #313137;
    height: 150px;
`

export const Title = styled.h1`
    color: #fa9f4f;
    margin: 0;
    padding: 20px;
    text-align: center;
`

export const Subtitle = styled.h3`
    margin: 0;
    color: #c7ad96;
    text-align: center;
`

export const Button = styled.button`
    width: 10em;
    font-size: 15px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #fa9f4f;
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
    margin: 0 auto;
    width: 60%;
    font-size: 12px;
    display: flex;
    height: 800px;
    flex-flow: column wrap;
    justify-content: space-around;
    
    @media(max-width: 768px) {
        width: 100%;
    }
    `;

export const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1.6px solid #ad86d5;

    &:focus {
        outline: none;
    }
    }
    `;

export const Label = styled.label`
    padding: 5px 0;
` 

export const TextArea = styled(Input)`
    
`

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
    width: 20%;
    @media(max-width: 768px) {
        flex-flow: column wrap;
        height: 20px;    
    }
`