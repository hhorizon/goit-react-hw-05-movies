import propTypes from "prop-types";
import fotFound from "../../images/not-found.png";
import { AiFillStar } from "react-icons/ai";
import {
  CardWrapper,
  DescrWrapper,
  Title,
  Genres,
  Rating,
  Overview,
} from "./MovieCard.styles";

function MovieCard({ movie }) {
  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <CardWrapper>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="{original_title}"
          width={350}
        />
      ) : (
        <img src={fotFound} alt="{original_title}" width={350} />
      )}

      <DescrWrapper>
        <Title>{original_title}</Title>

        <Genres>
          {genres.map((genre) => {
            return <span key={genre.id}>{genre.name}</span>;
          })}
        </Genres>

        <Rating>
          <AiFillStar />
          {vote_average}
        </Rating>

        <Overview>{overview}</Overview>
      </DescrWrapper>
    </CardWrapper>
  );
}

MovieCard.propTypes = {
  movie: propTypes.object,
};

export default MovieCard;
