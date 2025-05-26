import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img src={BG_URL} alt="background-image" className="w-full h-screen object-cover" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
