import { connect } from "react-redux";

import { searchMovies } from "../effects/search-effect";

import { searchClear } from "../actions/search-actions";

import { getFetched, getIsSearching } from "../selectors/search-selectors";

import {  addToLibrary, addToFavorites } from "../effects/movie-effect";

import { 
  getMovieList,
  getFavList
} from "../selectors/movie-selectors";

import App from "../../App/app-component";

const mapDispatchToProps = {
  addToLibrary, 
  addToFavorites,
  searchMovies,
  searchClear,
};

const mapStateToProps = ({movieLibrary: state }) => {

  return {
    search: {
      fetched: getFetched(state),
      isSearching: getIsSearching(state),
    },
    category: {
      userMovies: getMovieList(state),
      userMoviesFav: getFavList(state),
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);