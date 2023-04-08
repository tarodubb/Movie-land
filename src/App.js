import React from 'react';
import { useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=408e1a5b'

const movie1 = {
  "Title": "Batman Beyond: Return of the Joker",
  "Year": "2000",
  "imdbID": "tt0233298",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmRmODEwNzctYzU1MS00ZDQ1LWI2NWMtZWFkNTQwNDg1ZDFiXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value='superman'
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        >

        </img>
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
