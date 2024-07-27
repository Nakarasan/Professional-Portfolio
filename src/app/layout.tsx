import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/base/Header";

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "It's my Professional Portfolio developed in Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-md bg-bgColor text-white flex flex-col items-center w-full">
        <Header />
        <div className="pt-16 sm:pt-20 px-8 md:px-16 max-w-[1600px]  pb-[5rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
