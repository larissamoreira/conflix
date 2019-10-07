import React from 'react';
import api from '../services/api';
import { Modal, Backdrop, Fade, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { Header } from './Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function FormMovie() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = (event, props, title) => {
        event.preventDefault();

        // const { userId } = props.match.params;

        // const movie = {
        //     title: title,
        //     director: userId
        // }
        console.log('sadasd')
        console.log(title)

        // api.post('/movies', { ...movie })
        //     .then(res => {
        //         console.log(res);
        //         props.history.push(`/movies/${userId}`)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    const handleChange = event => {
        this.setTitle(event.target.value);
    }

    return (
        <div>
            <Button color="primary" variant="outlined" onClick={handleOpen}>
                Create a movie
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3 id="transition-modal-title">New Movie</h3>
                        <form>
                            <FormControl>
                                <InputLabel InputLabelProps={{ style: { fontSize: 10 } }} htmlFor="title">Title</InputLabel>
                                <Input id="title" name="title" aria-describedby="title" onChange={(event) => setTitle(event.target.value)} />
                            </FormControl>
                            <Button color="secondary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}