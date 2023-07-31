// VideoPlayer.js

import React, { useState } from "react";

const VideoPlayer = ({ videoUrl, openModal, closeModal, isModalOpen }) => {
  return (
    <>
      <div className="cursor-pointer" onClick={openModal}>
        {/* Your icon here, e.g., a play button icon */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg> */}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="p-4">
            <button
              className="absolute top-[40px] right-[180px] p-2 text-3xl text-red-700"
              onClick={closeModal}
            >
              X
            </button>
            <video className="h-[80vh] w-[70vw]" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
