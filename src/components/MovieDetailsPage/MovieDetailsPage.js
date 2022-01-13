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
import Container from "../Container";
import Button from "../Button";
import MovieCard from "../MovieCard";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import { NavList, NavItem } from "./MovieDetailsPage.styles";

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

  console.log(reviews);

  return (
    <Container>
      <Button
        type="button"
        onClick={onClickBack}
        style={{ margin: "25px 0 0 25px" }}
      >
        Back
      </Button>

      {movie && <MovieCard movie={movie} />}

      <NavList>
        <NavItem>
          <NavLink to="cast" state={{ from: location?.state?.from ?? "/" }}>
            Cast
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="reviews" state={{ from: location?.state?.from ?? "/" }}>
            Reviews
          </NavLink>
        </NavItem>
      </NavList>

      <Routes>
        <Route
          path="cast"
          element={<Cast credits={credits} creditsPerPage={5} />}
        />

        <Route
          path="reviews"
          element={<Reviews reviews={reviews} creditsPerPage={3} />}
        />
      </Routes>
    </Container>
  );
}

export default MovieDetailsPage;
