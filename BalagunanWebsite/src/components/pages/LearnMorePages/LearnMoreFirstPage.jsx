// eslint-disable-next-line no-unused-vars
import React from "react";
import road from "@/assets/road.png";
const LearnMoreFirstPage = () => {
  return (
    <div className="flex flex-col items-center h-auto mb-20">
      {/* Heading */}
      <h1 className="py-5 text-[#237D31] font-semibold text-3xl text-center">
        About Barangay
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {/* Left part */}
        <div className="flex-1 flex flex-row items-center justify-center pt-16">
          <img src={road} alt="road" className="max-h-[400px] min-h-[100px]" />
        </div>
        {/* right part */}
        <div className="flex-1 flex flex-col h-auto max-w-[900px] text-center md:text-left">
          <h1 className="text-[#263238] font-semibold text-2xl py-5">
            Barangay History
          </h1>
          <p className="text-justify text-[#263238] font-normal">
            Once a forested area inhabited by the Mandaya and Aeta tribes,
            Balagunan derived its name from the “Balagun” plant, or rattan,
            which was abundant in the area. Officially part of the Municipality
            of Sto. Tomas since 1959, Balagunan has grown through visionary
            leadership and resilient communities.
            <br />
            <br /> Key milestones include the construction of primary schools,
            logging road improvements, and resettlement efforts that welcomed
            migrants across Luzon, Visayas, and Mindanao. Over the decades,
            committed leaders like Pedro Rosal, Eusebio Cabiling, and Crisostomo
            Magallanes brought education, electrification, health centers, and
            economic projects. Notably, the barangay thrived with
            foreign-assisted programs, including World Bank and J ICA-funded
            infrastructure like roads, bridges, and irrigation systems. <br />
            <br />
            Today, Balagunan stands as a progressive and vibrant barangay, known
            for its agricultural contributions, particularly its banana
            plantations, which support local livelihoods and global trade. With
            a focus on development and community welfare, the barangay continues
            to grow toward a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreFirstPage;
