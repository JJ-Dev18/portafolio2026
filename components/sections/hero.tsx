import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 px-4 py-16 md:py-24 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
            Juan Murillo
          </span>
        </h1>
        <h2 className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl md:text-3xl">
          Full-Stack Developer & DevOps
        </h2>
        <p className="max-w-[700px] text-base text-muted-foreground sm:text-lg md:text-xl">
          Apasionado por crear soluciones web innovadoras y escalables.
          Especializado en Next.js, React, TypeScript y arquitectura cloud.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="#projects">
            Ver mis proyectos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contáctame</Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href={siteConfig.links.email}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
