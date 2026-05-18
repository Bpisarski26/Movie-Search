import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  function searchMovies() {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=53eaf0fc`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search)
      })
  }

  return (
    <div>
      <h1>Movie Search</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;