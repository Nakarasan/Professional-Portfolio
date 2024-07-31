import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 060021
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        bgColor: "#000000",
        buttonColor: "#7456FF",
        textGray: "#dadada",
      },

      fontFamily: {
        poppins: ["PoppinsRegular", "serif"],
        poppinsMedium: ["PoppinsMedium", "serif"],
        poppinsSemiBold: ["PoppinsSemiBold", "serif"],
      },

      fontSize: {
        h1: "32px",
        h2: "24px",
        h3: "20px",
        p1: "16px",
        p2: "14px",
        p3: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
