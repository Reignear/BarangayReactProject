// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "@/SecondaryLayout/Navbar";
import { Outlet } from "react-router-dom";
import personIcon from "@/assets/accountperson.png";
import bellIcon from "@/assets/accountbell.png";
import feedIcon from "@/assets/accountfeed.png";
import settingsIcon from "@/assets/accountsettings.png";

const ManageAccount = () => {
  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  

  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-32 pt-5 pb-10 gap-2">
        <div className="min-h-[570px] w-full md:w-20 flex-none rounded-b-lg">
          <div className="min-h-10"></div>
          <div className="min-h-[530px] rounded-lg shadow-lg">
            <div className="min-h-14 bg-[#90E6F5] rounded-t-lg"></div>
            <div className="flex flex-col items-center">
              <ul className="flex flex-col items-center gap-10 mt-10">
                <div>
                  <li>
                    <img src={personIcon} alt="" />
                  </li>
                </div>
                <div>
                  <li>
                    <img src={bellIcon} alt="" />
                  </li>
                </div>
                <div>
                  <li>
                    <img src={feedIcon} alt="" />
                  </li>
                </div>
                <div>
                  <li>
                    <img src={settingsIcon} alt="" />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-64 flex-1 flex flex-col min-h-[570px]">
          <div className="min-h-10 flex flex-row items-center justify-between">
            <h1 className="flex text-[#263238] text-[20px] font-semibold">
              Welcome, Name here
            </h1>
            <h1 className="flex text-[#263238] text-[17px] italic font-semibold">
              {getCurrentDate()}
            </h1>
          </div>
          <div className="min-h-14 bg-gradient-to-r from-[#90E6F5] to-green-200 rounded-t-lg flex items-center pl-5 text-[#263238] text-[20px] font-semibold ">
            <h1>Profile</h1>
          </div>
          <div className="min-h-[475px] rounded-lg shadow-lg">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageAccount;
