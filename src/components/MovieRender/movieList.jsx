import MovieItem from "./moveItem";

const MovieList = (props) => {
  return (
    <ul className="list">
      {props.movies.map((item) => {
        return <MovieItem key={item.id} movie={item} />;
      })}
    </ul>
  );
};
export default MovieList;
