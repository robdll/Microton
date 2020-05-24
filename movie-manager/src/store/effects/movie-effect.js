
import { 
    getAllStart, getAllSuccess, getAllFailure,
    fetchCoversStart, fetchCoversSuccess, fetchCoversFailure,
    addToWatchSuccess, addToFavoritesSucces
} from '../actions/movie-actions'

export function getAllMovies() {
    const token = localStorage.getItem('login-token')
    const url = `https://nameless-tundra-74426.herokuapp.com/api/v1/movies` 
    const opt = { 
        method: 'GET', 
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    } 
    return async dispatch => {
        dispatch(getAllStart()) 
        return fetch(url, opt)
            .then((r) => {
                if(r.ok) { 
                    return r.json()  
                } 
                else {
                    const serverError = 'Server not responding. Try later.' 
                    return r.json().then(r => {
                        let unified = {} 
                        if (r.errors && Array.isArray(r.errors)) r.errors.forEach( item => { unified = { ...unified, ...item } }) 
                        if (r.errors && !Array.isArray(r.errors)) unified.err = r.errors.detail 
                        throw r.errors ? Object.keys(unified).map( i => `${i} ${unified[i]}.`).join(`\n`) : serverError
                    })
                }
            })
            .then(r => r.data)
            .then(m => { 
                dispatch(getAllSuccess(m)) 
                fetchCovers(dispatch, m) 
            })
            .catch(err => { 
                console.log(err)
                dispatch(getAllFailure(err)) 
            }) 
    } 
}

// TODOS should be renamed fetchDeatails
async function fetchCovers(dispatch, movies) {
    const apiKey = '5b22a10bb7349a0914d536d28d20547a' 
    dispatch(fetchCoversStart(movies))
    const url = `https://api.themoviedb.org/3/movie/` 
    const opt = { 
        method: 'GET', 
        headers:{ 'Content-Type': 'application/json' }
    }
    Promise.all(
        movies.map( m => {
            return fetch(`${url}${m.movie_id}?api_key=${apiKey}&append_to_response=credits`, opt) 
                .then( r  => r.ok ? r.json() : { id: m.movie_id } ) 
        })
    ).then( movies => {
        movies = movies.map( movie => {
            let director = '' 
            let cast = [] 
            if(movie.credits) {
                director = movie.credits.cast ? movie.credits.crew.find(i => i.job === 'Director') : director 
                cast = movie.credits.cast ? movie.credits.cast.slice(0, 5) : cast 
                cast = cast.map( char => ({
                    name: char.name, 
                    id: char.id,
                    cover: char.profile_path ? `http://image.tmdb.org/t/p/w92/${char.profile_path}` : ''
                })) 
            }
            return {
                id: movie.id, 
                year: movie.release_date ?  movie.release_date.substring(0, 4) : '',
                overview: movie.overview, 
                title: movie.title,
                url: movie.poster_path ? `http://image.tmdb.org/t/p/w342/${movie.poster_path}` : './img/not_available.jpeg',
                rating: movie.vote_average,
                isFetchinCover: false,
                director,
                cast
            }
        })
        dispatch(fetchCoversSuccess(movies))
    })
    .catch( err => { 
        //TODOS should provide list of movies with cover linking to the img/not_available
        console.log(err)
        dispatch(fetchCoversFailure(err))
    })
}

export function addToLibrary(movie) {
    return async dispatch => {
        return dispatch(addToWatchSuccess( {...movie, isFetchinCover: false })) 
    } 
}


export function addToFavorites(movie) {
    return async dispatch => {
        return dispatch(addToFavoritesSucces( {...movie, isFetchinCover: false })) 
    } 
}
