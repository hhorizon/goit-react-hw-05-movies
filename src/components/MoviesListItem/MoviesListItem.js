function MoviesListItem({ movie }) {
  return <>{movie.title ?? movie.name}</>;
}

export default MoviesListItem;
