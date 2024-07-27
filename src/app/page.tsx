import { LatestProjects } from "@/templates/home";
import { Profile } from "@/templates/home/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <Profile />
      <LatestProjects />
    </div>
  );
}
