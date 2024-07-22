import React from "react";
import '../../Loader.css'

function Loader() {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <div className="loading">
        <div className="loading-text text-3xl font-bold">
          <span className="loading-text-words ">L</span>
          <span className="loading-text-words">O</span>
          <span className="loading-text-words">A</span>
          <span className="loading-text-words">D</span>
          <span className="loading-text-words">I</span>
          <span className="loading-text-words">N</span>
          <span className="loading-text-words">G</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
