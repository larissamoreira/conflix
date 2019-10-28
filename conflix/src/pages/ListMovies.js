import React from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import ApplicantDetail from './ApplicantDetail';
import Actor from '../components/Actor';
import { Header } from '../components/Header';
import { Container } from '../components/styles';
import { MovieDetail, Th, Td, Table, LinkStyle, Ul } from './styles';
import FormMovie from '../components/FormMovie';
import { Button } from '@material-ui/core';

export default class ListMovies extends React.Component {
    state = {
        movies: [],
        userId: ''
    };

    async componentDidMount() {
        this.setState({ userId: this.props.match.params.userId })
        const response = await api.get(`/movies/${this.state.userId}`)
        this.setState({ movies: response.data })
    }

    deleteMovie = (event, movieId) => {
        event.preventDefault();
        api.delete(`/movies/${movieId}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        const { movies, userId } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <FormMovie user={userId} />
                    {movies.length > 0 ?
                        <Table>
                            <tr>
                                <Th>Title</Th>
                                <Th>Cast</Th>
                                <Th>Action</Th>
                            </tr>
                            {movies.map(movie => (
                                <tr>
                                    <Td>{movie.title}</Td>
                                    <Td>
                                        <Ul>
                                            {movie.actors.length > 0 ?
                                                movie.actors.map(actor =>
                                                    <Actor id={actor} />
                                                )
                                                : <span>No cast</span>
                                            }
                                        </Ul>
                                    </Td>
                                    <Td>
                                        {/* <LinkStyle primary href={`/applicants/${movie._id}`}>Find actor/actress</LinkStyle> */}
                                        <Button color="secondary" onClick={e => this.props.history.push(`/applicants/${movie._id}`)}>Find actor</Button>
                                        <Button color="primary" onClick={e => this.deleteMovie(e, movie._id)}>Delete</Button>
                                    </Td>
                                </tr>
                            ))}
                        </Table>
                        : 'Oops... You do not have movies yet.'}
                </Container >
            </>
        )
    }
}