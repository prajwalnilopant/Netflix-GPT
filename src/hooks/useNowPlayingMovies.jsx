import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store.
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results); // This statement prints the object twice. The reason behind this is because of the strict mode which is enabled in main.jsx file.
    // Note: The object is printed twice only while developing not during the production build.
    // Reason: It is a react thing where react renders the app twice to check for the inconsistencies between the calls and throws an error if there's any inconsistency.
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // Memoization.
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
