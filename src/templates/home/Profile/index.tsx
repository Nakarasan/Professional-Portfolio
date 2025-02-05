"use client";
import React from "react";
import profile from "@/assets/images/profile/profile.svg";
import Image from "next/image";
import { Button } from "@/components/shared";
import { socialMediaImages } from "@/constants";

export function Profile() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:basis-1/2 md:space-y-1 md:pt-8">
        <div className="text-2xl md:text-4xl font-poppins">Hello Buds!</div>
        <div className="text-2xl md:text-4xl font-poppins">
          I am <span className="text-[#7456FF]"> Krishnavel Nakarasan</span>
        </div>
        <div className="text-l font-poppins">Software Engineer</div>
        <div className="py-4 md:py-7 space-y-2 md:space-y-4">
          <hr className="w-14" />
          <div className="text-justify text-textGray text-p2 md:text-p1">
            I&apos;m a person who has a keen interest in the design layout. I
            think presenting an attractive design is a matter of concern in
            developing a branding of products. To creates a good design, I focus
            on proper composition and visual decoration details in order to make
            it more professional. For the time being, I&apos;m developing the
            skill for acquiring the UI/UX design for dynamic application and web
            development.
          </div>
        </div>
        <div className="flex gap-5">
          <Button name="Download CV" />
          <Button name="More" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-end lg:basis-1/2 gap-6">
        <Image
          src={profile}
          alt="profile"
          quality={100}
          className="h-[30vw] min-h-[14rem] max-h-[22rem] lg:mr-10"
        />
        <div className="flex items-center gap-4 lg:mr-8">
          <div className="font-poppinsMedium text-gray-400">Find me on</div>
          {socialMediaImages.map((media: any, key: any) => (
            <Image
              src={media?.image}
              alt={media?.image}
              quality={100}
              className="h-8 md:h-12 w-8 md:w-12"
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
