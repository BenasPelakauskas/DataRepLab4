import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component {
    render() {
        return this.props.myMovies.map((movie)=>{ // map splits into individual movies.
            console.log({movie});
            return <MovieItem key={movie.imdbID}movie={movie}></MovieItem> // imdbID to remove error giving each movie their unique ID
        });
    }
}
export default Movies;