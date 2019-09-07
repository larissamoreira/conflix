import React, { Component } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom'
import ApplicantDetail from './ApplicantDetail';
import { Title, WrapperInputRadio, Button } from '../components/styles';
import { List, ListDetail } from './styles';
import Filter from '../components/Filter';


export default class ListApplicants extends Component {
    state = {
        applicants: [],
        applicantsInfo: {},
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
        this.loadApplicants();
    }

    loadApplicants = async (page = 1) => {
        const response = await api.get(`/applicants?page=${page}`)
        let { docs, ...applicantsInfo } = response.data;

        docs = this.state.gender === 'All' ? docs : docs.filter(applicant => applicant.gender == this.state.gender)

        let productionsChecked = this.state.interests.filter(interest => interest.isChecked);

        let filteredDocs = []
        productionsChecked.length !== 0 ?
            productionsChecked.map(production =>
                docs.map(doc =>
                    doc.interests.map(interest => (
                        interest.value == production.value?
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

    render() {
        const { page, applicantsInfo } = this.state;

        return (
            <React.Fragment>
                <Title>Submissions</Title>
                <Filter interests={this.state.interests} handleCheck={this.handleCheck} handleChange={this.handleChange} />
                <List>
                    {this.state.applicants.map(applicant => (
                        <ListDetail key={applicant._id}>
                            <ApplicantDetail applicant={applicant} />
                            <Link to={`/applicants/${applicant._id}`}>Acessar</Link>
                        </ListDetail>
                    ))}
                </List>
                <WrapperInputRadio>
                    <Button primary disabled={page === 1} onClick={this.prevPage}>Back</Button>
                    <Button primary disabled={page === applicantsInfo.pages} onClick={this.nextPage}>Next</Button>
                </WrapperInputRadio>
            </React.Fragment>
        )
    }
}