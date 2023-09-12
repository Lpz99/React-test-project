import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'

function App({router}) {
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
      <Navbar search={search} setSearch={setSearch} runMovie={runMovie}/>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'> 
        {card}
      </div>

      </>
  )
}

export default App
