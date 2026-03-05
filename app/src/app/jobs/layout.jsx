export const metadata = {
  title: {
    default: "Careers at M2ATech | Join Our Tech Team in Moncton",
    fr: "Carrières chez M2ATech | Rejoignez notre équipe tech à Moncton",
  },
  description: {
    default:
      "Join M2ATech Solutions! Explore career opportunities in web development, mobile apps, AI, and SEO. Work with a dynamic tech team in Moncton, New Brunswick.",
    fr: "Rejoignez M2ATech Solutions ! Découvrez nos offres d'emploi en développement web, applications mobiles, IA et SEO. Travaillez avec une équipe tech dynamique à Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "tech jobs Moncton",
    "web developer jobs New Brunswick",
    "M2ATech careers",
    "software engineer Atlantic Canada",
    "IT jobs Moncton NB",
    "emplois tech Moncton",
    "développeur web Nouveau-Brunswick",
    "carrières M2ATech",
    "ingénieur logiciel Canada Atlantique",
    "emplois informatique Moncton NB",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/jobs",
    languages: {
      "en-CA": "https://www.m2atech.com/jobs",
      "fr-CA": "https://www.m2atech.com/jobs",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
