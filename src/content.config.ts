import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    period: z.string().optional(),
    role: z.string(),
    systems: z.array(z.string()),
    story: z.object({
      problem: z.string(),
      constraints: z.string(),
      architecture: z.string(),
      whatIBuilt: z.string(),
      decisions: z.string(),
      impact: z.string(),
    }),
  }),
});

const timeline = defineCollection({
  loader: file('src/data/timeline.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    period: z.string(),
    title: z.string(),
    summary: z.string(),
    tag: z.string(),
    detail: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    section: z.enum(['think', 'life']),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { projects, timeline, writing };
