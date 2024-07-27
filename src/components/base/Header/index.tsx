"use client";
import menu from "@/assets/images/header/menu.svg";
import { createContext, useState } from "react";
import Menu from "./Menu";
import { menuItems } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const HeaderContext = createContext(null);
export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <HeaderContext.Provider
      value={
        {
          menuItems,
          pathname,
        } as any
      }
    >
      <div className="flex items-center h-12 px-8 md:px-16 justify-between fixed bg-bgColor text-white w-full max-w-[1600px]">
        {open && <Menu setOpen={() => setOpen(false)} />}
        <div>Kara&apos;s Portfolio</div>
        <div
          className="block md:hidden"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image src={menu} alt="menu" className="h-5 w-5" />
        </div>
        <div className="hidden md:block">
          <div className="flex gap-10 ">
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
      </div>
    </HeaderContext.Provider>
  );
}
