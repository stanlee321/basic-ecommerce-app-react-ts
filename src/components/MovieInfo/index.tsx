import React from 'react';
import Thumb from '../Thumb';

// Styles

import NoImage from '../../images/no_image.jpg';

import { Wrapper, Content, Text } from './MovieInfo.styles'

// Components

// Interfaces
import { IMovie } from '../../interfaces/movieInfo';


interface IProps {
    movie: IMovie
}

const def_image = ""



const MovieInfo = ( { movie } : IProps ) => {

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb 
                movieId={movie.movieId}
                image={
                    movie.poster_path
                    ? `${movie.poster_path}`:NoImage
                }
                clickable={false}
                alt = 'movie-thumb'
                />

                <Text>
                    <h1>
                        {movie.title}
                    </h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors" >
                        <div>
                            <h3>RATING</h3>
                            <div className="score">
                                {movie.vote_average}
                            </div>
                        </div>
                        <div className="director">
                            <h3> DIRECTOR{movie.directors.length > 1 ? 'S': ''} </h3>
                            {
                                movie.directors.map(director => (
                                    <p key={director.credit_id} > {director.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </Text>
            </Content>

        </Wrapper>
    )
}

export default MovieInfo;