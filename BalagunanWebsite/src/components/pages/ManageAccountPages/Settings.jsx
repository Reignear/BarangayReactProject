// eslint-disable-next-line no-unused-vars
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Settings = () => {
  return (
    <div className="p-5 flex flex-col gap-7 min-w-48 max-w-96">
      <div className="flex justify-start pb-5">
        <h1 className="text-[#263238] font-semibold">Change password</h1>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-normal">Current password</Label>
        <Input></Input>
      </div>
      <div>
        <Label className="font-normal">New password</Label>
        <Input></Input>
      </div>
      <div>
        <Label className="font-normal">Confirm password</Label>
        <Input></Input>
      </div>
      <div className="flex justify-center">
        <Button variant="customizedWithBG" className="max-w-xs px-14">
          Change password
        </Button>
      </div>
    </div>
  );
};

export default Settings;
