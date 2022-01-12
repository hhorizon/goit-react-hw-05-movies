import { Link, useLocation } from "react-router-dom";
import MoviesListItem from "../MoviesListItem/MoviesListItem";

function MoviesList({ movies, isLoadingMoreBtn, onLoadMore }) {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviesListItem movie={movie} />
            </Link>
          </li>
        ))}
      </ul>

      {isLoadingMoreBtn && <button onClick={onLoadMore}>Load more</button>}
    </>
  );
}

export default MoviesList;
