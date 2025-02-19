// eslint-disable-next-line no-unused-vars
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
const Register = () => {
  return (
    <body className="flex flex-col md:flex-row justify-center items-center h-screen bg-[#FFF]">
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src="src/assets/computer.png" alt="image" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-1/2 space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-5xl font-bold">Get Started Now</h1>
            <p className="flex items-center justify-center ">
              Register now to easily request documents and connect with your
              barangay!
            </p>
          </div>
          <div className="space-y-2">
            <Label>Username</Label>
            <Input placeholder="Enter your username"></Input>
            <Label>Password</Label>
            <Input type="passoword" placeholder="Enter your password"></Input>
            <Label>Confirm password</Label>
            <Input type="password" placeholder="Retype your password"></Input>
            <Label>Reference Code</Label>
            <Input type="text" placeholder="Enter the code"></Input>
          </div>
          <div className="flex items-center justify-end space-x-2 text-[#4CAF4F]">
            <a href="/ReferenceKey">Request reference number</a>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox></Checkbox>
            <p>I agree to Terms and condition & Privacy Policy</p>
          </div>
          <div>
            <Button variant="customizedWithBG" className="w-full bg-[#4CAF4F]">
              Sign up
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <p>Already have an account?</p>
            <a href="/Login" className="text-[#4CAF4F]">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Register;
