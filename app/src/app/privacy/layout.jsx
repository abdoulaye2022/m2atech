export const metadata = {
  title: {
    default: "Privacy Policy | M2ATech Web & Mobile Development Moncton",
    fr: "Politique de confidentialité | M2ATech Développement web et mobile Moncton",
  },
  description: {
    default:
      "Read M2ATech's Privacy Policy. We are committed to protecting your personal information as a leading software development company in Moncton, New Brunswick.",
    fr: "Consultez la politique de confidentialité de M2ATech. Nous protégeons vos informations personnelles en tant qu'entreprise spécialisée en développement logiciel à Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "privacy policy tech company",
    "data protection Moncton",
    "M2ATech privacy commitment",
    "New Brunswick web development privacy",
    "Atlantic Canada IT security",
    "politique de confidentialité entreprise tech",
    "protection des données Moncton",
    "engagement confidentialité M2ATech",
    "développement web Nouveau-Brunswick vie privée",
    "sécurité informatique Canada Atlantique",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/privacy",
    languages: {
      "en-CA": "https://www.m2atech.com/privacy",
      "fr-CA": "https://www.m2atech.com/privacy",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
