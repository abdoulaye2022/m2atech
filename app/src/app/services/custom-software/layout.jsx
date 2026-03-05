export const metadata = {
  title: {
    default: "Custom Software Development | M2ATech - Tailored Solutions Moncton",
    fr: "Developpement Logiciel Sur Mesure | M2ATech - Solutions Personnalisees Moncton",
  },
  description: {
    default:
      "Custom software development services by M2ATech. We build tailored enterprise solutions, CRM systems, and cloud-native applications in Moncton, New Brunswick.",
    fr: "Services de developpement logiciel sur mesure par M2ATech. Nous creons des solutions d'entreprise personnalisees, des systemes CRM et des applications cloud-native a Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "custom software development Moncton",
    "enterprise solutions New Brunswick",
    "CRM development Atlantic Canada",
    "cloud-native applications NB",
    "bespoke software solutions",
    "developpement logiciel sur mesure Moncton",
    "solutions d'entreprise Nouveau-Brunswick",
    "developpement CRM Canada Atlantique",
    "applications cloud-native NB",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/services/custom-software",
    languages: {
      "en-CA": "https://www.m2atech.com/services/custom-software",
      "fr-CA": "https://www.m2atech.com/services/custom-software",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
