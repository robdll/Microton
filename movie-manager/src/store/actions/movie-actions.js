
export const MOVIE_GET_ALL = "movie/GET_ALL_START";
export const MOVIE_GET_ALL_SUCCESS = "movie/GET_ALL_SUCCESS";
export const MOVIE_GET_ALL_FAILURE = "movie/GET_ALL_FAILURE";

export const MOVIE_FETCH_COVERS_START = "movie/MOVIE_FETCH_COVERS_START";
export const MOVIE_FETCH_COVERS_SUCCESS = "movie/MOVIE_FETCH_COVERS_SUCCESS";
export const MOVIE_FETCH_COVERS_FAILURE = "movie/MOVIE_FETCH_COVERS_FAILURE";

export const MOVIE_ADD_TO_WATCH = "movie/ADD_TO_WATCH_START";
export const MOVIE_ADD_TO_WATCH_SUCCESS = "movie/ADD_TO_WATCH_SUCCESS";
export const MOVIE_ADD_TO_WATCH_FAILURE = "movie/ADD_TO_WATCH_FAILURE";

export const MOVIE_ADD_TO_FAVORITES = "movie/ADD_TO_FAVORITES_START";
export const MOVIE_ADD_TO_FAVORITES_SUCCESS = "movie/ADD_TO_FAVORITES_SUCCESS";
export const MOVIE_ADD_TO_FAVORITES_FAILURE = "movie/ADD_TO_FAVORITES_FAILURE";

export const MOVIE_REMOVE_TO_WATCH = "movie/REMOVE_TO_WATCH";

export const MOVIE_SELECTION = "movie/SELECTION";
export const MOVIE_SELECTION_SUCCESS = "movie/SELECTION_SUCCESS";
export const MOVIE_SELECTION_FAILURE = "movie/SELECTION_FAILURE";

export const MOVIE_UPDATE_START = "movie/MOVIE_UPDATE_START";
export const MOVIE_UPDATE_SUCCESS = "movie/MOVIE_UPDATE_SUCCESS";
export const MOVIE_UPDATE_FAILURE = "movie/MOVIE_UPDATE_FAILURE";

export const MOVIE_DELETE_START = "movie/MOVIE_DELETE_START";
export const MOVIE_DELETE_SUCCESS = "movie/MOVIE_DELETE_SUCCESS";
export const MOVIE_DELETE_FAILURE = "movie/MOVIE_DELETE_FAILURE";

export const MOVIE_SELECTION_CLEAR = "movie/SELECTION_CLEAR";

export const SWITCH_LIBRARY_START = "movie/SWITCH_LIBRARY_START";
export const SWITCH_LIBRARY_SUCCESS = "movie/SWITCH_LIBRARY_SUCCESS";
export const SWITCH_LIBRARY_FAILURE = "movie/SWITCH_LIBRARY_FAILURE";


export function fetchCoversStart() {
  return {
      type: MOVIE_FETCH_COVERS_START,
  };
}

export function fetchCoversSuccess(movies) {
  return {
      type: MOVIE_FETCH_COVERS_SUCCESS,
      payload: movies
  };
}

export function fetchCoversFailure(err) {
  return {
      type: MOVIE_FETCH_COVERS_FAILURE,
      payload: err
  };
}

export function getAllStart() {
  return {
      type: MOVIE_GET_ALL,
  };
}

export function getAllSuccess(movies) {
  return {
      type: MOVIE_GET_ALL_SUCCESS,
      payload: movies
  };
}

export function getAllFailure(err) {
  return {
      type: MOVIE_GET_ALL_FAILURE,
      payload: err
  };
}


export function addToFavoritesSucces(movie) {
  return {
      type: MOVIE_ADD_TO_FAVORITES_SUCCESS,
      payload: movie
  };
}

export function addToWatchStart(movie) {
  return {
      type: MOVIE_ADD_TO_WATCH,
      payload: movie
  };
}

export function addToWatchSuccess(movie) {
  return {
      type: MOVIE_ADD_TO_WATCH_SUCCESS,
      payload: movie
  };
}

export function addToWatchFailure(err) {
  return {
      type: MOVIE_ADD_TO_WATCH_FAILURE,
      payload: err
  };
}

export function removeToWatch(movie) {
  return {
      type: MOVIE_REMOVE_TO_WATCH,
      payload: movie
  };
}

export function movieSelection(movie) {
  return {
      type: MOVIE_SELECTION,
      payload: movie
  };
}

export function movieSelectionClear() {
  return {
      type: MOVIE_SELECTION_CLEAR,
  };
}


export function updateMovieStart() {
  return {
      type: MOVIE_UPDATE_START,
  };
}

export function updateMovieSuccess(movie) {
  return {
      type: MOVIE_UPDATE_SUCCESS,
      payload: movie
  };
}


export function updateMovieFailure() {
  return {
      type: MOVIE_UPDATE_FAILURE,
  };
}


export function switchLibraryStart() {
  return {
      type: SWITCH_LIBRARY_START,
  };
}

export function switchLibrarySuccess(movie) {
  return {
      type: SWITCH_LIBRARY_SUCCESS,
      payload: movie
  };
}

export function switchLibraryFailure() {
  return {
      type: SWITCH_LIBRARY_FAILURE,
  };
}


export function deleteMovieStart() {
  return {
      type: MOVIE_DELETE_START,
  };
}

export function deleteMovieSuccess(movie) {
  return {
      type: MOVIE_DELETE_SUCCESS,
      payload: movie
  };
}


export function deleteMovieFailure() {
  return {
      type: MOVIE_DELETE_FAILURE,
  };
}