import React, { Component } from 'react';
import api from '../services/api';
import styled from 'styled-components';

const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-height: 200px;
`

const ItemRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 150px;
`

export const Span = styled.span`
    padding: 4px;
    font-size: 13px;
`

export default class ApplicantDetail extends Component {

    render() {
        const applicant = this.props.applicant
        return (
            <Card>
                <ItemRow>
                    <Span>{applicant.fullname} </Span>
                    <Span>{applicant.gender}</Span>
                    <Span>{applicant.age}</Span>
                    <Span>{applicant.phone}</Span>
                    <Span>{applicant.email}</Span>
                    <Span>{applicant.experience}</Span>
                    <Span>{applicant.specialskills}</Span>
                    {applicant.interests ?
                        applicant.interests.map(interest =>
                            <Span key={interest.id}>{interest.value}</Span>
                            )
                        : ''
                    }
                </ItemRow>
                <ItemRow>
                    <Img src="https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg" />
                </ItemRow>
            </Card>
        )
    }
}