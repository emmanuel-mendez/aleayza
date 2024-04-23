import { z, defineCollection } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    basis: z
      .object({
        name: z.string().optional(),
        label: z.string().optional(),
        image: z.string().optional(),
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
      })
      .optional(),
    about: z
      .object({
        title: z.string().optional(),
        summary: z.string().optional(),
      })
      .optional(),

    projects: z
      .object({
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
      })
      .optional(),

    education: z
      .object({
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
      })
      .optional(),

    skills: z
      .object({
        title: z.string().optional(),
        list: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

export const collections = { portfolio };
