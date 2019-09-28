import React from 'react'
import api from '../services/api'

class Actor extends React.Component {
    state = {
        applicant: {}
    };

    async componentDidMount() {
        const id = this.props.id;
        const response = await api.get(`/applicants/${id}`)
        this.setState({ applicant: response.data })
    }

    render() {
        return(
            <li>{this.state.applicant.firstname}</li>
        )
    }
}

export default Actor;