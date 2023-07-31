// AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <div className="py-10 pt-[70px] bg-white">
      <div className="container mb-5 mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">About Us</h2>
        <p className="text-gray-600 w-[60%] m-auto text-2xl text-center mb-8">
          We are Quick, Fast and Efficient on the servies we provide.
        </p>
        <p className="text-gray-700 w-[90%] m-auto text-lg leading-relaxed text-center">
          Our Track record of extensive and exclusive 20+ years hands-on
          expertise in the field of IT Assurance, Consulting and Certification
          Assessment Services with vide industry and engagement exposures.
          Having consultants with industry reputed and globally accepted
          qualifications and certifications. At NUK 9 Deliveries is always a Top
          Priority Our Expertise guarantees 100% improvement on the
          client&apos;s Process, Security and Practices (PSP). Your Governance,
          Risk, Compliance and Information Security services under on roof, that
          not only enables you to achieve the needs of the stake holders but
          also shocast Risk on Security Investments (ROSI) to the Top
          Management.
        </p>
      </div>
      <div className="relative w-[80%] h-[40px] m-auto">
        <img
          src="assets/Img/bg1.jpg" // Replace with the path to your first image
          alt="Image 1"
          className="w-[550px] mt-10 h-[300px] z-1 object-cover absolute top-[40px] left-[30%] transform -translate-x-1/4 -translate-y-1/4 rounded-xl"
        />

        <img
          src="assets/Img/bg2.jpg" // Replace with the path to your second image
          alt="Image 2"
          className="w-[550px] h-[300px] z-0 object-cover absolute top-[200px] right-[25%] transform translate-x-1/4 -translate-y-1/4 rounded-xl"
        />
      </div>
      <div className="container mt-[480px] mx-auto px-4">
        <p className="text-gray-600 w-[90%] m-auto text-lg text-center mb-8">
          Information Systems plays an imperative role to make organizational
          success and create a brand image in minds of customers NUK 9
          Information Security Auditors LLP, commonly referred as,
          <b>“NUK 9 Auditors”</b>, leads into it.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
