import pro1 from "@/assets/images/projects/scl.svg";
import pro2 from "@/assets/images/projects/Ecommerce.svg";
import pro3 from "@/assets/images/projects/speedHRM.svg";

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
