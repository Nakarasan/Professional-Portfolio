import {
  Profile,
  LatestProjects,
  Skills,
  WhyHireMe,
  AboutMe,
} from "@/templates/home";

export default function Home() {
  return (
    <div className="space-y-10 xl:space-y-28">
      <Profile />
      <AboutMe />
      <LatestProjects />
      <WhyHireMe />
      <Skills />
    </div>
  );
}
