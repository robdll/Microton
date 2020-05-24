/* React import */
import React from "react";
import PropTypes from "prop-types";

/* Reausable components */
import MovieCard from "../../../components/MovieCard/movie-card-component";

/* Children components */
import style from "./suggestion.module.scss";
import Eye from "../../../components/Eye/eye-component";

/* Component implementation */
const Suggestion = function(props) {

  const movie = { ...props.movie }

  movie.url = movie.url ? `http://image.tmdb.org/t/p/${props.requiredWitdh}${movie.url}` : './img/not_available.jpeg';

  const card = <div className={style.cardContainer}>
      <MovieCard movie={movie} />
    </div>;

  const year = movie.year ? `(${movie.year})` : "";
  const { addToLibrary, addToLibraryFav } = props.actions;
  const starImg = "./img/star.png";
  const eyeImg = "./svg/eye.svg";
  console.log(addToLibrary)

  return (
    <article className={style.suggestion}>
      {card}
      <p className={style.title}>
        {movie.title} <span>{year}</span>
      </p>
      <div className={`${style.icon} ${style.unseen}`}> <img className={style.star} onClick={ () => addToLibraryFav( { ...movie, watched: !!props.seen }) } src={starImg} alt="star favorites" /> </div>
      <div className={`${style.icon} ${style.seen}`}> <img className={style.star} onClick={ () => addToLibrary( { ...movie, watched: !!props.seen }) } src={eyeImg} alt="eye icon" /> </div>
    </article>
  );
};

// TODO use shape see: https://reactjs.org/docs/typechecking-with-proptypes.html

Suggestion.defaultProps = {
  requiredWitdh: 'w92'
}

Suggestion.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Suggestion;
