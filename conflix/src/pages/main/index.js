import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './styles.css'
import FormApplicant from '../../components/FormApllicant';
import { Title } from '../../components/styles';



export default class Main extends Component {
    state = {
        applicants: [],
        applicantsInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/applicants?page=${page}`)
        const { docs, ...applicantsInfo } = response.data;

        this.setState({ applicants: docs, applicantsInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, applicantsInfo } = this.state;

        if (page === applicantsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { page, applicantsInfo } = this.state;

        return (
            <React.Fragment>
                <Title>Conflix Casting</Title>
                <FormApplicant />
                <div className="applicant-list">
                    {this.state.applicants.map(applicant => (
                        <div key={applicant._id}>
                            <h2>{applicant.firstname}</h2>
                            <Link to={`/applicants/${applicant._id}`}>Acessar</Link>
                        </div>
                    ))}
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Back</button>
                        <button disabled={page === applicantsInfo.pages} onClick={this.nextPage}>Next</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}