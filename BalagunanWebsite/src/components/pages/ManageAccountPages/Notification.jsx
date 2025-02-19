// eslint-disable-next-line no-unused-vars
import React from "react";
import approved from "@/assets/approved.svg";
import rejected from "@/assets/rejected.svg";
import ellipsis from "@/assets/Ellipsis.png";
const Notification = () => {
  return (
    <div className="pt-7 space-y-1">
      {/* Approved Notification */}
      <div className="flex gap-3 items-center border-2 rounded-r-lg overflow-hidden bg-green-500/10">
        <div className="w-4 min-h-24 bg-[#0C9] rounded-r-lg"></div>
        <img src={approved} alt="" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-green-800">Approved</h3>
          <p className="text-sm text-gray-700">
            Your request has been approved successfully.
          </p>
          <p className="text-xs text-gray-500 mt-1">1d</p>
        </div>
        <img className="ml-auto pr-5" src={ellipsis} alt="" />
      </div>

      {/* Rejected Notification */}
      <div className="flex gap-3 items-center border-2 rounded-r-lg overflow-hidden bg-red-500/10">
        <div className="w-4 min-h-24 bg-[#EB5757] rounded-r-lg"></div>
        <img src={rejected} alt="" />
        <div className="flex flex-col flex-grow">
          <h3 className="text-sm font-semibold text-red-800">Rejected</h3>
          <p className="text-sm text-gray-700">
            Your Barangay Clearance document request was rejected because of an
            invalid purpose. Please resubmit.
          </p>
          <p className="text-xs text-gray-500 mt-1">1d</p>
        </div>
        <img className="ml-auto pr-5" src={ellipsis} alt="" />
      </div>
    </div>
  );
};

export default Notification;
