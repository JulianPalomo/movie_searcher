import { useCallback, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';

function App() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const { movies, getMovies } = useMovies({ search, sort });

    const debouncedGetMovies = useCallback(
      debounce(search => {
        console.log('search', search)
        getMovies({ search })
      }, 300)
      , [getMovies]
)

    const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setSearch(newQuery);
    debouncedGetMovies(newQuery);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className='page'>
      <header>
        <h1>Movie Searcher</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, The Big Fish...'
          />
          <input type='checkbox' onChange={handleSort}></input>
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
