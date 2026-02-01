# 🚀 Portafolio Personal - Juan Murillo

Portafolio profesional bilingüe construido con Next.js 16, TypeScript, Tailwind CSS y Contentlayer.

## ✨ Características

- ⚡ **Next.js 16** con App Router
- 🎨 **Tailwind CSS** para estilos
- 🌗 **Modo oscuro/claro** con next-themes
- 📝 **Contentlayer** para gestión de contenido (proyectos y blog)
- 🎯 **TypeScript** con tipado estricto
- 🧩 **shadcn/ui** componentes reutilizables
- 📱 **Diseño responsive**
- 🔍 **SEO optimizado**

## 📁 Estructura del Proyecto

```
miportafolio/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con ThemeProvider
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/
│   ├── sections/          # Componentes de secciones
│   │   ├── header.tsx     # Header con navegación
│   │   └── hero.tsx       # Sección Hero
│   └── ui/                # Componentes UI de shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── config/
│   └── site.ts            # Configuración del sitio
├── content/
│   ├── projects/          # Contenido de proyectos (.mdx)
│   └── posts/             # Contenido del blog (.mdx)
├── lib/
│   └── utils.ts           # Utilidades (cn helper)
├── types/
│   └── index.ts           # Tipos TypeScript
├── contentlayer.config.ts # Configuración de Contentlayer
└── tailwind.config.ts     # Configuración de Tailwind
```

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ 
- npm o pnpm

### Instalación

1. Clonar el repositorio:
```bash
git clone <tu-repo>
cd miportafolio
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Agregar Contenido

### Crear un Proyecto

Crea un archivo `.mdx` en `content/projects/`:

```mdx
---
title: "Mi Proyecto Increíble"
description: "Una breve descripción del proyecto"
date: 2026-01-20
image: "/images/proyecto.jpg"
tags: ["Next.js", "TypeScript", "Tailwind"]
published: true
---

Contenido del proyecto aquí...
```

### Crear un Post de Blog

Crea un archivo `.mdx` en `content/posts/`:

```mdx
---
title: "Mi Primer Post"
description: "Una introducción a mi blog"
date: 2026-01-20
image: "/images/post.jpg"
tags: ["Blog", "Tech"]
published: true
---

Contenido del post aquí...
```

## 🎨 Personalización

### Configuración del Sitio

Edita `config/site.ts` para actualizar:
- Nombre y descripción
- Enlaces a redes sociales
- Menú de navegación

### Estilos

El proyecto usa Tailwind CSS con variables CSS personalizadas. Edita `app/globals.css` para cambiar colores y temas.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📦 Tecnologías Utilizadas

- [Next.js 16](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Contentlayer](https://contentlayer.dev/) - Gestión de contenido
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Lucide React](https://lucide.dev/) - Iconos
- [next-themes](https://github.com/pacocoursey/next-themes) - Tema oscuro/claro

## 📄 Licencia

MIT

---

Desarrollado con ❤️ por Juan Murillo
