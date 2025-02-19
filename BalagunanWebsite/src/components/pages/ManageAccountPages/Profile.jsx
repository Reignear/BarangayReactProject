// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import profile from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const user = {
      isLoggedIn: true,
      name: "Reignear Magallanes",
      email: "reignearm@gmail.com",
      image: profile,
    };
    if (user.isLoggedIn) {
      setIsLoggedIn(true);
      setUserName(user.name);
      setUserEmail(user.email);
      setUserImage(user.image);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center pl-4 pt-4">
          <Avatar className="size-20">
            <AvatarImage src={userImage} alt="profile" />
          </Avatar>
          <div className="pl-3">
            <h1 className="font-medium">{userName}</h1>
            <p className="text-[#000] font-normal">{userEmail}</p>
          </div>
        </div>
        <div className="pl-4 pt-4">
          <Button className="mr-5 mt-5 w-28 font-normal" variant="editProfile">
            Edit
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-start pt-5 pl-5 gap-5">
        <div className="w-64">
          <Label className="font-normal">Username</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Email</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Phone number</Label>
          <Input className="w-full"></Input>
        </div>
      </div>
      <div className="">
        <div className="h-2/4 bg-[#F9FC60] bg-opacity-30 mx-5 mt-5 rounded-md ">
          <p className="flex justify-center italic text-[#F1C40F] text-center py-2">
            Note: Your personal details below are based on the official records
            provided to the Barangay. If you need to update or correct this
            information, <br />
            please contact the Barangay office directly to ensure accurate and
            consistent records.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-start pt-5 pl-5 gap-5">
        <div className="w-64">
          <Label className="font-normal">First name</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Middle name</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Last name</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-40">
          <Label className="font-normal">Suffix</Label>
          <Input className="w-full"></Input>
        </div>
      </div>
      <div className="flex flex-row justify-start pt-5 pl-5 gap-5">
        <div className="w-64">
          <Label className="font-normal">Gender</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Birthday</Label>
          <Input className="w-full"></Input>
        </div>
        <div className="w-64">
          <Label className="font-normal">Precinct</Label>
          <Input className="w-full"></Input>
        </div>      
      </div>
    </div>
  );
};

export default Profile;
