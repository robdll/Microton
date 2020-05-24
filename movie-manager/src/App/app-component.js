/* React imports */
import React from "react";

/** Children components */
import Search from "./Search/search-component";

/** Reusable components */
// TODO find a way to use path from src. see:  https://stackoverflow.com/questions/44063592/react-import-root-path-helper
import Logo from "../components/Logo/logo-component";
import Category from "../components/Category/category-component";

/* Style */
import style from "./app.module.scss";

/* Component implementation */
const App = (props) => {
  
  const searchActions = {
    addToLibrary: props.addToLibrary,
    addToFavorites: props.addToFavorites,
    searchMovies: props.searchMovies,
    clearSearch: props.searchClear
  }

  const navbar = <nav className={style.navbar}> <Logo /> </nav>;

  const search = <Search status={props.search} actions={searchActions}/>

  let toWatchCategories, favCategories;
  const spacer = <span className={style.spacer}></span>;

  if(props.category.userMovies.length) {
    const watched = {}
    watched.name = `Watch List`;
    watched.list = props.category.userMovies;
    toWatchCategories = <Category status={watched}  />;
  }

  if(props.category.userMoviesFav.length) {
    const toWatch = {}
    toWatch.name = `Favorites`;
    toWatch.list = props.category.userMoviesFav;
    favCategories = <Category status={toWatch} />;
  }

  return (
    <>
      <div className={style.backImg} />

      {/* 
        Following markup has been added t preload the movie card spacer.
        Removing this would result in a spinner displacement
      */}
      <img src={"./img/movie-spacer.png"} alt={''} />

      {navbar}

      {search}
      
      <main className={style.main}>
        {toWatchCategories}
        {favCategories}
        {spacer}
      </main>

    </>
  );
}


export default App;
