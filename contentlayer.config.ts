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

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**\/posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'El título del post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Breve descripción del post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'Fecha de publicación',
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
      description: 'Etiquetas del post',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: {
    locale: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/')[0],
    },
    url: {
      type: 'string',
      resolve: (post) => {
        const locale = post._raw.flattenedPath.split('/')[0];
        const slug = post._raw.flattenedPath.split('/').pop();
        return `/${locale}/blog/${slug}`;
      },
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.split('/').pop(),
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Post],
});
