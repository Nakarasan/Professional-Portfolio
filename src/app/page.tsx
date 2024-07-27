import { LatestProjects } from "@/templates/home";
import { Profile } from "@/templates/home/Profile";
import WhyHireMe from "@/templates/home/WhyHireMe";

export default function Home() {
  return (
    <div className="space-y-10">
      <Profile />
      <LatestProjects />
      <WhyHireMe />
    </div>
  );
}
