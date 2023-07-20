import { useState } from "react";
import SearchMovieForm from "./SearchMovieForm/SearchMovieForm";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const omdbURL = `http://www.omdbapi.com/?apikey=5ade6a64&`;

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <p>The user is searching for "{searchTerm}"</p>
      <SearchMovieForm onSearch={handleSearch} />
    </>
  );
}
