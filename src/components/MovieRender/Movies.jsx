import MovieList from "./movieList";
import MovieSearch from "../SearchMovie/MovieSearch";

const Movies = (props) => {
  return (
    <section className="movies">
      <MovieSearch onSearch={props.onSearch} />
      {props.movies.length < 1 && <p>{props.content}</p>}
      {props.movies.length > 0 && <MovieList movies={props.movies} />}
    </section>
  );
};
export default Movies;
