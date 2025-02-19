// eslint-disable-next-line no-unused-vars
import React from "react";

const SecondSection = () => {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-[#237D31] text-3xl font-bold">Services</h1>
        <div className="pt-2">
          <ul className="m-0 p-0 flex list-none">
            <a
              href=""
              className="rounded-l-lg w-10 h-1 bg-green-400/40 inline-block"
            ></a>
            <a
              href=""
              className="w-10 h-1 bg-green-700 inline-block  border-green-600"
            ></a>
            <a
              href=""
              className="rounded-r-lg w-10 h-1 bg-green-400/40 inline-block"
            ></a>
          </ul>
        </div>
        <p className="text-[#263238] font-medium py-2">
          Request. Track. Receive. All in one place!
        </p>
      </div>
      {/* Card here */}
      <div className="grid grid-cols-3 gap-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 xs: pt-4">
        {/* Card 1 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/clearance.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/lowincome.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/income.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/indigency.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/certificate.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="relative h-[30vh] w-[320px]">
          <img
            src="src/assets/cedula.png"
            alt="Image"
            className="h-full w-full object-cover rounded-xl"
          />
          <div className="absolute left-1/2 bottom-[2vh] transform -translate-x-1/2 translate-y-1/2 h-[16vh] w-[85%] rounded-xl bg-white shadow-lg">
            <h4 className="text-center text-[#237D31] text-xl font-semibold pt-1">
              Barangay Clearance
            </h4>
            <p className="text-center text-[#263238] justify-center font-bold text-[13px] pl-2 pr-2">
              Issued by the barangay confirming a residents good standing and
              residency and is typically used for employment or legal purposes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
