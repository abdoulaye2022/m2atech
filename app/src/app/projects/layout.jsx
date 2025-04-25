export const metadata = {
  title: {
    default: "Projects | M2ATech Portfolio - Moncton Web & App Development",
    fr: "Nos Réalisations | Portfolio M2ATech - Développement Web & Mobile à Moncton",
  },
  description: {
    default:
      "Explore M2ATech's portfolio of successful projects: custom web applications, mobile apps and software solutions for businesses in Atlantic Canada.",
    fr: "Découvrez le portfolio de M2ATech : applications web sur mesure, solutions mobiles et logicielles pour entreprises du Canada Atlantique.",
  },
  keywords: [
    "web development portfolio Moncton",
    "mobile app projects New Brunswick",
    "M2ATech case studies",
    "software development examples",
    "Atlantic Canada tech projects",
    "portfolio développement web Moncton",
    "projets d'applications mobiles NB",
    "études de cas M2ATech",
    "exemples de solutions logicielles",
    "réalisations technologiques Canada Atlantique",
    "nos projets",
    "nos réalisations",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/projects",
    languages: {
      "en-CA": "https://www.m2atech.com/projects",
      "fr-CA": "https://www.m2atech.com/projects",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
