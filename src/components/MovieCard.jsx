import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='flex flex-col m-5 justify-center items-center hover:scale-110 transition-all duration-500'>
      <img className='w-full' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/200/300'} alt={movie.Title}/>
      <h4>{movie.Title}</h4>
      <p>{movie.Type.toUpperCase()}</p>
      <p>{movie.Year}</p>
    </div>
  )
}

export default MovieCard;