// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    // We also add a `Route` component that will render `MovieShow`
    // when a movie is selected
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
  </div>
)

export default MoviesPage
