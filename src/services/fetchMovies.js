const API_KEY = 'b0dfaa08';

export const fetchMovies = async ({ search }) => {

    if (search === '') return

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search
        
        return movies?.map((movie) => ({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            id: movie.imdbID
        }))
    }
    catch (e) {
        throw new Error('Error searching movies');
    }
}