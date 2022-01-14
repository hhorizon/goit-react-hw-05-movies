import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as fetchApi from "../../services/fetchApi";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader";
import MoviesList from "../../components/MoviesList";
import Pagination from "../../components/Pagination";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (searchQuery) => {
    setMovies([]);
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setSearchParams({ query: searchQuery, page: 1 });
  };

  const handlePagination = (pageNum) => {
    setCurrentPage(pageNum);
    setSearchParams({ query: searchQuery, page: pageNum });
  };

  useEffect(() => {
    setSearchQuery(searchParams.get("query") ?? "");
    setCurrentPage(searchParams.get("page") ?? 1);

    if (!searchParams.get("query")) {
      setMovies([]);
      setTotalPages(0);
    }
  }, [searchParams]);

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
          toast.warn("По вашему запросу пусто");
        }
      })
      .catch((error) => alert(error))
      .finally(() => setIsloading(false));
  }, [currentPage, searchQuery]);

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {movies.length > 0 && <MoviesList movies={movies} />}

      <Pagination totalPages={totalPages} onPaginationBtn={handlePagination} />
    </Container>
  );
}
export default MoviesPage;
