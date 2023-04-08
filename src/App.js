import React from 'react';
import { useEffect } from 'react';

// 408e1a5b

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=408e1a5b'

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
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
