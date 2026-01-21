"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Container,
  Cloud,
  Terminal,
  Layers,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

interface Tech {
  name: string;
  icon: React.ReactNode;
  badge?: string;
}

interface TechCategory {
  title: string;
  techs: Tech[];
}

const techStack: TechCategory[] = [
  {
    title: "Frontend",
    techs: [
      { name: "Next.js", icon: <Layers className="h-8 w-8" /> },
      { name: "React", icon: <Code2 className="h-8 w-8" /> },
      { name: "React Native", icon: <Code2 className="h-8 w-8" /> },
      { name: "TypeScript", icon: <Code2 className="h-8 w-8" /> },
      { name: "Tailwind CSS", icon: <Workflow className="h-8 w-8" /> },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: <Server className="h-8 w-8" /> },
      { name: "Nest.js", icon: <Layers className="h-8 w-8" /> },
      { name: "PHP (Laravel)", icon: <Server className="h-8 w-8" /> },
      { name: "Python", icon: <Terminal className="h-8 w-8" /> },
    ],
  },
  {
    title: "Bases de Datos",
    techs: [
      { name: "MySQL", icon: <Database className="h-8 w-8" /> },
      { name: "PostgreSQL", icon: <Database className="h-8 w-8" /> },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    techs: [
      {
        name: "Docker",
        icon: <Container className="h-8 w-8" />,
        badge: "Enterprise Deployment Experience",
      },
      { name: "Linux (Ubuntu/CentOS)", icon: <Terminal className="h-8 w-8" /> },
      { name: "Nginx", icon: <Server className="h-8 w-8" /> },
      {
        name: "Digital Ocean",
        icon: <Cloud className="h-8 w-8" />,
        badge: "Enterprise Deployment Experience",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function TechStack() {
  const t = useTranslations("techStack");
  
  const categories = [
    { key: "frontend", techs: techStack[0].techs },
    { key: "backend", techs: techStack[1].techs },
    { key: "databases", techs: techStack[2].techs },
    { key: "infrastructure", techs: techStack[3].techs },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="flex flex-col gap-4"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold">{t(`categories.${category.key}`)}</h3>

              {/* Tech Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {category.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/60 backdrop-blur-md p-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/60 dark:bg-background/40 dark:border-border/30 dark:hover:border-primary/70 dark:hover:shadow-primary/20"
                  >
                    {/* Inner glow border effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-xl border-2 border-primary/20 dark:border-primary/40" />
                    </div>

                    {/* Glassmorphism gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-primary/20 dark:via-primary/10" />

                    {/* Content */}
                    <div className="relative flex items-center gap-3">
                      <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                        {tech.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{tech.name}</p>
                        {tech.badge && (
                          <Badge
                            variant="secondary"
                            className="mt-2 text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {t("badges.enterprise")}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
