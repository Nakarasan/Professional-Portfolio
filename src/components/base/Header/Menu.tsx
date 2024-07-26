"use client";
import { useContext } from "react";
import { HeaderContext } from "./index";
import { menuProps } from "@/constants";
import close from "@/assets/images/header/close.svg";
import Link from "next/link";
import Image from "next/image";

export default function Menu(props: menuProps) {
  const { menuItems, pathname }: any = useContext(HeaderContext);
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white/70 px-8 bg-clip-padding backdrop-filter backdrop-blur-md">
      <div
        onClick={props.setOpen}
        className="flex items-center justify-end h-12"
      >
        <Image src={close} alt="close" className="h-4 w-4" />
      </div>

      <div className="flex flex-col gap-2 text-[#060021] font-poppinsSemiBold">
        {menuItems.map((item: any, key: any) => (
          <Link
            href={item.to}
            className={`${
              pathname === item.to && " text-pink-700 font-poppinsMedium"
            }`}
            key={key}
          >
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
