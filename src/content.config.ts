import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().positive(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    dropCap: z.boolean().default(false),
    references: z.array(z.object({
      label: z.string(),
      text: z.string(),
      href: z.string().url()
    })).default([])
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles, notes };
