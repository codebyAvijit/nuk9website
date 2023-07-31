// OurClients.js

import React from "react";

const OurClients = () => {
  // Sample client logos, replace these with your actual client logos
  const clientLogos = [
    {
      imgData: "assets/Img/tatapower.png",
    },
    {
      imgData: "assets/Img/tatapower.png",
    },
    {
      imgData: "assets/Img/tatapower.png",
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Our Clients</h2>
        <div className="flex flex-wrap justify-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="w-32 h-24 p-4">
              <img
                src={logo.imgData}
                alt={`Client ${index + 1}`}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
