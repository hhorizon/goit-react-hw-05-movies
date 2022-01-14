import { useState, useEffect } from "react";
import * as fetchApi from "../../services/fetchApi";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import MoviesList from "../../components/MoviesList/MoviesList";
import Loader from "../../components/Loader";

import PaginatedItems from "../../components/Pagination/Pagination";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = (searchQuery) => {
    setMovies([]);
    setSearchQuery(searchQuery);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    setIsloading(true);

    fetchApi
      .searchMovies(searchQuery, currentPage)
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);

        if (data.results.length === 0) {
          alert("По вашему запросу пусто");
        }
      })
      .catch((error) => alert(error))
      .finally(() => setIsloading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {movies.length > 0 && <MoviesList movies={movies} />}

      <PaginatedItems
        totalPages={totalPages}
        onPaginationBtn={setCurrentPage}
      />
    </Container>
  );
}
export default MoviesPage;
