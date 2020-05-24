import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_CLEAR } from "../actions/search-actions";
import { 
  MOVIE_ADD_TO_WATCH_SUCCESS, MOVIE_ADD_TO_FAVORITES_SUCCESS,
  MOVIE_FETCH_COVERS_START, MOVIE_FETCH_COVERS_SUCCESS, MOVIE_FETCH_COVERS_FAILURE
} from "../actions/movie-actions";

const initialState = {
  search: {
    isSearching: false,
    fetched: []
  },
  movieSelected: undefined,
  isFetching: false,
  userMovies: [],
  userMoviesFav: []
};

export default function reducer(state = initialState, action = {}) {

    console.log('Action: ', action.type);
    if( action.payload) console.log('Payload: ', action.payload);

    const newState = { ...state };

    switch (action.type) {
      case MOVIE_FETCH_COVERS_START: {
        newState.userMovies = newState.userMovies.map( movie => ({ ...movie, isFetchinCover: true}));
        return newState;
      }
      case MOVIE_FETCH_COVERS_SUCCESS: {
        newState.userMovies = newState.userMovies.map(movie => {
          return { 
            movieId: movie.id,
            ...movie, 
            ...action.payload.find( payload => movie.movie_id === payload.id) 
          };
        });
        return newState;
      }
      case MOVIE_FETCH_COVERS_FAILURE: {
        newState.userMovies = newState.userMovies.map( movie => {
          movie.isFetchinCover = false;
          movie.url = movie.url || './img/not_available.jpeg';
          return movie;
        });
        return newState;
      }
      case MOVIE_ADD_TO_WATCH_SUCCESS: {
        let alreadyIn = false;
        newState.userMovies.forEach( m => {
          if( action.payload.id === m.id) {
            alreadyIn = true;
          }
        })
        if(!alreadyIn) {
          newState.userMovies.push(action.payload)
        }
        console.log(newState.userMovies)
        return newState;
      }
      case MOVIE_ADD_TO_FAVORITES_SUCCESS: {
        let alreadyIn = false;
        newState.userMoviesFav.forEach( m => {
          if( action.payload.id === m.id) {
            alreadyIn = true;
          }
        })
        if(!alreadyIn) {
          newState.userMoviesFav.push(action.payload)
        }
        return newState;
      }
      case SEARCH: {
        newState.search.isSearching = true;
        return newState;
      }
      case SEARCH_SUCCESS: {
        newState.search.isSearching = false;
        newState.search.fetched = action.payload
        return newState;
      }
      case SEARCH_CLEAR:
      case SEARCH_FAILURE: {
        newState.search.isSearching = false;
        newState.search.fetched = [];
        return newState;
      }
      default:
        return state;
    }
}