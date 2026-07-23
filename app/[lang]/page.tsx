import { Hero } from "@/components/sections/hero";
import { WhyMatters } from "@/components/sections/why-matters";
import { ArchitecturePanel } from "@/components/sections/architecture-panel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMatters />
      <ArchitecturePanel />
    </>
  );
}
