import { z, defineCollection } from "astro:content";

const DEFAULT_DATA = {
  home: {
    basis: {
      fullName: "Full Name",
      headline: "Headline",
      image: "./images/me.webp",
      email: "user@email.com",
      phone: "000-000-0000",
      url: "https://example.com",
      profiles: [{
        network: "LinkedIn",
        username: "username-linkedin",
        url: "https://linkedin.com/in/username-linkedin",
      }],
    },
    about: {
      title: 'About Me',
      summary: '(number)+ years of experience creating (products) and specializing in (specializations).',
    },
    workExperience: {
      title: 'Work Experience',
      list: [
        {
          role: 'Role',
          company: 'Company',
          location: 'Miami, USA',
          sector: 'Digital Production',
          typeOfCommerce: 'B2B',
          startDate: new Date('2018-09-01'),
          endDate: new Date('2022-05-31'),
          responsibilities: ['Create', 'Maintain', 'Upgrade'],
          keyAccomplishments: [
            'Features implemented',
            'Improvements made',
            'Results achieved'
          ],
          url: 'https://example.com/my-project',
          image: 'https://example.com/my-project.jpg',
        }
      ],
    },
    projects: {
      title: 'Projects',
      list: [
        {
          name: 'Project',
          isActive: true,
          description: 'Description of the project.',
          highlights: [
            'Features implemented',
            'Improvements made',
            'Results achieved',
            'Technologies used',
          ],
          url: 'https://example.com/my-project',
          image: 'https://example.com/my-project.jpg',
        }
      ]
    },
    education: {
      title: 'Education',
      list: [
        {
          institution: 'University',
          degree: 'Degree',
          startDate: new Date('2018-09-01'),
          endDate: new Date('2022-05-31'),
        }
      ]
    },
    skills: {
      title: 'Skills',
      list: [
        'Effective communication',
        'Team collaboration',
        'Problem-solving',
        'Adaptability',
        'Time management'
      ]
    }
  },
  pageNotFound: {
    title: '404',
    description: 'Page not found',
    information: 'The page you are looking for does not exist.',
    goBack: 'Go back to portfolio'
  }
};

const homeCollection = defineCollection({
  type: "data",
  schema: z.object({
    basis: z.object({
      fullName: z.string().optional().default(DEFAULT_DATA.home.basis.fullName),
      headline: z.string().optional().default(DEFAULT_DATA.home.basis.headline),
      image: z.string().optional().default(DEFAULT_DATA.home.basis.image),
      email: z.string().optional().default(DEFAULT_DATA.home.basis.email),
      phone: z.string().optional().default(DEFAULT_DATA.home.basis.phone),
      url: z.string().optional().default(DEFAULT_DATA.home.basis.url),
      profiles: z.array(
        z.object({
          network: z.string().optional().default(DEFAULT_DATA.home.basis.profiles[0]!.network),
          username: z.string().optional().default(DEFAULT_DATA.home.basis.profiles[0]!.username),
          url: z.string().optional().default(DEFAULT_DATA.home.basis.profiles[0]!.url),
        })
      ).optional().default(DEFAULT_DATA.home.basis.profiles.map(({ ...profile }) => profile)),
    }).optional(),
    about: z.object({
      title: z.string().optional().default(DEFAULT_DATA.home.about.title),
      summary: z.string().optional().default(DEFAULT_DATA.home.about.summary),
    }).optional(),
    workExperience: z.object({
      title: z.string().optional().default(DEFAULT_DATA.home.workExperience.title),
      list: z.array(
        z.object({
          role: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.role),
          company: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.company),
          location: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.location),
          sector: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.sector),
          typeOfCommerce: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.typeOfCommerce),
          startDate: z.coerce.date().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.startDate),
          endDate: z.coerce.date().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.endDate),
          responsibilities: z.array(z.string()).optional().default(DEFAULT_DATA.home.workExperience.list[0]!.responsibilities),
          keyAccomplishments: z.array(z.string()).optional().default(DEFAULT_DATA.home.workExperience.list[0]!.keyAccomplishments),
          url: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.url),
          image: z.string().optional().default(DEFAULT_DATA.home.workExperience.list[0]!.image),
        })
      ).optional().default(DEFAULT_DATA.home.workExperience.list.map(({ ...position }) => position)),
    }).optional(),
    projects: z.object({
      title: z.string().optional().default(DEFAULT_DATA.home.projects.title),
      list: z.array(
        z.object({
          name: z.string().optional().default(DEFAULT_DATA.home.projects.list[0]!.name),
          isActive: z.boolean().optional().default(DEFAULT_DATA.home.projects.list[0]!.isActive),
          description: z.string().optional().default(DEFAULT_DATA.home.projects.list[0]!.description),
          highlights: z.array(z.string()).optional().default(DEFAULT_DATA.home.projects.list[0]!.highlights),
          url: z.string().optional().default(DEFAULT_DATA.home.projects.list[0]!.url),
          image: z.string().optional().default(DEFAULT_DATA.home.projects.list[0]!.image),
        })
      ).optional().default(DEFAULT_DATA.home.projects.list.map(({ ...project }) => project)),
    }).optional(),
    education: z.object({
      title: z.string().optional().default(DEFAULT_DATA.home.education.title),
      list: z.array(
        z.object({
          institution: z.string().optional().default(DEFAULT_DATA.home.education.list[0]!.institution),
          degree: z.string().optional().default(DEFAULT_DATA.home.education.list[0]!.degree),
          startDate: z.coerce.date().optional().default(DEFAULT_DATA.home.education.list[0]!.startDate),
          endDate: z.coerce.date().optional().default(DEFAULT_DATA.home.education.list[0]!.endDate),
        })
      ).optional().default(DEFAULT_DATA.home.education.list.map(({ ...institution }) => institution)),
    }).optional(),
    skills: z.object({
      title: z.string().optional().default(DEFAULT_DATA.home.skills.title),
      list: z.array(z.string().optional().default(DEFAULT_DATA.home.skills.list[0]!)).optional().default(DEFAULT_DATA.home.skills.list.map((skill) => skill)),
    }).optional(),
  }),
});

const pageNotFoundCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional().default(DEFAULT_DATA.pageNotFound.title),
    description: z.string().optional().default(DEFAULT_DATA.pageNotFound.description),
    information: z.string().optional().default(DEFAULT_DATA.pageNotFound.information),
    goBack: z.string().optional().default(DEFAULT_DATA.pageNotFound.goBack),
  }),
});

export const collections = {
  home: homeCollection,
  pageNotFound: pageNotFoundCollection,
};
