import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import fotFound from "../../images/not-found.png";
import { Item, Image, Title, Rating } from "./MoviesListItem.styles";

function MoviesListItem({ movie }) {
  const location = useLocation();

  const { title, name, poster_path, release_date, vote_average } = movie;

  const releaseYear = () => {
    if (release_date) {
      return `(${release_date.substring(0, 4)})`;
    }
    return;
  };

  return (
    <Item>
      <Link
        to={`/movies/${movie.id}`}
        state={{
          from: location,
          label: location.pathname === "/" ? "to home" : "to movies",
        }}
      >
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            height={315}
          />
        ) : (
          <Image src={fotFound} alt={title} height={315} />
        )}
        <Title>
          {title ?? name}
          <span> {releaseYear()}</span>
        </Title>
        <Rating>
          <AiFillStar />
          {vote_average}
        </Rating>
      </Link>
    </Item>
  );
}

MoviesListItem.propTypes = {
  movie: propTypes.object,
};

export default MoviesListItem;
