import { useState } from "react";
import "./style.scss";

const Form = ({ onHandleSearchMovies }) => {
  const [search, setSearch] = useState("");

  const searchMovies = (event) => {
    event.preventDefault();
    onHandleSearchMovies(search);
  };

  const getQuery = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="from" onSubmit={searchMovies}>
      <label>
        <input
          className="from__input"
          onChange={getQuery}
          placeholder="Search Movies"
        ></input>
      </label>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
