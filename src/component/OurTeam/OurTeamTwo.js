import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "assets/Img/auditor.png",
    desc: "Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.",
    socialHandles: {
      facebook: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "FacebookIcon",
      },

      instagram: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "InstagramIcon",
      },
      linkedin: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "LinkedInIcon",
      },
    },
  },
  // Add more team members as needed
  {
    name: "John Doe",
    role: "CEO",
    image: "assets/Img/auditor.png",
    desc: "Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.",
    socialHandles: {
      facebook: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "FacebookIcon",
      },

      instagram: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "InstagramIcon",
      },
      linkedin: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "LinkedInIcon",
      },
    },
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "assets/Img/auditor.png",
    desc: "Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.",
    socialHandles: {
      facebook: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "FacebookIcon",
      },

      instagram: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "InstagramIcon",
      },
      linkedin: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "LinkedInIcon",
      },
    },
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "assets/Img/auditor.png",
    desc: "Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo. Sed at lorem.",
    socialHandles: {
      facebook: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "FacebookIcon",
      },

      instagram: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "InstagramIcon",
      },
      linkedin: {
        link: "https://www.facebook.com/johndoe",
        imgpath: "LinkedInIcon",
      },
    },
  },
];

const TeamMemberCard = ({ name, role, image, socialHandles }) => {
  return (
    <div className="bg-white text-red-600 hover:text-white hover:bg-red-400 p-6 w-[300px] rounded-lg shadow-md flex flex-col justify-center items-center">
      <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
        <img src={image} alt={name} className="w-8 h-8 rounded-full" />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-4">{role}</p>
      <div className="flex mt-4 w-[80%] justify-between">
        {/* <img
          src={socialHandles.facebook.imgpath}
          alt={name}
          className="w-8 h-8 cursor-pointer bg-red-600"
        /> */}
        <a href={socialHandles.facebook.link}>
          <FacebookIcon style={{ fontSize: "40px" }} />
        </a>
        <a href={socialHandles.instagram.link}>
          <InstagramIcon style={{ fontSize: "40px" }} />
        </a>
        <a href={socialHandles.linkedin.link}>
          <LinkedInIcon style={{ fontSize: "40px" }} />
        </a>
      </div>
    </div>
  );
};

const OurTeamTwo = () => {
  // Sample team member data, replace with your actual team member details
  return (
    <div className="py-10 pt-[70px] bg-gray-100">
      <div className="container mb-5 mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Our Team</h2>
        <p className="text-gray-600 w-[60%] m-auto text-2xl text-center mb-8">
          Meet the talented individuals who form the backbone of our
          organization. Each member brings unique skills and perspectives,
          contributing to our success.
        </p>
      </div>
      <div className="flex m-auto w-[95%] mt-[50px] justify-between items-center">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeamTwo;
