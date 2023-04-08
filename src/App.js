import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './component/MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=408e1a5b'

const movie1 = {
  "Title": "Batman Beyond: Return of the Joker",
  "Year": "2000",
  "imdbID": "tt0233298",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('joker');
  }, []);

  return (
    <div className='App'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        >

        </img>
      </div>

      {movies?.length > 0
        ?(
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No Movies</h2>
          </div>
        )
      }


    </div>
  );
};

export default App;
