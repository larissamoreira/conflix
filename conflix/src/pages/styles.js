import styled, { css } from 'styled-components';

export const Nav = styled.nav`
    justify-content: center;
    display: flex;
`

export const LinkStyle = styled.a`
    color: white;
    font-size: 15px;
    padding: 20px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }

    ${props => props.primary && css`
        color: blueviolet;
        padding: 0;
    `}
`

export const LinkTitle = styled.a`
    color: #fea04f;
    text-decoration: none;
`

export const List = styled.div`
    display: flex;
    min-height: 700px;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`

export const ListDetail = styled.div`
    background: #0000008a;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 330px;
    padding: 10px;
    margin: auto;
    border-radius: 20px;
`

export const MovieDetail = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid mediumpurple;
`

export const Ul = styled.ul`
    padding: 0;
    list-style: none;
`

export const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    width: 20%;
`

export const Th = styled.th`
    padding: 14px 17px;
    background: mediumpurple;
    color: white;
`

export const Table = styled.table`
    text-align: left;
    border-collapse: collapse;
    width: 90%;
    margin: 0 auto;
`