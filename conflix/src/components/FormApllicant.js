import React, { Component } from 'react'
import api from '../services/api';
import { Input, Form, Button } from './styles';
import Checkbox from './Checkbox';

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
        interests: [
            { id: 0, value: 'Short dramatic films by Confederation College', isChecked: false },
            { id: 1, value: 'Commercials, music videos, experimental films by Confederation College', isChecked: false },
            { id: 2, value: 'Other external community productions (non-college, unpaid)', isChecked: false },
            { id: 3, value: 'Paid work - College or external (shorts, features, commercials, etc.)', isChecked: false },
        ],
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
            interests: this.state.interests.filter(interest => interest.isChecked),
        }

        api.post('/applicants', { ...applicant })
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })
    }

    handleCheck = (event) => {
        let interests = this.state.interests
        interests.forEach(production => {
            if (production.id == event.target.id) {
                production.isChecked = event.target.checked;
            }
        })

        this.setState({ interests: interests })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input name="firstname" onChange={this.handleChange} placeholder="First name" required />
                <Input name="lastname" onChange={this.handleChange} placeholder="Last name" required />
                <Input name="age" onChange={this.handleChange} placeholder="Age" required />
                <div>
                    <input type="radio" value="Male" name="gender" onChange={this.handleChange} /> Male
                    <input type="radio" value="Female" name="gender" onChange={this.handleChange} /> Female
                </div>
                <Input name="parentsname" onChange={this.handleChange} placeholder="Parents name (-18)" />
                <Input name="email" onChange={this.handleChange} placeholder="Email" required />
                <Input name="phone" onChange={this.handleChange} placeholder="Phone" />
                <Input name="experience" onChange={this.handleChange} placeholder="Casting experience" />
                <Input name="specialskills" onChange={this.handleChange} placeholder="Special Skills" />
                <p>
                    Please select what productions you would be interested in taking part in:
                </p>
                {
                    this.state.interests.map((production) => {
                        return (
                            <Checkbox handleClick={this.handleCheck} {...production} />
                        )
                    })
                }
                <Button primary>SUBMIT</Button>
            </Form>
        )
    }
}

export default FormApplicant;