 export function ListOfMovies({movies})
 {
    return (
      <ul className="movies">
        {
          movies.map((movie) => (
            <li className='movie' key={movie.id}
            style={{listStyle: 'none'}}>
              <h3 style={{color: 'white'}}>{movie.title}</h3>
              <p style={{color: 'white'}}>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
}
    

export function RenderNoResults (){
    return <p>No movies found for that search</p>
}
  
export function Movies({movies}) { 

    const hasMovies = movies?.length > 0;

    return(
        hasMovies ? 
        <ListOfMovies movies={movies}></ListOfMovies>
        :
        <RenderNoResults></RenderNoResults>
    )
}