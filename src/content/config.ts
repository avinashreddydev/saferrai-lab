import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

// Export collections
export const collections = {
  'blog': blogCollection,
}; 