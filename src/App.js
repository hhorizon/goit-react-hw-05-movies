import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
