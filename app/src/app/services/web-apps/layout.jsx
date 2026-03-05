export const metadata = {
  title: {
    default: "Web Application Development | M2ATech - Moncton, NB",
    fr: "Developpement d'Applications Web | M2ATech - Moncton, NB",
  },
  description: {
    default:
      "Custom web application development services by M2ATech. We build responsive, high-performance web apps using React, Next.js, and modern technologies in Moncton, New Brunswick.",
    fr: "Services de developpement d'applications web sur mesure par M2ATech. Nous creons des applications web responsives et performantes avec React, Next.js et les technologies modernes a Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "web application development Moncton",
    "custom web apps New Brunswick",
    "React Next.js developer",
    "responsive web design Atlantic Canada",
    "web development services NB",
    "developpement applications web Moncton",
    "applications web sur mesure NB",
    "developpeur React Next.js",
    "design web responsive Canada Atlantique",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/services/web-apps",
    languages: {
      "en-CA": "https://www.m2atech.com/services/web-apps",
      "fr-CA": "https://www.m2atech.com/services/web-apps",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
