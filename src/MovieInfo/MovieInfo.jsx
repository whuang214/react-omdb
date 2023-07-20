export default function MovieInfo({ movieData }) {
  return (
    <div>
      <h2>{movieData.Title}</h2>
      <img src={movieData.Poster} alt={movieData.Title} />
      <p>Year: {movieData.Year}</p>
      <p>Rated: {movieData.Rated}</p>
      <p>Released: {movieData.Released}</p>
      <p>Runtime: {movieData.Runtime}</p>
      <p>Genre: {movieData.Genre}</p>
      <p>Director: {movieData.Director}</p>
      <p>Actors: {movieData.Actors}</p>
      <p>Plot: {movieData.Plot}</p>
      <p>Awards: {movieData.Awards}</p>
      <p>IMDb Rating: {movieData.imdbRating}</p>
      <p>Metascore: {movieData.Metascore}</p>
    </div>
  );
}
