import React from "react";
import { Button } from "@/components/shared";
import Image from "next/image";
import { latestProjects } from "@/constants";

export function LatestProjects() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-h3 md:text-h2 lg:text-h1 font-poppinsSemiBold tracking-wider ">
        Latest Projects
      </div>

      {latestProjects.map((project: any, key: any) => (
        <div
          className="sm:h-[7rem] md:h-[10rem] sm:bg-[#141430] w-full xl:w-[70%] sm:p-6 rounded-lg flex flex-col  sm:flex-row  sm:justify-between gap-5 items-center"
          key={key}
        >
          <Image
            src={project?.image}
            alt={project?.name}
            className="w-[90%] sm:w-[8rem] md:w-[12rem] h-full order-1 sm:order-none"
          />
          <div className="font-poppinsSemiBold  lg:text-xl">
            {project?.name}
          </div>
          <Button name="View Details" className="order-last sm:order-none" />
        </div>
      ))}
    </div>
  );
}
