"use client";
import React from "react";
import { skillImages } from "@/constants";
import Image from "next/image";

export function Skills() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-h3 md:text-h2 lg:text-h1 font-poppinsSemiBold tracking-wider text-center">
        Tools and Skills
      </div>

      <div className="flex justify-between">
        {skillImages.map((skill: any, key: any) => (
          <Image
            src={skill?.image}
            alt={skill?.image}
            quality={100}
            className="w-[11vw] md:w-[10vw]"
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
