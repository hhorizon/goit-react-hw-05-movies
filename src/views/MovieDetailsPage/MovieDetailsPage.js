import { useState, useEffect, lazy, Suspense } from "react";
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
import Loader from "../../components/Loader";
import { NoMovieMess, NavList, NavItem } from "./MovieDetailsPage.styles";

const Cast = lazy(() =>
  import("../../components/Cast" /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews" /* webpackChunkName: "reviews-page" */)
);

function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchApi
      .movieById(movieId)
      .then(setMovie)
      .catch((error) => console.log(error));
    fetchApi
      .movieCredits(movieId)
      .then((data) => {
        setCredits(data.cast);
      })
      .catch((error) => console.log(error));
    fetchApi
      .movieReviews(movieId)
      .then((data) => {
        setReviews(data.results);
      })
      .catch((error) => console.log(error));
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

      {movie ? (
        <MovieCard movie={movie} />
      ) : (
        <NoMovieMess>Something wrong! Try later...</NoMovieMess>
      )}

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

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="cast"
            element={<Cast credits={credits} creditsPerPage={7} />}
          />

          <Route
            path="reviews"
            element={<Reviews reviews={reviews} creditsPerPage={3} />}
          />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default MovieDetailsPage;
