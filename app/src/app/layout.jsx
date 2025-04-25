import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: {
    default: "M2ATech Solutions Inc. | Web & Mobile Development in Moncton, NB",
    fr: "M2ATech Solutions Inc. | Développement Web & Mobile à Moncton, NB",
  },
  description: {
    default:
      "Specialized in web apps, mobile apps, custom software and SEO services in Atlantic Canada. Moncton's leading tech solutions provider.",
    fr: "Agence spécialisée en développement d'applications web, mobiles et logiciels sur mesure à Moncton. Services SEO pour booster votre visibilité en Atlantique.",
  },
  keywords: [
    // English Keywords
    "web development Moncton",
    "mobile app development New Brunswick",
    "custom software Atlantic Canada",
    "SEO services NB",
    "M2ATech Solutions",
    "digital agency Moncton",
    "website development",
    "e-commerce solutions",
    "responsive web design",
    "React development",
    "Next.js experts",

    // French Keywords
    "développement web Moncton",
    "application mobile Nouveau-Brunswick",
    "logiciel personnalisé Canada Atlantique",
    "services SEO NB",
    "agence digitale Moncton",
    "création site web",
    "solutions e-commerce",
    "design web adaptatif",
    "développement React",
    "experts Next.js",
  ],
  openGraph: {
    title: {
      default: "M2ATech Solutions Inc. | Digital Technology Experts - Moncton",
      fr: "M2ATech Solutions Inc. | Experts en Technologie Digitale - Moncton",
    },
    description: {
      default:
        "Your partner for high-performance web, mobile and SEO solutions in the Maritimes",
      fr: "Votre partenaire pour solutions web, mobiles et SEO performantes dans les Maritimes",
    },
    url: "https://www.m2atech.com",
    siteName: "M2ATech Solutions Inc.",
    locale: "fr_CA",
    alternateLocales: ["en_CA"],
    type: "website",
    images: [
      {
        url: "/logo3.png",
        width: 1200,
        height: 630,
        alt: {
          default: "M2ATech Solutions - Digital Agency Moncton",
          fr: "M2ATech Solutions - Agence Digitale Moncton",
        },
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "M2ATech Solutions Inc. | Expert Developers in Moncton",
      fr: "M2ATech Solutions Inc. | Développeurs Experts à Moncton",
    },
    description: {
      default: "Custom digital solutions for New Brunswick businesses",
      fr: "Solutions digitales sur mesure pour entreprises du Nouveau-Brunswick",
    },
    images: ["/logo3.png"],
  },
  alternates: {
    canonical: "https://www.m2atech.com",
    languages: {
      "fr-CA": "https://www.m2atech.com",
      "en-CA": "https://www.m2atech.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
