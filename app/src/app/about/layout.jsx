export const metadata = {
  title: {
    default: "About M2ATech | Web & Mobile Development Experts in Moncton",
    fr: "À propos de M2ATech | Experts en développement web et mobile à Moncton",
  },
  description: {
    default:
      "M2ATech is a leading software development company in Moncton, specializing in custom web & mobile apps, SEO, and innovative digital solutions for Atlantic Canada.",
    fr:
      "M2ATech est une entreprise spécialisée en développement logiciel à Moncton, offrant des applications web/mobiles sur mesure, du SEO et des solutions digitales innovantes pour le Canada Atlantique.",
  },
  keywords: [
    "web development company Moncton",
    "about M2ATech team",
    "New Brunswick tech experts",
    "software development story",
    "Atlantic Canada IT company",
    "entreprise développement web Moncton",
    "équipe M2ATech",
    "experts technologiques NB",
    "histoire développement logiciel",
    "entreprise informatique Canada Atlantique",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/about",
    languages: {
      "en-CA": "https://www.m2atech.com/about",
      "fr-CA": "https://www.m2atech.com/about",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
