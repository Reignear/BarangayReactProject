import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import referenceKeyIcon from "@/assets/referenceKeyIcon.png";

const ReferenceKey = () => {
  return (
    <body className="flex flex-col md:flex-row justify-center items-center md:h-screen h-auto bg-[#FFF]">
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={referenceKeyIcon} className="h-full" alt="Image" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-4/6 space-y-5">
          <div className="flex flex-col space-y-2 text-start">
            <h1 className="text-5xl font-bold">Resident Verification</h1>
            <p>
              Enter your personal details to verify your residency and receive
              your reference number
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/2">
              <Label>First Name</Label>
              <Input placeholder="Reignear"></Input>
            </div>
            <div className="w-full md:w-1/2">
              <Label>Middle Name</Label>
              <Input placeholder="Berador"></Input>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/2">
              <Label>Last Name</Label>
              <Input placeholder="Magallanes"></Input>
            </div>
            <div className="w-full md:w-1/2">
              <Label>Birthdate</Label>
              <Input type="date" placeholder="MM/DD/YYYY"></Input>
            </div>
          </div>
          <div className="w-full">
            <Label>Email</Label>
            <Input type="email" placeholder="reignearm@gmail.com"></Input>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="w-full md:w-1/2">
              <Label>Phone number</Label>
              <Input type="text" placeholder="090752588220"></Input>
            </div>
            <div className="w-full md:w-1/2">
              <Label>Purok</Label>
              <Input type="text" placeholder="Purok 1"></Input>
            </div>
          </div>
          <div className="w-full">
            <Button
              variant="customizedWithBG"
              className="bg-[#4CAF4F] w-full mt-5"
            >
              Request Reference Number
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <p>Already have a reference number?</p>
            <a href="/Register" className="text-[#4CAF4F]">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ReferenceKey;
