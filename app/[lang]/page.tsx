import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Certificates } from "@/components/sections/certificates";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Certificates />
      </main>
    </>
  );
}
