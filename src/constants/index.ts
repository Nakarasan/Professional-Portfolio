//social media images
import facebook from "@/assets/images/profile/facebook.svg";
import instagram from "@/assets/images/profile/instagram.svg";
import whatsapp from "@/assets/images/profile/whatsapp.svg";
import linkedin from "@/assets/images/profile/linkedin.svg";

//latest project images
import pro1 from "@/assets/images/projects/scl.svg";
import pro2 from "@/assets/images/projects/Ecommerce.svg";
import pro3 from "@/assets/images/projects/speedHRM.svg";

//why hire me images
import workaholic from "@/assets/images/hire/workaholic.svg";
import communicative from "@/assets/images/hire/communicative.svg";
import cooperative from "@/assets/images/hire/cooperative.svg";
import perfectionist from "@/assets/images/hire/perfectionist.svg";

//skill images
import html from "@/assets/images/skills/html.svg";
import css from "@/assets/images/skills/css.svg";
import js from "@/assets/images/skills/js.svg";
import tailwind from "@/assets/images/skills/tailwind.svg";
import react from "@/assets/images/skills/react.svg";
import nextjs from "@/assets/images/skills/nextjs.svg";

export interface menuProps {
  setOpen: any;
}

// header nav items
export const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "WorkLogs",
    to: "/workLogs",
  },
  {
    name: "Contact Us",
    to: "/contact-us",
  },
];

//profile social media contents
export const socialMediaImages = [
  {
    image: facebook,
  },
  {
    image: instagram,
  },
  {
    image: whatsapp,
  },
  {
    image: linkedin,
  },
];

// latest project list
export const latestProjects = [
  {
    name: "Speedcodelabs - website",
    image: pro1,
  },
  {
    name: "E-Commerce",
    image: pro2,
  },
  {
    name: "SpeedHrm",
    image: pro3,
  },
];

//why hire me constants
export const hireMeDetails = [
  {
    attitude: "Workaholic",
    image: workaholic,
    description:
      "I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.",
  },
  {
    attitude: "Communicative",
    image: communicative,
    description:
      "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.",
  },
  {
    attitude: "Cooperative",
    image: cooperative,
    description:
      "Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.",
  },
  {
    attitude: "Perfectionist",
    image: perfectionist,
    description:
      "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.",
  },
];

//skills
export const skillImages = [
  {
    image: react,
  },
  {
    image: tailwind,
  },
  {
    image: nextjs,
  },
  {
    image: js,
  },
  {
    image: html,
  },
  {
    image: css,
  },
];
