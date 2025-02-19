// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "@/components/ui/button";

const FirstSection = () => {
  return (
    <div className="flex flex-row justify-between h-screen">
      {/* Left Div  Text*/}
      <div className="flex flex-col items-center mb-40 justify-center w-1/2">
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row">
            <h1 className="text-5xl font-bold text-[#263238]">Barangay</h1>
            <h1 className="text-5xl font-bold pl-2 text-[#237D31]">Document</h1>
          </div>
          <h1 className="text-5xl font-bold tracking-wide text-[#263238]">
            Requesting System
           </h1>
          <p className="text-[#263238]">
            Make your document request simple and hassle-free.{" "}
          </p>
          <Button variant="customizedWithBG" className="w-36">
            Request
          </Button>
        </div>
      </div>

      {/* Right div or Logo */}
      <div className="flex items-center justify-center  mb-40 w-1/2">
        <img
          className="h-4/5"
          src="src/assets/animatedDocument.png"
          alt="Animated Document"
        />
      </div>
    </div>
  );
};

export default FirstSection;
