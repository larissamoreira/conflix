import { Title, HeaderStyle } from './styles'
import { Nav, LinkStyle } from '../pages/styles';
import React from 'react'
import isAuthenticated from '../services/authHelper';

const userId = '5d891f7b2499030680c826b5';

export const Header = () => (
    <HeaderStyle>
        <Title>Conflix Casting</Title>
        {isAuthenticated ?
            <Nav>
                <LinkStyle href={`/create/${userId}`}>create movie</LinkStyle>
                <LinkStyle href={`/movies/${userId}`}>my movies</LinkStyle>
            </Nav>
            : ' '
        }

    </HeaderStyle>
)
