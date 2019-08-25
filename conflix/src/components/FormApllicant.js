import React, { Component } from 'react'
import api from '../services/api';

class FormApplicant extends Component {
    state = {
        firstname: '',
        lastname: '',
        age: 0,
        gender: '',
        parentsname: '',
        email: '',
        phone: 0,
        experience: '',
        specialskills: '',
        interests: [],
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const applicant = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            age: this.state.age,
            gender: this.state.gender,
            parentsname: this.state.parentsname,
            email: this.state.email,
            phone: this.state.phone,
            experience: this.state.experience,
            specialskills: this.state.specialskills,
            interests: this.state.interests,
        }

        api.post('/applicants', { ...applicant })
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Firstname<input name="firstname" onChange={this.handleChange} />
                Lastname<input name="lastname" onChange={this.handleChange} />
                Age<input name="age" onChange={this.handleChange} />
                Gender<input name="gender" onChange={this.handleChange} />
                ParentsName<input name="parentsname" onChange={this.handleChange} />
                Email<input name="email" onChange={this.handleChange} />
                Phone<input name="phone" onChange={this.handleChange} />
                specialskills<input name="specialskills" onChange={this.handleChange} />
                interests<input name="interests" onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}

export default FormApplicant;