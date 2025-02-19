// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import profile from "@/assets/profile.jpg";
import notification from "@/assets/notification.png";
import dropdown from "@/assets/dropdown.svg";
import manageAccount from "@/assets/manageaccount.png";
import activityLog from "@/assets/activity.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
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
      setIsLoggedIn(false);
      setUserName(user.name);
      setUserEmail(user.email);
      setUserImage(user.image);
    }
  }, []);

  return (
    <nav className="flex flex-row justify-between items-center shadow-sm px-4 py-2">
      <div className="flex flex-col justify-center items-center w-1/4">
        <h1 className="text-xl font-bold text-[#237D31]">Balagunan</h1>
        <p className="text-sm text-[#237D31]">SANTO TOMAS</p>
      </div>
      <div className="flex-grow">
        <ul className="flex flex-row gap-14 text-[#18191F] justify-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-5 w-1/4 pr-20 justify-end">
        {isLoggedIn ? (
          <div className="flex flex-row items-center">
            <div className="relative">
              <img src={notification} className="h-7" alt="" />
              <div className="absolute top-0 right-0 bg-[#F93C65] text-white rounded-full w-3 h-3 flex justify-center items-center">
                <p className="text-[10px]">2</p>
              </div>
            </div>
            <Avatar className="ml-2 mr-2">
              <AvatarImage src={userImage} alt={userName} />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-[#263238] text-sm font-semibold">
                {userName}
              </h1>
              <p className="text-[#263238] text-[12px]">{userEmail}</p>
            </div>
            <div className="pl-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="transparent" size="icon">
                    <img src={dropdown} alt="" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <img src={manageAccount} className="h-5" alt="" />
                      <span>Manage Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="pl-2.5">
                      <img src={activityLog} className="h-5" alt="" />
                      <span>Activity Log</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="pl-3">
                    <LogOut className="text-[#E53835]" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ) : (
          <>
            <Button
              onClick={() => navigate("/Register")}
              variant="customized"
              className="w-24"
            >
              Sign up
            </Button>
            <Button
              onClick={() => navigate("/Login")}
              variant="customized"
              className="w-24"
            >
              Log in
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
