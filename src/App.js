import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Loader from "./components/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
