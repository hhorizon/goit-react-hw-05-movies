import { useState, useEffect } from "react";
import * as fetchApi from "../../services/fetchApi";
import Container from "../../components/Container";
import MoviesList from "../../components/MoviesList";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchApi.popularMovies().then((data) => {
      setPopularMovies(data.results);
    });
  }, []);

  return (
    <Container>
      <MoviesList movies={popularMovies} />
    </Container>
  );
}

export default HomePage;
