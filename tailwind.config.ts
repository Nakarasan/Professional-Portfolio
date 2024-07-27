import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        bgcolor: "#060021",
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
        p1: "13px",
        p2: "12px",
        p3: "11px",
      },
    },
  },
  plugins: [],
};
export default config;
