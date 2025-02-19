// eslint-disable-next-line no-unused-vars
import React from "react";
import vision from "@/assets/vision.svg";
import mission from "@/assets/mission.svg";

const LearnMoreSecondPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto px-4 py-10 ">
      {/* Left part */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.851350407047!2d125.58890147456896!3d7.481661692530346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f94b8ee00d5e2b%3A0xf6c14f94852ddf1!2sBalagunan%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1739366648931!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Right part */}
      <div className="flex-1 flex flex-col gap-5 h-auto max-w-[1000px]">
        <div className="flex flex-row items-center justify-center md:justify-start">
          <img
            src={mission}
            alt="mission"
            className="max-h-[50px] min-h-[25px]"
          />
        </div>
        <h1 className="text-[#263238] font-semibold text-2xl text-center md:text-left">
          Our Mission
        </h1>
        <p className="text-justify text-[#263238] font-normal">
          Enact ordinance on agriculture programs and services geared towards
          the improvement of the quality of life of the people; Support
          Cooperatives to foster unity, promote sustainable livelihood programs
          and to achieve total development; Provide Infrastructure Facilities
          for basic services delivery; Strictly implement the provisions of RA
          9003 for a clean environment, as well as provision of medical services
          for a healthy populace; Enact ordinances to maintain the peace and
          order situation of the community; Protect the rights of the youth;
          Pagmugna ug malinawon, han-ay nga komunidad; pag palambo sa maayong
          hiyas ug espirituhanong pag-kinabuhi sa mga lumulupyo;
        </p>

        <div className="flex flex-row items-center justify-center md:justify-start">
          <img
            src={vision}
            alt="vision"
            className="max-h-[50px] min-h-[25px]"
          />
        </div>
        <h1 className="text-[#263238] font-semibold text-2xl text-center md:text-left">
          Our Vision
        </h1>
        <p className="text-justify text-[#263238] font-normal">
          With empowered, sincere, and dedicated barangay officials and
          citizenry, we envision Barangay Balagunan as a Progressive and
          Peaceful Community achieving sustainable development. <br />
          Barangay Balagunan Strives to become: <br />
          Usa ka malamboon nga Barangay sa Munisipalidad sa Santo Tomas,
          tinubdan sa daghang responsable, makugihon, maki-angayun ug mga
          relihiyosong mga lumulopyo. Inubanan usab sa pagdaghan sa mga
          kasagingan, balay patigayun, hayahay nga pagpanarbaho, modernong
          insprastraktura, hapsay nga panggobyerno, kalinaw sa pagpuyo, maayong
          kapaninguhaan sa panginabuhi, ug kalimpyo sa Barangay ug kina-iyahan.
        </p>
      </div>
    </div>
  );
};

export default LearnMoreSecondPage;
