import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("Popular Movies:", movies.popularMovies);
  return (
    // Note: To use z axis, the position property like relative should exist.
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
