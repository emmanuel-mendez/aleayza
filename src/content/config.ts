import { PositionTypeOfCommerce } from "@/components/molecules/Position.astro";
import { LAYOUT_DEFAULT_DATA } from "@/layouts/Layout.astro";
import { DEFAULT_PAGE_NOT_FOUND_DATA } from "@/pages/404.astro";
import { HOME_DEFAULT_DATA } from "@/pages/index.astro";
import { z, defineCollection } from "astro:content";

const homeCollection = defineCollection({
  type: "data",
  schema: z.object({
    basis: z.object({
      fullName: z.string().optional().default(HOME_DEFAULT_DATA.basis.fullName),
      headline: z.string().optional().default(HOME_DEFAULT_DATA.basis.headline),
      image: z.string().optional().default(HOME_DEFAULT_DATA.basis.image),
      email: z.string().optional().default(HOME_DEFAULT_DATA.basis.email),
      phone: z.string().optional().default(HOME_DEFAULT_DATA.basis.phone),
      url: z.string().optional().default(HOME_DEFAULT_DATA.basis.url),
      profiles: z.array(
        z.object({
          network: z.string().optional().default(HOME_DEFAULT_DATA.basis.profiles[0]!.network),
          username: z.string().optional().default(HOME_DEFAULT_DATA.basis.profiles[0]!.username),
          url: z.string().optional().default(HOME_DEFAULT_DATA.basis.profiles[0]!.url),
        })
      ).optional().default(HOME_DEFAULT_DATA.basis.profiles.map(({ ...profile }) => profile)),
    }).optional(),
    about: z.object({
      title: z.string().optional().default(HOME_DEFAULT_DATA.about.title),
      summary: z.string().optional().default(HOME_DEFAULT_DATA.about.summary),
    }).optional(),
    workExperience: z.object({
      title: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.title),
      list: z.array(
        z.object({
          role: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.role),
          company: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.company),
          location: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.location),
          sector: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.sector),
          typeOfCommerce: z.nativeEnum(PositionTypeOfCommerce).optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.typeOfCommerce),
          startDate: z.coerce.date().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.startDate),
          endDate: z.coerce.date().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.endDate),
          responsibilities: z.array(z.string()).optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.responsibilities),
          keyAccomplishments: z.array(z.string()).optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.keyAccomplishments),
          url: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.url),
          image: z.string().optional().default(HOME_DEFAULT_DATA.workExperience.list[0]!.image),
        })
      ).optional().default(HOME_DEFAULT_DATA.workExperience.list.map(({ ...position }) => position)),
    }).optional(),
    projects: z.object({
      title: z.string().optional().default(HOME_DEFAULT_DATA.projects.title),
      list: z.array(
        z.object({
          name: z.string().optional().default(HOME_DEFAULT_DATA.projects.list[0]!.name),
          isActive: z.boolean().optional().default(HOME_DEFAULT_DATA.projects.list[0]!.isActive),
          description: z.string().optional().default(HOME_DEFAULT_DATA.projects.list[0]!.description),
          highlights: z.array(z.string()).optional().default(HOME_DEFAULT_DATA.projects.list[0]!.highlights),
          url: z.string().optional().default(HOME_DEFAULT_DATA.projects.list[0]!.url),
          image: z.string().optional().default(HOME_DEFAULT_DATA.projects.list[0]!.image),
        })
      ).optional().default(HOME_DEFAULT_DATA.projects.list.map(({ ...project }) => project)),
    }).optional(),
    education: z.object({
      title: z.string().optional().default(HOME_DEFAULT_DATA.education.title),
      list: z.array(
        z.object({
          institution: z.string().optional().default(HOME_DEFAULT_DATA.education.list[0]!.institution),
          degree: z.string().optional().default(HOME_DEFAULT_DATA.education.list[0]!.degree),
          startDate: z.coerce.date().optional().default(HOME_DEFAULT_DATA.education.list[0]!.startDate),
          endDate: z.coerce.date().optional().default(HOME_DEFAULT_DATA.education.list[0]!.endDate),
        })
      ).optional().default(HOME_DEFAULT_DATA.education.list.map(({ ...institution }) => institution)),
    }).optional(),
    skills: z.object({
      title: z.string().optional().default(HOME_DEFAULT_DATA.skills.title),
      list: z.array(z.string().optional().default(HOME_DEFAULT_DATA.skills.list[0]!)).optional().default(HOME_DEFAULT_DATA.skills.list.map((skill) => skill)),
    }).optional(),
  }),
});

const pageNotFoundCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional().default(DEFAULT_PAGE_NOT_FOUND_DATA.title),
    description: z.string().optional().default(DEFAULT_PAGE_NOT_FOUND_DATA.description),
    information: z.string().optional().default(DEFAULT_PAGE_NOT_FOUND_DATA.information),
    goBack: z.string().optional().default(DEFAULT_PAGE_NOT_FOUND_DATA.goBack),
  }),
});

const configCollection = defineCollection({
  type: "data",
  schema: z.object({
    colors: z.object({
      'primary': z.string().optional().default(LAYOUT_DEFAULT_DATA.primary),
      'analogous--primary': z.string().optional().default(LAYOUT_DEFAULT_DATA.analogousPrimary),
      'analogous--primary-50': z.string().optional().default(LAYOUT_DEFAULT_DATA.analogousPrimary50),
      'analogous--secondary': z.string().optional().default(LAYOUT_DEFAULT_DATA.analogousSecondary),
      'analogous--secondary-50': z.string().optional().default(LAYOUT_DEFAULT_DATA.analogousSecondary50),
      'monochromatic--dark-deep': z.string().optional().default(LAYOUT_DEFAULT_DATA.monochromaticDarkDeep),
    }).optional()
  }),
});

export const collections = {
  homePage: homeCollection,
  notFoundPage: pageNotFoundCollection,
  config: configCollection
};
