import { useRef } from "react";
import useHttp from "../../hook/use-http";
const Addmovie = (props) => {
  const { loading, error, fetchHandler: addRequest } = useHttp();

  const title = useRef("");
  const desc = useRef("");
  const release = useRef("");

  const addHandler = async (e) => {
    e.preventDefault();

    const movie = {
      title: title.current.value,
      desc: desc.current.value,
      release: release.current.value,
    };
    const createMovie = (movie, data) => {
      const generatedId = data.name;
      const generatemovie = { id: generatedId, ...movie };
      props.onAdd(generatemovie);
    };
    addRequest(
      {
        url: "https://vast-verve-344100-default-rtdb.firebaseio.com/movies.json",
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: movie,
      },
      createMovie.bind(null, movie)
    );

    title.current.value = "";
    desc.current.value = "";
    release.current.value = "";
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    title.current.value = "";
    desc.current.value = "";
    release.current.value = "";
  };

  return (
    <section className="add">
      <form className="add-form">
        <div className="add-form-title">
          <label htmlFor="add-title">title</label>
          <input ref={title} type="text" id="add-title" />
        </div>
        <div className="add-form-decreption">
          <label htmlFor="add-decreption">decreption</label>
          <input ref={desc} type="text" id="add-decreption" />
        </div>
        <div className="add-form-release">
          <label htmlFor="add-release">release date</label>
          <input ref={release} type="text" id="add-release " />
        </div>
        <div className="add-form-action">
          <button className="cancel-btn" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="add-btn" onClick={addHandler}>
            {loading && "Loading..."}
            {error && "try again"}
            {loading === false && error === null && "add"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Addmovie;
