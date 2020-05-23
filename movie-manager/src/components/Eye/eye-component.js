/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */

/* Children components */

/* Style */
import style from "./eye.module.scss";

/* Component implementation */
const Eye = function(props) {
  const color = props.seen === true ? "#aad045" : "#888";
  return (
    <>
      <svg className={style.svg} onClick={ () => props.action( {...props.movie, watched: !!props.seen }) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.917 77.47">
        <rect id="Rectangle_9" data-name="Rectangle 9" width="86.917" height="77.47" fill={color}/>
        <g id="eye" transform="translate(15.116 22.674)">
          <path id="Path_30" data-name="Path 30" d="M28.142,98.725c-10.754,0-20.506,5.883-27.7,15.44a2.228,2.228,0,0,0,0,2.66c7.2,9.568,16.948,15.451,27.7,15.451s20.506-5.883,27.7-15.44a2.228,2.228,0,0,0,0-2.66C48.648,104.608,38.9,98.725,28.142,98.725Zm.771,28.588a11.838,11.838,0,1,1,11.042-11.041A11.845,11.845,0,0,1,28.913,127.313Zm-.357-5.457a6.374,6.374,0,1,1,5.953-5.952A6.364,6.364,0,0,1,28.556,121.856Z" transform="translate(0 -98.725)" fill="#fff"/>
        </g>
      </svg>
    </>
    );
  };
  
  Eye.propTypes = {
    seen: PropTypes.bool,
    eye: PropTypes.object,
    action: PropTypes.func,
    movie: PropTypes.object,
  };
  
  export default Eye;
  