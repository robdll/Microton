
import { searchStart, searchSuccess, searchFailure } from '../actions/search-actions'


export function searchMovies(movieTitle) {
    const apiKey = '5b22a10bb7349a0914d536d28d20547a';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}&language=en`;
    const opt = { method: 'GET' };
    return async dispatch => {
        dispatch(searchStart());
        return fetch( url, opt)
            .then(r => r.json())
            .then(r => r.results)
            .then(r => {
                const suggestion = r
                    .filter( movie => movie.original_language === 'en' )
                    .map( movie => ({
                        id: movie.id,
                        title: movie.original_title,
                        year: movie.release_date.substring(0,4),
                        url: movie.poster_path
                    }));
                dispatch(searchSuccess(suggestion)) 
            })
            .catch(r => { dispatch(searchFailure(r)) });
    };

}