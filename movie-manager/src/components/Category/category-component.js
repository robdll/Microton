/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */
import MovieCard from "../MovieCard/movie-card-component";

/* Children components */

/* Style */
import style from "./category.module.scss";

/* Component implementation */
const Category = function(props) {

  const categoryName = props.status.name;
  const isSeen = categoryName !== 'Watch List';
  const header = (
    <header className={`${style.header} ${isSeen ? style.seenHeader : ''}`}>
      <span className={`${style.headerSpan} ${isSeen ? style.seenSpan : ''}`} />
      <span>{categoryName}</span> 
    </header>
  );


  const movies = props.status.list.map((movie) => {
    const movieSelected = props.status.selection && movie.id === props.status.selection.id ? style.movieSelected : ''
    return (  
      <div className={`${style.movieContainer} ${movieSelected}`} key={movie.id || movie.movie_id} 
           onClick={()=> {
              const selection = props.status.selection && props.status.selection.id === movie.id ?
                undefined : { ...movie, category: props.categoryName };
              props.actions.selectMovie(selection)
           }}>
        <MovieCard movie={movie} />
      </div>
    );
  });

  const moviesContainer = (
    <article className={style.moviesContainer}>{movies}</article>
  );

  return (
    <section className={style.section}>
      {header}
      {moviesContainer}
    </section>
  );
};

Category.propTypes = {
  movies: PropTypes.array,
  selected: PropTypes.bool,
  categoryName: PropTypes.string
};

export default Category;
