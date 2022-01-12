const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=6ab460452e9d6fb8f59cab399bd5ef0f";

async function fetchMovies(url) {
  const response = await fetch(`${BASE_URL}/${url}${API_KEY}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Sorry, something wrong"));
}

function fetchPopularMovies() {
  return fetchMovies("trending/all/day?");
}

function fetchSearchMovies(searchQuery, currentPage) {
  return fetchMovies(
    `search/movie?query=${searchQuery}&page=${currentPage}&include_adult=false&`
  );
}

function fetchMovieById(movieId) {
  return fetchMovies(`movie/${movieId}?language=en-US&`);
}

function fetchMovieCredits(movieId) {
  return fetchMovies(`movie/${movieId}/credits?language=en-US&`);
}

function fetchMovieReviews(movieId) {
  return fetchMovies(`movie/${movieId}/reviews?language=en-US&page=1&`);
}

export {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
};
