import { Title, HeaderStyle, Subtitle } from './styles'
import { Nav, LinkStyle } from '../pages/styles';
import React from 'react'
import isAuthenticated from '../services/authHelper';

const userId = '5d891f7b2499030680c826b5';

export const Header = () => (
    <HeaderStyle>
        <Title>Conflix Casting</Title>
        <Subtitle>CASTING CALL FOR 2018/2019</Subtitle>
        {isAuthenticated ?
            <Nav>
                <LinkStyle href={`/create/${userId}`}>Create movie</LinkStyle>
                <LinkStyle href={`/movies/${userId}`}>My movies</LinkStyle>
            </Nav>
            : ' '
        }

    </HeaderStyle>
)
