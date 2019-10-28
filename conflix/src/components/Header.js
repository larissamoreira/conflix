import { Title, HeaderStyle, Subtitle } from './styles'
import { Nav, LinkStyle, LinkTitle } from '../pages/styles';
import React from 'react'
import isAuthenticated from '../services/authHelper';

const userId = '5db6fb318f0df0195d352e8e';

export const Header = () => (
    <HeaderStyle>
        <Title><LinkTitle href={'/'}>Conflix Casting</LinkTitle></Title>
        <Subtitle>CASTING CALL FOR 2018/2019</Subtitle>
        {isAuthenticated ?
            <Nav>
                <LinkStyle href={`/movies/${userId}`}>My movies</LinkStyle>
            </Nav>
            : ' '
        }

    </HeaderStyle>
)
