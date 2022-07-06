const MovieItem = (props) => {
  const deleteHandler = (id) => {
    // console.log(movie);
    const link = `https://vast-verve-344100-default-rtdb.firebaseio.com/movies.json/${id}`;
    console.log(link);
    fetch(link, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then((res) => console.log(res));
  };
  return (
    <li className="list-item">
      <h1 className="list-item-title">{props.movie.title}</h1>
      <p className="list-item-decription">{props.movie.desc}</p>
      <p className="list-item-release">{props.movie.release}</p>
      <button
        onClick={() => {
          deleteHandler(props.movie.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default MovieItem;
