import React from 'react';
import api from '../services/api';
import { Container } from './styles';

class FormMovie extends React.Component {
    state = {
        title: '',
    }

    handleSubmit = event => {
        event.preventDefault();

        const { userId } = this.props.match.params;

        const movie = {
            title: this.state.title,
            director: userId
        }

        api.post('/movies', { ...movie })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <label> > Title *</label>
                    <input name="title" onChange={this.handleChange} />
                    <button>SUBMIT</button>
                </form>
            </Container>
        )
    }
}

export default FormMovie;