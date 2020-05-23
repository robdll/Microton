/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Style */
import style from "./movie-card.module.scss";

/* Component implementation */
const MovieCard = function(props) {
  const background = {
    backgroundImage: `url(${props.movie.url})`
  };

  const spacerImg = "./img/movie-spacer.png";
  return (
    <>
      <div style={background} className={`${style.movieCard} ${props.movie.isFetchinCover ? style.fetching : ''}`}>
        <img className={style.spacer} src={spacerImg} alt={props.movie.title} />
      </div>
    </> 
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object
};

export default MovieCard;
