import React, { Component } from 'react';
import api from '../services/api';

export default class ApplicantDetail extends Component {
    state = {
        applicant: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/applicants/${id}`)
        this.setState({ applicant: response.data })
    }

    render() {
        const { applicant } = this.state;
        return (
            <div className='applicant-info'>
                <h1>{applicant.firstname} {applicant.lastname}</h1>
                <p>{applicant.gender}</p>
                <p>{applicant.age}</p>
                <p>{applicant.phone}</p>
                <p>{applicant.email}</p>
                <p>{applicant.experience}</p>
                <p>{applicant.specialskills}</p>
                {applicant.interests ?
                    applicant.interests.map(interest =>
                        <p key={interest.id}>{interest.value}</p>) 
                    : ''
                }
            </div>
        )
    }
}