import { useState } from "react";

const MovieSearch = (props) => {
  const [input, setInput] = useState("");
  const seachHandler = (e) => {
    setInput(e.target.value);
    props.onSearch(e.target.value);
  };
  return (
    <div className="search-box">
      <form>
        <label htmlFor="search-name">search by name</label>
        <input
          onChange={seachHandler}
          type="text"
          id="search-name"
          value={input}
        />
      </form>
    </div>
  );
};
export default MovieSearch;
