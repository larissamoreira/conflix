import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

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
            <div className="applicant-list">
                {this.state.applicants.map(applicant => (
                    <div key={applicant._id}>
                        <h2>{applicant.firstname}</h2>
                        {/* <a href="">Acessar</a> */}
                    </div>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Back</button>
                    <button disabled={page === applicantsInfo.pages} onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }
}