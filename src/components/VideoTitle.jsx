import React from "react";
import { Play } from "lucide-react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-x-4">
        <button className="bg-white text-black font-bold px-6 py-2 rounded flex items-center gap-2 hover:bg-opacity-80 transition duration-200 cursor-pointer">
          <Play className="w-5 h-5" />
          Play
        </button>
        <button className="bg-gray-500 text-black font-bold px-6 py-2 rounded flex items-center gap-2 hover:bg-opacity-80 transition duration-200 cursor-pointer">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
