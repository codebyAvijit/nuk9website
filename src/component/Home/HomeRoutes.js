import React from "react";
import Navbar from "../navbar/Navbar";
import HeroComponent from "../HeroComp/HeroComp";
import OurTeamTwo from "../OurTeam/OurTeamTwo";
import OurClients from "../OurClients/OurClients";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Navtwo from "../nav2/Navtwo";
import Footer from "../Footer/Footer";
import CloudServices from "../ClServices/ClServices";
const HomeRoutes = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <CloudServices />
      <OurTeamTwo />
      <OurClients />
      <AboutUs />
      <ContactUs />
      <Navtwo />
      <Footer />
      {/* <OurClients />
      <AboutUs />
      <ContactUs />
      <Navtwo /> */}
    </div>
  );
};

export default HomeRoutes;
