import { useState, useEffect } from "react";
import {
  NavLink,
  useParams,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  fetchMovieById,
  fetchMovieCredits,
  fetchMovieReviews,
} from "../../services/movies-api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
    fetchMovieCredits(movieId).then((data) => {
      setCredits(data.cast);
    });
    fetchMovieReviews(movieId).then((data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  const onClickBack = () => {
    navigate(location?.state?.from ?? "/");
  };

  console.log(movie);

  return (
    <>
      <button type="button" onClick={onClickBack}>
        Back
      </button>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <p>{movie.title ?? movie.name}</p>
        </div>
      )}

      <NavLink to="cast" state={{ from: location?.state?.from ?? "/" }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: location?.state?.from ?? "/" }}>
        Reviews
      </NavLink>

      <Routes>
        <Route path="cast" element={<Cast credits={credits} />} />

        <Route path="reviews" element={<Reviews reviews={reviews} />} />
      </Routes>
    </>
  );
}

export default MovieDetailsPage;
