import React from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import ApplicantDetail from './ApplicantDetail';
import Actor from '../components/Actor';
import { Header } from '../components/Header';
import { Container } from '../components/styles';
import { MovieDetail, Th, Td, Table, LinkStyle, Ul } from './styles';
import FormMovie from '../components/FormMovie';

export default class ListMovies extends React.Component {
    state = {
        movies: [],
        userId: ''
    };

    async componentDidMount() {
        this.setState({userId: this.props.match.params})
        const response = await api.get(`/movies/${this.state.userId}`)
        this.setState({ movies: response.data })
    }

    render() {
        const { movies, userId } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <FormMovie user={userId}/>
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
                                                : <span>No cast for this movie yet!</span>
                                            }
                                        </Ul>
                                    </Td>
                                    <Td>
                                        <LinkStyle primary href={`/applicants/${movie._id}`}>Find actor/actress</LinkStyle>
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