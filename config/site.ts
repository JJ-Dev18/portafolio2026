import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Juan Murillo",
  description: "Full-Stack Developer & DevOps especializado en crear soluciones web innovadoras",
  url: "https://juanmurillo.dev",
  ogImage: "https://juanmurillo.dev/og.jpg",
  links: {
    linkedin: "https://linkedin.com/in/juanmurillo",
    github: "https://github.com/juanmurillo",
    email: "mailto:juan@example.com",
  },
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Proyectos",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contacto",
      href: "/contact",
    },
  ],
};
