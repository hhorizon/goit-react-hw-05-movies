import { useState, useEffect } from "react";
import {
  NavLink,
  useParams,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as fetchApi from "../../services/fetchApi";
import Container from "../../components/Container";
import Button from "../../components/Button";
import MovieCard from "../../components/MovieCard";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";
import { NavList, NavItem } from "./MovieDetailsPage.styles";

function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchApi.movieById(movieId).then(setMovie);
    fetchApi.movieCredits(movieId).then((data) => {
      setCredits(data.cast);
    });
    fetchApi.movieReviews(movieId).then((data) => {
      setReviews(data.results);
    });
  }, [movieId]);

  const onClickBack = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <Container>
      <Button
        type="button"
        onClick={onClickBack}
        style={{ margin: "25px 0 0 25px" }}
      >
        Back {location?.state?.label ?? ""}
      </Button>

      {movie && <MovieCard movie={movie} />}

      <NavList>
        <NavItem>
          <NavLink
            to="cast"
            state={{
              from: location?.state?.from ?? "/",
              label: location?.state?.label ?? "",
            }}
          >
            Cast
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="reviews"
            state={{
              from: location?.state?.from ?? "/",
              label: location?.state?.label ?? "",
            }}
          >
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
