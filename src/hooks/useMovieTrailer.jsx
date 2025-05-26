import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch(); // Approach 2
  // const [trailerId, setTrailerId] = useState(null); ---> Approach 1

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // Fetch the trailer & updating the store with trailer video.
  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length == 0 ? filterData[0] : json.results[0];

    // setTrailerId(trailer.key); ---> Approach 1
    dispatch(addTrailerVideo(trailer)); // Approach 2
  };
  useEffect(() => {
    // Memoization
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
