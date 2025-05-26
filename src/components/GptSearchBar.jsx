import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB DB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // Making an API call to OpenAi GPT API. and get movie results.
    // Ideally all these API calls should be made in the backend
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given - Example: Lagaan, Race, Krrish, Dangal, Koi Mil gaya";
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResults?.choices[0]?.message?.content);

    // Converts the gptResults into an array.
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    // For each movie, searching TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // The above API will not return the movies but instead it will return an array of Promises.
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray); // This function is to resolve all promises.
    console.log(tmdbResults);
    // Sending multiple data through a single action.
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black/85 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="p-4 m-4 bg-white text-black col-span-9 rounded-lg" placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4" onClick={handleGPTSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
