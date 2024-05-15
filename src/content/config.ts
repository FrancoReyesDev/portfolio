import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      shortResume: z.string(),
      objective: z.string(),
      technologies: z.array(z.array(z.string())),
      milestones: z.array(z.string()),
      image: z.string(),
    }),
  }),
};
