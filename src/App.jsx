import { useState, useEffect } from "react";
import SearchMovieForm from "./SearchMovieForm/SearchMovieForm";
import MovieInfo from "./MovieInfo/MovieInfo";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Guardians of the Galaxy");
  const [movieData, setMovieData] = useState(null);

  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const omdbURL = `http://www.omdbapi.com/?apikey=5ade6a64&t=${searchTerm}`;
        const response = await fetch(omdbURL);
        const data = await response.json();
        setMovieData(data);
      } catch {
        console.error("Something went wrong");
      }
    }

    fetchMovieData();
  }, [searchTerm]); // Run the effect whenever `searchTerm` changes

  return (
    <>
      <p>The user is searching for "{searchTerm}"</p>
      <SearchMovieForm onSearch={handleSearch} />
      {movieData ? (
        <MovieInfo movieData={movieData} />
      ) : (
        <p>Type in the search bar to search for a movie</p>
      )}
    </>
  );
}
