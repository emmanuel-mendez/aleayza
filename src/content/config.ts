import { z, defineCollection } from "astro:content";

const homeCollection = defineCollection({
  type: "data",
  schema: z.object({
    basis: z.object({
      fullName: z.string().optional().default("Full Name"),
      headline: z.string().optional().default("Headline"),
      image: z.string().optional().default("./images/me.webp"),
      email: z.string().optional().default("user@email.com"),
      phone: z.string().optional().default("000-000-0000"),
      url: z.string().optional().default("https://example.com"),
      profiles: z.array(
        z.object({
          network: z.string().optional(),
          username: z.string().optional(),
          url: z.string().optional(),
        })
      ).optional().default([{
        network: "LinkedIn",
        username: "username-linkedin",
        url: "https://linkedin.com/in/username-linkedin",
      }]),
    }),
    about: z.object({
      title: z.string().optional().default('About Me'),
      summary: z.string().optional().default('(number)+ years of experience creating (products) and specializing in (specializations).'),
    }),
    workExperience: z.object({
      title: z.string().optional().default('Work Experience'),
      list: z.array(
        z.object({
          company: z.string().optional(),
          role: z.string().optional(),
          startDate: z.coerce.date().optional(),
          endDate: z.coerce.date().optional(),
          responsibilities: z.array(z.string()).optional(),
          keyAccomplishments: z.array(z.string()).optional(),
          url: z.string().optional(),
          image: z.string().optional(),
        })
      ).optional().default([{
        company: 'Company',
        role: 'Role',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2022-05-31'),
        responsibilities: [
          'Create',
          'Maintain',
          'Upgrade',
        ],
        keyAccomplishments: [
          'Features implemented',
          'Improvements made',
          'Results achieved',
        ],
        url: 'https://example.com/my-project',
        image: 'https://example.com/my-project.jpg',
      }]),
    }),
    projects: z.object({
      title: z.string().optional().default('Projects'),
      list: z.array(
        z.object({
          name: z.string().optional(),
          isActive: z.boolean().optional(),
          description: z.string().optional(),
          highlights: z.array(z.string()).optional(),
          url: z.string().optional(),
          image: z.string().optional(),
        })
      ).optional().default([{
        name: 'Project',
        isActive: true,
        description: 'Description of the project.',
        highlights: [
          'Features implemented',
          'Improvements made',
          'Results achieved',
          'Technologies used'
        ],
        url: 'https://example.com/my-project',
        image: 'https://example.com/my-project.jpg'
      }]),
    }),
    education: z.object({
      title: z.string().optional().default('Education'),
      list: z.array(
        z.object({
          institution: z.string().optional(),
          degree: z.string().optional(),
          startDate: z.coerce.date().optional(),
          endDate: z.coerce.date().optional(),
        })
      ).optional().default([{
        institution: 'University',
        degree: 'Degree',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2022-05-31'),
      }]),
    }),
    skills: z.object({
      title: z.string().optional(),
      list: z.array(z.string()).optional(),
    }),
  }),
});

const pageNotFoundCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    information: z.string().optional(),
    goBack: z.string().optional(),
  }),
});

export const collections = {
  home: homeCollection,
  pageNotFound: pageNotFoundCollection,
};
