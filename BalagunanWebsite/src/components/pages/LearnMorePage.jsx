// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "@/SecondaryLayout/Navbar";
import Footer from "@/SecondaryLayout/Footer";
import LearnMoreFirstPage from "./LearnMorePages/LearnMoreFirstPage";
import LearnMoreSecondPage from "./LearnMorePages/LearnMoreSecondPage";
import LearnMoreThirdPage from "./LearnMorePages/LearnMoreThirdPage";
const LearnMorePage = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <body className="flex flex-col items-center">
        <LearnMoreFirstPage />
        <LearnMoreSecondPage />
        <LearnMoreThirdPage />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LearnMorePage;
