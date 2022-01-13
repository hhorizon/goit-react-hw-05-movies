import {
  CardWrapper,
  DescrWrapper,
  Title,
  Rating,
  Overview,
  Date,
  Genres,
  Gen,
} from "./MovieCard.styles";

function MovieCard({ movie }) {
  const {
    release_date,
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
  } = movie;

  const releaseYear = release_date.substring(0, 4);

  return (
    <CardWrapper>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="{original_title}"
      />

      <DescrWrapper>
        <Title>{original_title}</Title>

        <Rating>
          <Gen>Rating: </Gen>
          {vote_average}
        </Rating>

        <Date>
          <Gen>Release date: </Gen>
          {releaseYear}
        </Date>

        <Overview>
          <Gen>Overview: </Gen>
          {overview}
        </Overview>

        <Genres>
          <Gen>Genres: </Gen>
          {genres.map((genre) => {
            return <span key={genre.id}>{genre.name}</span>;
          })}
        </Genres>
      </DescrWrapper>
    </CardWrapper>
  );
}

export default MovieCard;
