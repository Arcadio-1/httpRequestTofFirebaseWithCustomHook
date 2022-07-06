import "./App.scss";
import Addmovie from "./components/AddMovie/AddMovie";
import Movies from "./components/MovieRender/Movies";
import { useState, useEffect, useCallback, useMemo } from "react";
import useHttp from "./hook/use-http";

function App() {
  const { loading, error, fetchHandler: sendRequest } = useHttp();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getData = (data) => {
      const listUpdate = [];
      for (const key in data) {
        listUpdate.push({
          id: key,
          title: data[key].title,
          release: data[key].release,
          desc: data[key].desc,
        });
      }
      setMovieList(listUpdate);
    };
    sendRequest(
      {
        url: "https://vast-verve-344100-default-rtdb.firebaseio.com/movies.json",
      },
      getData
    );
    // fetchData();
  }, []);

  const addHandler = (item) => {
    setMovieList((prev) => {
      return prev.concat(item);
    });
  };

  let content = "Found no movies.";
  if (error) {
    content = "Server is Down";
  }
  if (loading) {
    content = "Loading...";
  }
  const searchHandler = (input) => {
    // if (input.trim().length > 0) {
    //   const filtered = movieList.filter((item) => {
    //     return item.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    //   });
    //   setMovieList(filtered);
    // } else {
    //   getData();
    //   console.log("empty");
    // }
  };

  return (
    <div className="container">
      <Addmovie onAdd={addHandler} />
      <Movies content={content} movies={movieList} onSearch={searchHandler} />
    </div>
  );
}

export default App;
