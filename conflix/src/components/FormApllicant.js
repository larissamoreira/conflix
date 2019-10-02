import React, { Component } from 'react'
import api from '../services/api';
import { Input, Form, Button, WrapperInput, WrapperInputRadio, Container, TextArea, Label } from './styles';
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
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Full Name *</Label>
                    <Input name="fullname" onChange={this.handleChange} required />
                    <Label>Age</Label>
                    <Input name="age" onChange={this.handleChange} required />
                    <Label>Gender</Label>
                    <WrapperInputRadio>
                        <Label>
                            <Input type="radio" value="Male" name="gender" onChange={this.handleChange} /> Male
                        </Label>
                        <Label>
                            <Input type="radio" value="Female" name="gender" onChange={this.handleChange} /> Female
                        </Label>
                    </WrapperInputRadio>
                    <Label>Parents name (if under 17)</Label>
                    <Input name="parentsname" onChange={this.handleChange} />
                    <Label>Email address *</Label>
                    <Input name="email" onChange={this.handleChange} required />
                    <Label>Phone</Label>
                    <Input name="phone" onChange={this.handleChange} />
                    <Label>List any casting experience</Label>
                    <TextArea name="experience" onChange={this.handleChange} />
                    <Label>Do you have any special skills? Dancing, singing, music, martial arts, etc.</Label>
                    <TextArea name="specialskills" onChange={this.handleChange} />
                    <Label>
                        Please select what productions you would be interested in taking part in:
                    </Label>
                    {
                        this.state.interests.map((production) => {
                            return (
                                <Checkbox handleClick={this.handleCheck} {...production} />
                            )
                        })
                    }
                    <Button>SUBMIT</Button>
                </Form>
            </Container>
        )
    }
}

export default FormApplicant;