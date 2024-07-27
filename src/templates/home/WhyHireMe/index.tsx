import React from "react";
import { hireMeDetails } from "@/constants";
import Image from "next/image";

export default function WhyHireMe() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-h3 md:text-h2 lg:text-h1 font-poppinsSemiBold tracking-wider text-center">
        Why Hire Me
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 xl:px-[5%]">
          {hireMeDetails.map((detail: any, key: any) => (
            <div className=" flex flex-col items-center gap-2" key={key}>
              <div className="h-[15vw] w-[15vw] max-w-[15rem] max-h-[15rem] border-2 border-gray-400/30 rounded-full p-2 lg:p-3">
                <div className="w-full h-full border-2 border-[#7456FF] bg-[#7456FF]/10 rounded-full flex justify-center items-center">
                  <Image
                    src={detail?.image}
                    alt={detail?.attitude}
                    className="w-[40%] h-[40%]"
                  />
                </div>
              </div>

              <div className="text-center text-p1 lg:text-h2">
                {detail?.attitude}
              </div>
              <div className="text-center text-textGray text-p2">
                {detail?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block md:hidden space-y-12">
        {hireMeDetails.map((detail: any, key: any) => (
          <div
            className="bg-gradient-to-br from-buttonColor/10 from-60% via-buttonColor/60 to-buttonColor/80 rounded-lg p-[2px]"
            key={key}
          >
            <div className="bg-bgColor h-full p-5 rounded-lg flex flex-col items-center gap-2 relative">
              <div className="text-h4 font-poppinsMedium">
                {detail?.attitude}
              </div>
              <div className="text-justify text-textGray text-p2">
                {detail?.description}
              </div>
              <div className="absolute left-6 -top-4 h-[2.75rem] w-[2.75rem] border-2 border-buttonColor/20 bg-[#140f2c] rounded-full flex justify-center items-center">
                <Image
                  src={detail?.image}
                  alt={detail?.attitude}
                  className="w-[50%] h-[50%] opacity-70"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
