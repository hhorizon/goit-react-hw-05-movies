import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../services/movies-api";
import MoviesList from "../components/MoviesList/MoviesList";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });
  }, []);

  return (
    <>
      <MoviesList movies={popularMovies} />
    </>
  );
}

export default HomePage;
