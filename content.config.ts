import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    porady: defineCollection({
      type: 'page',
      source: 'porady/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        author: z.string().default('Neksus'),
        date: z.string(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
