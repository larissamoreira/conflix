import React from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
import ApplicantDetail from './ApplicantDetail';
import Actor from '../components/Actor';

export default class ListMovies extends React.Component {
    state = {
        movies: []
    };

    async componentDidMount() {
        const { userId } = this.props.match.params;
        const response = await api.get(`/movies/${userId}`)
        this.setState({ movies: response.data })
        console.log(this.state.movies)
    }

    render() {
        return (
            <div>
                {this.state.movies.map(movie => (
                    <>
                    <div>Title: {movie.title}</div>
                    <div>
                        {movie.actors.length > 0 ?
                            movie.actors.map(actor =>
                                <Actor id={actor}/>
                            )
                            : <p>No cast for this movie yet!</p>
                        }
                    </div>
                    <Link to={`/applicants/${movie._id}`}>Find actor/actress for this movie</Link>
                    <hr></hr>
                    </>
                ))}
            </div>
        )
    }
}