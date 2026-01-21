"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Box,
  Cloud,
  Layout,
  Braces,
  Terminal,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Tech {
  name: string;
  icon: React.ReactNode;
  badge?: string;
}

interface TechCategory {
  title: string;
  description: string;
  techs: Tech[];
}

const techStack: TechCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas y responsivas",
    techs: [
      { name: "Next.js", icon: <Layout className="h-8 w-8" /> },
      { name: "React", icon: <Code2 className="h-8 w-8" /> },
      { name: "TypeScript", icon: <Braces className="h-8 w-8" /> },
      { name: "Tailwind CSS", icon: <Globe className="h-8 w-8" /> },
    ],
  },
  {
    title: "Backend",
    description: "Soluciones robustas y escalables",
    techs: [
      { name: "PHP (Laravel)", icon: <Server className="h-8 w-8" /> },
      { name: "Python", icon: <Terminal className="h-8 w-8" /> },
      { name: "MySQL", icon: <Database className="h-8 w-8" /> },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    description: "Despliegue y escalabilidad empresarial",
    techs: [
      {
        name: "Docker",
        icon: <Box className="h-8 w-8" />,
        badge: "Enterprise Deployment Experience",
      },
      { name: "Linux", icon: <Terminal className="h-8 w-8" /> },
      { name: "Nginx", icon: <Server className="h-8 w-8" /> },
      {
        name: "Azure",
        icon: <Cloud className="h-8 w-8" />,
        badge: "Enterprise Deployment Experience",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStack() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Stack Tecnológico
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Tecnologías y herramientas que domino para crear soluciones
              completas de principio a fin
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid gap-8 md:gap-12">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="flex flex-col gap-6"
              >
                {/* Category Header */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={item}
                      className="group relative"
                    >
                      <div
                        className="flex flex-col items-center gap-3 p-6 rounded-xl
                        bg-background/50 backdrop-blur-sm
                        border border-border/50
                        hover:border-primary/50
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-primary/10
                        hover:-translate-y-1"
                      >
                        {/* Icon */}
                        <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                          {tech.icon}
                        </div>

                        {/* Tech Name */}
                        <span className="text-sm font-medium text-center">
                          {tech.name}
                        </span>

                        {/* Enterprise Badge */}
                        {tech.badge && (
                          <Badge
                            variant="secondary"
                            className="text-xs text-center px-2 py-1 bg-primary/10 text-primary border-primary/20"
                          >
                            {tech.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Glassmorphism effect overlay on hover */}
                      <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
