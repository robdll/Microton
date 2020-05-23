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
  
  // useEffect( () => {
    //   if (props.auth) {
    //     props.getAllMovies()
    //   }
    // },
    // [props.auth]
  // );

  const searchActions = {
    addToLibrary: props.addToLibrary,
    searchMovies: props.searchMovies,
    clearSearch: props.searchClear
  }

  const navbar = <nav className={style.navbar}> <Logo /> </nav>;

  const search = <Search status={props.search} actions={searchActions}/>

  const categoryActions = {
    addToLibrary: props.addToLibrary,
    selectMovie: props.selectMovie,
    movieSelectionClear: props.movieSelectionClear,
    updateMovie: props.updateMovie,
    switchLibrary: props.switchLibrary,
    deleteMovie: props.deleteMovie
  }
  let toWatchCategories, seenCategories;
  const spacer = <span className={style.spacer}></span>;
  if(props.category.userMovies.length) {
    const toWatch = {}
    toWatch.name = `Favorites`;
    toWatch.list = props.category.userMovies.filter( m => !m.watched);
    toWatch.selection =  props.category.selection;
    toWatchCategories = <Category status={toWatch} actions={categoryActions} />;
    const watched = {}
    watched.name = `Watch List`;
    watched.list = props.category.userMovies.filter( m => m.watched);
    watched.selection =  props.category.selection;
    seenCategories = <Category status={watched} actions={categoryActions} />;
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
        {seenCategories}
        {spacer}
      </main>

    </>
  );
}


export default App;
