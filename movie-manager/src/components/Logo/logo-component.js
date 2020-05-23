/* React import */
import React from "react";

/* Style */
import style from "./logo.module.scss";

/* Component implementation */
const Logo = () => (
  <>
    <img
      className={style.logo}
      alt={`Website Logo`}
      src={`${process.env.PUBLIC_URL}/svg/logo.svg`}
    />
  </>
);

export default Logo;
