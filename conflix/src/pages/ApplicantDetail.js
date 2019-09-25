import React, { Component } from 'react';
import api from '../services/api';

export default class ApplicantDetail extends Component {

    render() {
        const applicant = this.props.applicant
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