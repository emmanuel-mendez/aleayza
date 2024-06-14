import { z, defineCollection } from "astro:content";

const basisCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().optional(),
      label: z.string().optional(),
      image: image().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      url: z.string().optional(),
      profiles: z
        .array(
          z.object({
            network: z.string().optional(),
            username: z.string().optional(),
            url: z.string().optional(),
          })
        )
        .optional(),
    }),
});

const aboutCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    summary: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    list: z
      .array(
        z.object({
          name: z.string().optional(),
          isActive: z.boolean().optional(),
          description: z.string().optional(),
          highlights: z.array(z.string()).optional(),
          url: z.string().optional(),
          image: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const educationCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    list: z
      .array(
        z.object({
          institution: z.string().optional(),
          description: z.string().optional(),
          highlights: z.array(z.string()).optional(),
          startDate: z.coerce.date().optional(),
          endDate: z.coerce.date().optional(),
        })
      )
      .optional(),
  }),
});

const skillsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    list: z.array(z.string()).optional(),
  }),
});

export const collections = {
  basis: basisCollection,
  about: aboutCollection,
  projects: projectsCollection,
  education: educationCollection,
  skills: skillsCollection,
};
