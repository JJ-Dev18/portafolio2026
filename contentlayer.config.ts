import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**\/projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'El título del proyecto',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Breve descripción del proyecto',
      required: true,
    },
    date: {
      type: 'date',
      description: 'Fecha de publicación del proyecto',
      required: true,
    },
    image: {
      type: 'string',
      description: 'URL de la imagen principal',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Etiquetas del proyecto',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    projectUrl: {
      type: 'string',
      description: 'URL del proyecto en producción',
      required: false,
    },
    frontendRepoUrl: {
      type: 'string',
      description: 'URL del repositorio del frontend',
      required: false,
    },
    backendRepoUrl: {
      type: 'string',
      description: 'URL del repositorio del backend',
      required: false,
    },
    backendOnline: {
      type: 'boolean',
      description: 'Indica si el backend está desplegado públicamente',
      required: false,
      default: false,
    },
    featured: {
      type: 'boolean',
      description: 'Marca el proyecto insignia (UFT), que tiene su propia ruta dedicada',
      required: false,
      default: false,
    },
    startDate: {
      type: 'string',
      description: 'Fecha de inicio del proyecto (texto libre, ej. "May 2024")',
      required: false,
    },
    launchDate: {
      type: 'string',
      description: 'Fecha de lanzamiento a producción (texto libre, ej. "March 19, 2025")',
      required: false,
    },
    metrics: {
      type: 'list',
      of: { type: 'string' },
      description: 'Métricas cortas para el stat bar (ej. "~1,700 users", "49 DB entities")',
      required: false,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath.split('/')[0],
    },
    url: {
      type: 'string',
      resolve: (project) => {
        const locale = project._raw.flattenedPath.split('/')[0];
        const slug = project._raw.flattenedPath.split('/').pop();
        return `/${locale}/projects/${slug}`;
      },
    },
    slug: {
      type: 'string',
      resolve: (project) => project._raw.flattenedPath.split('/').pop(),
    },
  },
}));

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: `**\/case-studies/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'El título del case study',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Resumen de una línea del problema que resuelve',
      required: true,
    },
    date: {
      type: 'date',
      description: 'Fecha de publicación',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Etiquetas técnicas del case study',
      required: true,
    },
    order: {
      type: 'number',
      description: 'Orden de aparición en el índice de case studies',
      required: false,
      default: 0,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/')[0],
    },
    url: {
      type: 'string',
      resolve: (doc) => {
        const locale = doc._raw.flattenedPath.split('/')[0];
        const slug = doc._raw.flattenedPath.split('/').pop();
        return `/${locale}/case-studies/${slug}`;
      },
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**\/pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Título de la página',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Descripción para metadata/SEO',
      required: true,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/')[0],
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').pop(),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, CaseStudy, Page],
});
