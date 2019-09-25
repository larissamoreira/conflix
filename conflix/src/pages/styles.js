import styled, { css } from 'styled-components';

export const Nav = styled.nav`
    justify-content: center;
    display: flex;
    // color: white;
`

export const LinkStyle = styled.a`
    // color: white;
    font-size: 15px;
    padding: 20px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

export const ListDetail = styled.div`
    background: #d7b6ff;
    width: 400px;
    height: 330px;
    padding: 10px;
    margin: auto;
    border-radius: 20px;
`