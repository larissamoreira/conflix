import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Applicant from './pages/applicant';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/applicants/:id' component={Applicant} />
        </Switch>
    </BrowserRouter>
)

export default Routes;