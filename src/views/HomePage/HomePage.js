import { useState, useEffect } from "react";
import * as fetchApi from "../../services/fetchApi";
import MoviesList from "../../components/MoviesList/MoviesList";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchApi.popularMovies().then((data) => {
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
