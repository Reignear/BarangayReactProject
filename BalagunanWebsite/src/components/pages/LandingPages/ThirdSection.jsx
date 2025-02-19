// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ThirdSection = () => {
  return (
    <div className="h-screen flex flex-col items-center pl-6 pr-6 pt-2">
      <h1 className="text-[#237D31] text-3xl font-bold mb-6">About Us</h1>

      <div className="flex flex-row items-center w-full p-4">
        <div className="w-2/5 flex items-center justify-center">
          <img
            className="h-60"
            src="src/assets/BarangayLogo.png"
            alt="Barangay Logo"
          />
        </div>
        <div className="w-3/5 flex flex-col  gap-4 ml-10">
          <h1 className="font-semibold text-4xl">Barangay History</h1>
          <p className="text-justify text-[#263238]">
            The Barangay Balagunan was once a forested area inhabited by
            primitive ethnic groups of Mandaya and Aeta. The place was named
            “Balagunan” after a particular plant called “Balagun” also popularly
            known as rattan, which was very abundant on the place during that
            time which used to be a source of income for some natives.The
            Barangay was one of the original barangay when the Municipality of
            Sto. Tomas was created out of its mother Municipality of Kapalong by
            virtue of Executive Order No. 352 signed by the late President
            Carlos P. Garcia on August 14, 1959. The first appointed barrio
            captain was Mr. Roberto de Rotas but was not able to function well
            because when logging concessions had stopped and withdrawn from the
            area, he also moved out to the place.
          </p>
          <Button variant="customizedWithBG" className="w-36">
            Learn More
          </Button>
        </div>
      </div>

      <div className="flex flex-row w-full h-screen bg-[#F5F7FA]">
        <div className="flex-1 flex text-center items-center justify-center">
          <div className="flex flex-col items-start text-start w-4/5 ml-20">
            <div className="flex flex-row">
              <h1 className="font-bold text-3xl">Current</h1>
              <h1 className="font-bold text-3xl text-[#237D31] pl-2">Status</h1>
            </div>

            <p className="pt-5 text-[#263238]">
              Embracing development and modernization, the barangay <br />
              offered quality services in the community.
            </p>
          </div>
        </div>
        <div className="flex-1 flex text-center items-center justify-center text-lg font-bold">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-36">
              <div className="flex flex-row items-center w-full md:w-64">
                <img
                  className="w-16 h-16 md:w-auto md:h-auto"
                  src="/src/assets/documentWithMan.png"
                  alt="Document"
                />
                <div className="flex flex-col items-start pl-3">
                  <h1>100</h1>
                  <Label className="text-[#263238]">Document Request</Label>
                </div>
              </div>
              <div className="flex flex-row items-center w-full md:w-64">
                <img
                  className="w-16 h-16 md:w-auto md:h-auto"
                  src="/src/assets/documentWithMan.png"
                  alt="Document"
                />
                <div className="flex flex-col items-start pl-3">
                  <h1>867</h1>
                  <Label className="text-[#263238]">Document Archives</Label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-36">
              <div className="flex flex-row items-center w-full md:w-64">
                <img
                  className="w-16 h-16 md:w-auto md:h-auto"
                  src="/src/assets/documentWithMan.png"
                  alt="Document"
                />
                <div className="flex flex-col items-start pl-3">
                  <h1>12</h1>
                  <Label className="text-[#263238]">Purok</Label>
                </div>
              </div>
              <div className="flex flex-row items-center w-full md:w-64">
                <img
                  className="w-16 h-16 md:w-auto md:h-auto"
                  src="/src/assets/documentWithMan.png"
                  alt="Document"
                />
                <div className="flex flex-col items-start pl-3">
                  <h1>100</h1>
                  <Label className="text-[#263238]">Population</Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
