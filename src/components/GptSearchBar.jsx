import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 bg-white text-black col-span-9 rounded-lg" placeholder={lang[langKey].gptSearchPlaceHolder} />
        <button className="py-2 px-4 bg-red-600 text-white rounded-lg col-span-3 m-4">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
