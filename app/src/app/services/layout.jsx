export const metadata = {
  title: {
    default: "Services | M2ATech - Web & Mobile Development Experts in Moncton",
    fr: "Services | M2ATech - Experts en développement web et mobile à Moncton",
  },
  description: {
    default:
      "Discover our professional services: custom web & mobile apps development, SEO optimization and tailored software solutions in Atlantic Canada.",
    fr:
      "Découvrez nos services professionnels : développement d'applications web et mobiles, optimisation SEO et solutions logicielles sur mesure dans le Canada Atlantique.",
  },
  keywords: [
    "web development services Moncton",
    "mobile app development New Brunswick",
    "custom software solutions",
    "professional SEO services",
    "IT company Atlantic Canada",
    "services développement web Moncton",
    "création d'applications mobiles NB",
    "solutions logicielles personnalisées",
    "services SEO professionnels",
    "entreprise informatique Canada Atlantique",
    "M2ATech services",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/services",
    languages: {
      "en-CA": "https://www.m2atech.com/services",
      "fr-CA": "https://www.m2atech.com/services",
    },
  },
};
export default function Layout({ children }) {
  return <>{children}</>;
}
