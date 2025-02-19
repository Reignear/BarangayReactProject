// eslint-disable-next-line no-unused-vars
import React from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import loginIcon from "@/assets/loginIcon.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-[#FFF]">
      {/* Left side */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img className="h-full" src={loginIcon} alt="Image" />
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-lg space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p>Enter your credentials to access your account</p>
          </div>
          <div className="space-y-2">
            <Label>Username</Label>
            <Input placeholder="Enter your username"></Input>
          </div>
          <div className="space-y-2">
            <Label>Password </Label>
            <Input type="password" placeholder="Enter your password"></Input>
          </div>
          <div className="flex flex-row items-center justify-between w-full ">
            <div className="flex items-center space-x-2">
              <Checkbox></Checkbox>
              <Label className="font-normal">Remember me</Label>
            </div>
            <a href="" className="text-sm text-[#4CAF4F]">
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center space-y-2">
            <Button
              variant="customizedWithBG"
              className="w-full bg-[#4CAF4F] mt-2"
            >
              Sign in
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <p>Do not have an account?</p>
            <a href="/Register" className=" text-sm text-[#4CAF4F]">
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
