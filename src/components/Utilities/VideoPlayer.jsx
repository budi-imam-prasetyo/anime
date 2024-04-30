"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0 transition-all duration-300" onClick={handleVideoPlayer}>
        <button className="text-color-primary float-right bg-color-secondary px-3 rounded-tl-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button className="fixed p-2 rounded-full bottom-5 right-5 bg-color-primary text-color-dark text-lg hover:bg-color-accent transition-all shadow-xl" onClick={handleVideoPlayer}>
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
