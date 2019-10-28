import React from 'react';
import api from '../services/api';
import { Header } from '../components/Header';
import { Container, Button } from '../components/styles';

class SignUp extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const director = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        alert(director.password)

        api.post('/directors', { ...director })
            .then(res => {
                this.props.history.push('/')
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" onChange={this.handleChange} />
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.handleChange} />
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} />
                        <Button>Submit</Button>
                    </form>
                </Container>
            </>
        )
    }
}

export default SignUp;