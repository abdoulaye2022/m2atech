export const metadata = {
  title: {
    default: "SEO & Digital Marketing | M2ATech - Boost Your Visibility Moncton",
    fr: "SEO & Marketing Digital | M2ATech - Boostez Votre Visibilite Moncton",
  },
  description: {
    default:
      "Professional SEO and digital marketing services by M2ATech. Keyword strategy, local SEO, content optimization, and performance analytics in Moncton, New Brunswick.",
    fr: "Services professionnels de SEO et marketing digital par M2ATech. Strategie de mots-cles, SEO local, optimisation de contenu et analyses de performance a Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "SEO services Moncton",
    "local SEO New Brunswick",
    "digital marketing Atlantic Canada",
    "search engine optimization NB",
    "Google ranking Moncton",
    "services SEO Moncton",
    "SEO local Nouveau-Brunswick",
    "marketing digital Canada Atlantique",
    "referencement naturel NB",
    "positionnement Google Moncton",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/services/seo",
    languages: {
      "en-CA": "https://www.m2atech.com/services/seo",
      "fr-CA": "https://www.m2atech.com/services/seo",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
