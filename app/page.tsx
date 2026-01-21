import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
      </main>
    </>
  );
}
