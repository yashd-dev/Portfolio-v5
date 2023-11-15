// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
    }).transform((data) => ({
      ...data,
      pubDate: data.pubDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })
    }))
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};