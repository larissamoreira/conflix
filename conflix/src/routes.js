import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
// import ApplicantDetail from './pages/ApplicantDetail';
import ListApplicants from './pages/ListApplicants';
import FormMovie from './components/FormMovie';
import ListMovies from './pages/ListMovies'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/applicants/:movieId' component={ListApplicants} />
            {/* <Route path='/applicants/:id' component={ApplicantDetail} /> */}
            <Route path='/create/:userId' component={FormMovie} />
            <Route path='/movies/:userId' component={ListMovies} />
        </Switch>
    </BrowserRouter>
)

export default Routes;