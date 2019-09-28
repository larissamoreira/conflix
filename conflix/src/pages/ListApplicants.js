import React, { Component } from 'react';
import api from '../services/api';
// import { Link } from 'react-router-dom'
import ApplicantDetail from './ApplicantDetail';
import { Title, WrapperInputRadio, Button, Container } from '../components/styles';
import { List, ListDetail} from './styles';
// import Filter from '../components/Filter';
import styled, { css } from 'styled-components';
import { Header } from '../components/Header';


export default class ListApplicants extends Component {
    state = {
        movie: {},
        applicants: [],
        applicantsInfo: {},
        actorsSelected: [],
        page: 1,
        gender: 'All',
        interests: [
            { id: 0, value: 'Short dramatic films by Confederation College', isChecked: false },
            { id: 1, value: 'Commercials, music videos, experimental films by Confederation College', isChecked: false },
            { id: 2, value: 'Other external community productions (non-college, unpaid)', isChecked: false },
            { id: 3, value: 'Paid work - College or external (shorts, features, commercials, etc.)', isChecked: false },
        ],
    }

    handleCheck = (event) => {
        let interests = this.state.interests
        interests.forEach(production => {
            if (production.id == event.target.id) {
                production.isChecked = event.target.checked;
            }
        })

        this.setState({ interests: interests })
        this.loadApplicants();
    }

    componentDidMount() {
        this.findMovie();
        this.loadApplicants();
    }

    findMovie = async () => {
        let { movieId } = this.props.match.params;
        const response = await api.get(`/movie/${movieId}`)
        this.setState({ movie: response.data })
    }

    loadApplicants = async (page = 1) => {
        const response = await api.get(`/applicants?page=${page}`)
        let { docs, ...applicantsInfo } = response.data;

        // Filtering by gender
        docs = this.state.gender === 'All' ? docs : docs.filter(applicant => applicant.gender == this.state.gender)

        // Filtering by types of production
        let productionsChecked = this.state.interests.filter(interest => interest.isChecked);
        let filteredDocs = []
        productionsChecked.length !== 0 ?
            productionsChecked.map(production =>
                docs.map(doc =>
                    doc.interests.map(interest => (
                        interest.value == production.value ?
                            filteredDocs.push(doc)
                            : ''
                    )
                    )
                )
            )
            : filteredDocs = docs

        this.setState({ applicants: filteredDocs, applicantsInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadApplicants(pageNumber);
    }

    nextPage = () => {
        const { page, applicantsInfo } = this.state;
        if (page === applicantsInfo.pages) return;
        const pageNumber = page + 1;
        this.loadApplicants(pageNumber);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        this.loadApplicants();
    }

    selectActor = async (event, applicantId) => {

        // Creating list of selected actors
        const response = await api.get(`/applicants/${applicantId}`);
        const actor = response.data;
        this.setState(prevState => ({
            actorsSelected: [...prevState.actorsSelected, actor]
        }))

        // Request to push actor into the movie
        let { movieId } = this.props.match.params;
        const response2 = await api.put(`/movies/${movieId}`, {
            actors: actor
        })

        // Removing selected actors from the list of applicants.
        let index = this.state.applicants.map(function (e) { return e._id; }).indexOf(applicantId);
        let array = [...this.state.applicants]
        array.splice(index, 1)
        this.setState({ applicants: array })
    }

    render() {
        const { page, applicantsInfo, movie, actorsSelected } = this.state;

        return (
            <React.Fragment>
                <Header />
                {/* <h3>Movie: {movie.title}</h3>
                <h4>Submissions</h4> */}
                {/* <Filter interests={this.state.interests} handleCheck={this.handleCheck} handleChange={this.handleChange} /> */}
                <>
                    {actorsSelected ?
                        actorsSelected.map(actor => <div>{actor.firstname}</div>)
                        : ' '
                    }
                </>
                <Container>
                    <List>
                        {this.state.applicants.map(applicant => (
                            <ListDetail key={applicant._id}>
                                <ApplicantDetail applicant={applicant} />
                                <Button primary onClick={(e) => this.selectActor(e, applicant._id)}>Select</Button>
                            </ListDetail>
                        ))}
                    </List>
                </Container>
                {/* <WrapperInputRadio>
                    <Button primary disabled={page === 1} onClick={this.prevPage}>Back</Button>
                    <Button primary disabled={page === applicantsInfo.pages} onClick={this.nextPage}>Next</Button>
                </WrapperInputRadio> */}

            </React.Fragment>
        )
    }
}