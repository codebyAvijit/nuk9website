// CloudServices.js
import React from "react";
const seroff = [
  {
    desc: "An Information Technology (IT) Audit is review of Organization's Management, Operational and Technical Controls.",
    heading: "System Audit",
  },
  {
    desc: "An element of managerial science concerned with the identification, measurement, control, and minimization of uncertain events.",
    heading: "Risk Assessment",
  },
  {
    desc: "An assessment conducted to determine the degree to which information systems controls are correctly implemented.",
    heading: "System Infiltration",
  },
  {
    desc: "Our Portfolio of Security Framework helps stake holders to abreast in the field of Information Security.",
    heading: "GRCS",
  },
  {
    desc: "The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative.",
    heading: "Security Coaching",
  },
];

const CloudServices = ({ heading, desc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8">
      {/* Left Portion */}
      <div className="md:w-3/5 p-4 h-[100px]">
        <h2 className="text-4xl font-bold mb-4">Offered Services</h2>
        <p className="text-lg text-gray-700 mb-6">
          Services that are conducted to ensure the information systems,
          processes, technology, functions and above all people who runs the
          show are not exposed to threats, vulnerabilities and risks.
        </p>

        <div className="bg-white rounded-lg border-2 shadow-lg p-6 flex justify-around flex-wrap m-2">
          {/* Left Side (Plain) */}
          {seroff.map((item, key) => {
            return (
              <div
                key={key}
                className="w-1/2 rounded-tr-lg rounded-br-lg p-2 rounded-2xl bg-white text-gray-400 hover:bg-red-600 transition-colors duration-300"
              >
                <h2 className="text-center text-xl text-black font-bold">
                  {item.heading}
                </h2>
                <p className="hover:text-white">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Add more services as needed */}
      </div>

      {/* Right Portion */}
      <div className="md:w-2/5 p-4">
        <img
          src="assets/Img/orange.png" // Replace with the path to your cloud services image
          alt="Cloud Services"
          className="w-full h-[500px] rounded "
        />
      </div>
    </div>
  );
};

export default CloudServices;
