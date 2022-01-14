import propTypes from "prop-types";
import MoviesListItem from "../MoviesListItem";
import { List } from "./MovieList.styles";

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object),
};

export default MoviesList;
