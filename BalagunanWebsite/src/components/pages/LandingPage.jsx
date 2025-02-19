// eslint-disable-next-line no-unused-vars
import React from "react";
import FirstSection from "./LandingPages/FirstSection";
import SecondSection from "./LandingPages/SecondSection";
import ThirdSection from "./LandingPages/ThirdSection";
import Footer from "../../SecondaryLayout/Footer";
import Navbar from "@/SecondaryLayout/Navbar";
const LandingPage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <body>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
