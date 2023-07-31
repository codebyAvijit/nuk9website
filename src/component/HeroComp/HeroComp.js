import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
const HeroComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClickIcon = () => {
    if (isModalOpen === false) {
      openModal();
    } else {
      closeModal();
    }
  };
  return (
    <div className="flex items-center z-0 relative mb-[200px]">
      {/* Left Content */}
      <div className="w-1/2 p-8 h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-20 mb-4">
          NUK 9 Information Security Auditors LLP
        </h1>
        <h3 className="text-2xl font-bold mb-4">
          Governance | Risk | Compliance | Security | Coaching
        </h3>
        <h3 className="text-4xl font-bold mb-4">
          Destination for all InfoSec{" "}
          <span style={{ color: "orangered" }}>Compliances</span>
        </h3>
        <p className="text-lg text-center">
          Information Systems plays an imperative role to make organizational
          success and create a brand image in minds of customers NUK 9
          Information Security Auditors LLP, commonly referred as, “NUK 9
          Auditors”, leads into it. India&apos;s first LLP Company, driven
          professionally and fully Focused, Governed and Managed in the arena of
          Information Systems Security, GRC, Certification and Training
          Assurance Services.
        </p>
        {/* Add more content as needed */}
      </div>

      {/* Right Image */}
      <div className="w-1/2 h-screen relative">
        <img
          src="assets/Img/tree.jpg"
          alt="HeroComponent Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[390px] left-[330px] w-[100px] h-[100px] flex items-center justify-center">
          {/* <PlayCircleOutlineIcon classname="" onClick={onClickIcon} /> */}
          <img
            src="assets/Img/play.png"
            className="cursor-pointer"
            onClick={onClickIcon}
          />
        </div>
      </div>
      <div>
        {/* Your component content */}
        <VideoPlayer
          videoUrl="https://www.example.com/your-video.mp4"
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
        {/* Your component content */}
      </div>
      <div className="absolute bottom-[-100px] flex justify-between w-full items-center">
        <FeaturedServices />
      </div>
    </div>
  );
};

export default HeroComponent;
