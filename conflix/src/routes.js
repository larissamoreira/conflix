import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import ListApplicants from './pages/ListApplicants';
import FormMovie from './components/FormMovie';
import ListMovies from './pages/ListMovies'
import ApplicantDetail from './pages/ApplicantDetail';
import SignUp from './pages/SignUp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/signup' component={SignUp} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/applicants/:movieId' component={ListApplicants} />
            {/* <Route path='/applicants/:applicantId' component={ApplicantDetail} /> */}
            <Route path='/create/:userId' component={FormMovie} />
            <Route path='/movies/:userId' component={ListMovies} />
        </Switch>
    </BrowserRouter>
)

export default Routes;