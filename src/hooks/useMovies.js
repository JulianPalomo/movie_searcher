import { useCallback, useMemo, useState } from 'react';
import { fetchMovies } from '../services/fetchMovies';
export function useMovies({ search, sort }) {

  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(async({search}) => {
      const newMovies = await fetchMovies({ search });
      setMovies(newMovies);
    }, []);

  ///UseMemo for controlling when the sort is applied
  const sortedMovies = useMemo(() => {
    return sort ?
      [...movies].sort((a, b) => a.year - b.year)
      : movies
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies };
}