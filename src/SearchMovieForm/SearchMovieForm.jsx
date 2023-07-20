import { useState } from "react";

export default function SearchMovieForm({ onSearch }) {
  const [searchObj, setSearchObj] = useState({
    title: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchObj.title);
    setSearchObj({
      title: "",
    });
  }

  function handleChange(event) {
    event.preventDefault();
    setSearchObj({
      title: event.target.value,
    });
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        value={searchObj.title}
        placeholder="Type your search here"
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}
