import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import ApplicantDetail from './pages/ApplicantDetail';
import ListApplicants from './pages/ListApplicants';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/applicants' component={ListApplicants} />
            <Route path='/applicants/:id' component={ApplicantDetail} />
        </Switch>
    </BrowserRouter>
)

export default Routes;