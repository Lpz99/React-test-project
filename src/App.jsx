import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'


function App() {
  const [search, setSearch] = useState('');

  const [movieBase, setMovieBase] = useState([]);

  
  const apiUrl = 'http://www.omdbapi.com/?apikey=8da91f82';
  
  async function runMovie(title) {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovieBase(data.Search);
  }
  
  useEffect(() => {
    runMovie('Superman')
  }, []
  )

  const card = movieBase.map(item => (< MovieCard movie={item} />));

  return (
    <>
      <div className='navbar'>
      <h1>Movie</h1>
      <div className='searchBar'>
        <input placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e)=> e.key === 'Enter' ? runMovie(search) : null }/>
        <button onClick={() => runMovie(search)}>Search</button>
      </div>
      </div>
      <div className='card-container'> 
        {card}
      </div>
    </>
  )
}

export default App
