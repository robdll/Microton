/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */
import MovieCard from "../MovieCard/movie-card-component";

/* Style */
import style from "./category.module.scss";

/* Component implementation */
const Category = function(props) {

  const categoryName = props.status.name;
  const isSeen = categoryName === 'Favorites';
  const header = (
    <header className={`${style.header} ${isSeen ? style.seenHeader : ''}`}>
      <span className={`${style.headerSpan} ${isSeen ? style.seenSpan : ''}`} />
      <span>{categoryName}</span> 
    </header>
  );


  const movies = props.status.list.map((movie) => {
    return (  
      <div className={`${style.movieContainer}`} key={movie.id || movie.movie_id} >
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
