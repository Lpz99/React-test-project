import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='container'>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/200/300'} alt={movie.Title}/>
      <h4>{movie.Title}</h4>
      <p>{movie.Type}</p>
      <p>{movie.Year}</p>
    </div>
  )
}

export default MovieCard;