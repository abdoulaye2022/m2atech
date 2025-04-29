export const metadata = {
  title: {
    default: "Cookie Policy | M2ATech Web & Mobile Development Moncton",
    fr: "Politique de cookies | M2ATech Développement web et mobile Moncton",
  },
  description: {
    default:
      "Learn how M2ATech uses cookies to enhance your browsing experience. Our Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.",
    fr:
      "Découvrez comment M2ATech utilise les cookies pour améliorer votre expérience de navigation. Notre Politique de cookies explique ce que sont les cookies, comment nous les utilisons et comment vous pouvez gérer vos préférences.",
  },
  keywords: [
    "cookie policy",
    "website cookies Moncton",
    "data privacy M2ATech",
    "web development cookies",
    "GDPR compliance Canada",
    "politique de cookies",
    "cookies site web Moncton",
    "confidentialité des données M2ATech",
    "cookies développement web",
    "conformité RGPD Canada",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/cookie-policy",
    languages: {
      "en-CA": "https://www.m2atech.com/cookie-policy",
      "fr-CA": "https://www.m2atech.com/cookie-policy",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
