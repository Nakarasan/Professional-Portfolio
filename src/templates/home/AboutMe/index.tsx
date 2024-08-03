import Image from "next/image";
import React from "react";
import kara from "@/assets/images/about/kara.svg";

export function AboutMe() {
  return (
    <div className="space-y-12">
      <div className="text-h3 md:text-h2 lg:text-h1 font-poppinsSemiBold tracking-wider text-center">
        About Me
      </div>
      <div className="flex gap-16 ">
        <div className="w-[50%] p-1 bg-[#7456FF]/70 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_8px_8px_20px_4px_rgba(34,211,238,0.2)]">
          <Image
            src={kara}
            alt="profile"
            quality={100}
            className="w-full rounded-xl"
          />
        </div>
        <div className="w-[50%] space-y-8 text-textGray">
          <div className="flex gap-8">
            <div className="space-y-3">
              <div>Name:</div>
              <div>Email:</div>
              <div>Whatsapp:</div>
              <div>Location:</div>
            </div>
            <div className="space-y-3">
              <div>Krishnavel Nakarasan</div>
              <div>krishzkara27@gmail.com</div>
              <div>+94765705081</div>
              <div>Jaffna, Sri Lanka.</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="font-poppinsMedium text-h3 text-white">
              I’m Kara, Software Developer
            </div>
            <div className="text-justify">
              I am committed to delivering high-quality software products that
              exceed user expectations. With a keen eye for detail and a
              collaborative mindset, I thrive in dynamic and challenging
              environments, continually seeking opportunities to expand my
              technical expertise and contribute to projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
