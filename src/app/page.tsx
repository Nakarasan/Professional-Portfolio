import { Profile, LatestProjects, Skills, WhyHireMe } from "@/templates/home";

export default function Home() {
  return (
    <div className="space-y-10 xl:space-y-28">
      <Profile />
      <LatestProjects />
      <WhyHireMe />
      <Skills />
    </div>
  );
}
