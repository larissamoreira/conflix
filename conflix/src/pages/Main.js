import React from 'react';
import FormApplicant from '../components/FormApllicant';
import { Title } from '../components/styles';
import { Nav, LinkStyle } from './styles';
import { Link } from 'react-router-dom'

const userId = '5d891f7b2499030680c826b5';

const Main = () => (
    
    <React.Fragment>
        <Title>Conflix Casting</Title>
        <Nav>
            <Link to={`/create/${userId}`}>Create movie</Link>
            <Link to={`/movies/${userId}`}>My movies</Link>
        </Nav>
        <FormApplicant />
    </React.Fragment>
)

export default Main;