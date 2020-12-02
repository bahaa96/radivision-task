import React from 'react';
import { FaStar } from 'react-icons/fa';

import config from '../../../config';
import { IMovie } from '../MovieList/Model';
import { Container } from './styles';

interface IProps {
  movie: IMovie;
  liked?: boolean;
}

const MovieCard: React.FC<IProps> = React.memo(
  ({ movie }) => {
    return (
      <Container className="movie-card">
        <div className="movie-card__overlay">
          <h3 className="movie-card__title">{movie.title}</h3>
          <div className="movie-card__meta">
            <h5>{movie.releaseDate}</h5>
            <h5 className="movie-card__rating">
              <FaStar />
              <p>{movie.voteAverage}</p>
            </h5>
          </div>
        </div>
        <div className="movie-card__poster">
          <img
            src={`${config.CDN_URL}/t/p/w200${movie.backdropPath}`}
            alt={`${movie.title}'s poster`}
          />
        </div>
      </Container>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.liked === nextProps.liked;
  },
);

export default MovieCard;
