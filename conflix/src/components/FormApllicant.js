import React, { Component } from 'react'
import api from '../services/api';
import Checkbox from './Checkbox';
import { Button, Container, FormControl, Typography, InputLabel, Input, FormHelperText, FormLabel, Radio, RadioGroup, FormControlLabel, FormGroup, Grid, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';


class FormApplicant extends Component {
    state = {
        fullname: '',
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
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
        window.location.reload();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const applicant = {
            fullname: this.state.fullname,
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
                this.setState({ open: true })
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
            <Container maxWidth="sm" style={{ padding: '1em' }}>
                <form onSubmit={this.handleSubmit}>
                    <Grid
                        style={{ minHeight: '120vh' }}
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="start"
                    >
                        <FormControl>
                            <InputLabel InputLabelProps={{ style: { fontSize: 40 } }} htmlFor="fullname">Full name</InputLabel>
                            <Input id="fullname" name="fullname" aria-describedby="fullname" onChange={this.handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="email">Email address</InputLabel>
                            <Input id="email" name="email" aria-describedby="email" onChange={this.handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="age">Age</InputLabel>
                            <Input type="number" id="age" name="age" aria-describedby="age" onChange={this.handleChange} />
                        </FormControl>

                        <FormControl>
                            <FormLabel component="legend" style={{ paddingTop: '1em' }}>Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={this.state.gender} onChange={this.handleChange}>
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <Input id="phone" aria-describedby="phone" name="phone" onChange={this.handleChange} />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="parentsname">Parents name</InputLabel>
                            <Input id="parentsname" aria-describedby="parentsname" onChange={this.handleChange} />
                            <FormHelperText id="parentsname">Only if you are under 17.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="experience">Casting experience</InputLabel>
                            <Input id="experience" name="experience" aria-describedby="experience" onChange={this.handleChange} />
                            <FormHelperText id="parentsname">List any previous casting experience.</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="specialskills">Special Skills</InputLabel>
                            <Input id="specialskills" name="specialskills" aria-describedby="specialskills" onChange={this.handleChange} />
                            <FormHelperText id="parentsname">Do you have any special skills? Dancing, singing, music, martial arts, etc..</FormHelperText>
                        </FormControl>

                        <FormControl component="fieldset" >
                            <FormLabel component="legend" style={{ paddingTop: '1em' }}>Productions interested</FormLabel>
                            <FormHelperText id="parentsname">Please select what productions you would be interested in taking part in.</FormHelperText>
                            <FormGroup>
                                {
                                    this.state.interests.map((production) => {
                                        return (
                                            <Checkbox handleClick={this.handleCheck} {...production} />
                                        )
                                    })
                                }
                            </FormGroup>

                        </FormControl>
                    </Grid>
                </form>
                <div style={{ fontSize: '12px' }}>
                    <p>CLICK SUBMIT BELOW THE LINE</p>
                    <p>
                        By completing and submitting this form you are giving your permission for your contact information and your
                        photo to be included in the Confederation College film production database and you agree to a mandatory police information check
                    </p>
                </div>
                <Button onClick={this.handleSubmit} variant="outlined" color="secondary">SUBMIT</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title">{"YAAAAYYYY!!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You have successfully registered to be part of Conflix casting!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            OK!
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>
        )
    }
}

export default FormApplicant;