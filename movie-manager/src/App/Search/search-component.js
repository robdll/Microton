/* React imports */
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

/* Reusable components */

/* Children components */
import Suggestion from "./Suggestion/suggestion-component";

/* Style */
import style from "./search.module.scss";

/* Component implementation */
const Search = function(props) {

  const [searchTerm, setSearchTerm] = useState('');

  //updated after 1000 sec user stop typing
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  //fetch movies when debouncedSearchTerm updates
  useEffect( () => {
      if (debouncedSearchTerm) {
        props.actions.searchMovies(searchTerm)
      }
    },
    [debouncedSearchTerm]
  );
  
  const placeholder = "Search movie...";
  const name = "title";

  const suggestionActions = {
    addToLibrary: props.actions.addToLibrary,
    addToLibraryFav: props.actions.addToFavorites,
  }
  
  const suggestions = props.status.fetched.map((movie) => (
    <Suggestion key={movie.id} movie={movie} actions={suggestionActions}/>
  ));

  const suggestionContainer = suggestions.length === 0 ? 
    "" : <div className={style.suggestionContainer}> {suggestions} </div>;
  const deleteSearch = suggestions.length > 0 ? 
    <span className={style.clearSearch} 
      onClick={ () => {
        setSearchTerm('');
        props.actions.clearSearch();
      }
    }>X</span> : '';
   
  return (
    <section className={style.section}>
      <form className={style.form}>
        {deleteSearch}
        <input
          className={style.formInput}
          placeholder={placeholder}
          onChange={e => setSearchTerm(e.target.value)}
          name={name}
          value={searchTerm}
          autoComplete="off"
        />
        {props.status.isSearching && <div>Searching ...</div>}

      </form>

      {suggestionContainer}
    </section>
  );
};

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        // Set debouncedValue to value passed in after the specified delay
        setDebouncedValue(value);
      }, delay);
      // Return a cleanup function that will be called every time
      // useEffect is re-called (if value changes).
      // This prevents debouncedValue from changing if value is
      // changed within the delay period. Timeout gets cleared and restarted.
      return () => { clearTimeout(handler); };
    },
    [value] 
  );
  return debouncedValue;
}

Search.propTypes = {
  actions: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired
};

export default Search;
