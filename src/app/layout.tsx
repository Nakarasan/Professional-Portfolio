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
      <body className="text-md bg-gradient-to-r from-[#08061b] to-[#060513] text-white flex flex-col items-center w-full">
        <Header />
        <div className="pt-16 sm:pt-20 md:pt-40 px-8 md:px-16 max-w-[1600px]  pb-[5rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
// 130F40 08061b
