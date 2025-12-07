import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import GoogleTagManager from "@/components/Analytics/GoogleTagManager";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import Hotjar from "@/components/Analytics/Hotjar";

export const metadata = {
  title: "M2ATech Solutions Inc. | Agence Web, Mobile, IA & Cybersécurité à Moncton, NB, Canada",
  description:
    "Agence technologique leader au Canada Atlantique. Développement web, applications mobiles, logiciels sur mesure, solutions IA, cybersécurité et SEO à Moncton, Nouveau-Brunswick. Votre partenaire digital au Canada.",
  keywords: [
    // English Keywords - Moncton
    "web development Moncton",
    "web developer Moncton NB",
    "website design Moncton",
    "Moncton web agency",
    "web development company Moncton",
    "best web developer Moncton",

    // English Keywords - New Brunswick
    "web development New Brunswick",
    "mobile app development New Brunswick",
    "software company New Brunswick",
    "IT services New Brunswick",
    "tech company New Brunswick",
    "New Brunswick web design",
    "NB software development",

    // English Keywords - Canada & Atlantic
    "web development Canada",
    "custom software Atlantic Canada",
    "digital agency Canada",
    "software development Maritimes",
    "tech consulting Atlantic Canada",
    "Canadian web development company",

    // English Keywords - Services
    "M2ATech Solutions",
    "e-commerce solutions",
    "responsive web design",
    "React development",
    "Next.js experts",
    "Flutter app development",
    "SEO services NB",
    "digital transformation",
    "AI solutions Canada",
    "artificial intelligence Moncton",
    "chatbot development",
    "machine learning services",
    "cybersecurity services Moncton",
    "penetration testing NB",
    "security audit Canada",
    "data protection services",

    // French Keywords - Moncton
    "développement web Moncton",
    "développeur web Moncton",
    "création site web Moncton",
    "agence web Moncton",
    "meilleur développeur Moncton",
    "site internet Moncton",

    // French Keywords - Nouveau-Brunswick
    "développement web Nouveau-Brunswick",
    "application mobile Nouveau-Brunswick",
    "entreprise informatique Nouveau-Brunswick",
    "services TI Nouveau-Brunswick",
    "développeur NB",
    "création site web NB",

    // French Keywords - Canada & Atlantique
    "développement web Canada",
    "logiciel personnalisé Canada Atlantique",
    "agence digitale Canada",
    "développement logiciel Maritimes",
    "consultation tech Canada",

    // French Keywords - Services
    "solutions e-commerce",
    "design web adaptatif",
    "développement React",
    "experts Next.js",
    "développement Flutter",
    "services SEO NB",
    "transformation digitale",
    "solutions IA Canada",
    "intelligence artificielle Moncton",
    "développement chatbot",
    "apprentissage automatique",
    "cybersécurité Moncton",
    "test de pénétration NB",
    "audit de sécurité Canada",
    "protection des données",
  ],
  authors: [{ name: "M2ATech Solutions Inc." }],
  creator: "M2ATech Solutions Inc.",
  publisher: "M2ATech Solutions Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: ["fr_CA"],
    url: "https://www.m2atech.com",
    siteName: "M2ATech Solutions Inc.",
    title: "M2ATech Solutions Inc. | Web, Mobile, AI & Cybersecurity Experts - Moncton",
    description:
      "Your partner for high-performance web, mobile, AI, cybersecurity and SEO solutions in the Maritimes. Transforming businesses through innovative technology.",
    images: [
      {
        url: "https://www.m2atech.com/logo3.png",
        width: 1200,
        height: 630,
        alt: "M2ATech Solutions - Digital Agency Moncton",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@M2ATechSolutions",
    creator: "@M2ATechSolutions",
    title: "M2ATech Solutions Inc. | Web, Mobile, AI & Cybersecurity Experts",
    description:
      "Custom digital solutions for New Brunswick businesses. Web apps, mobile apps, AI, cybersecurity & SEO services.",
    images: ["https://www.m2atech.com/logo3.png"],
  },
  alternates: {
    canonical: "https://www.m2atech.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "256x256", type: "image/png" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Technology",
  classification: "Business",
  other: {
    "geo.region": "CA-NB",
    "geo.placename": "Moncton",
    "geo.position": "46.0878;-64.7782",
    ICBM: "46.0878, -64.7782",
    "business:contact_data:locality": "Moncton",
    "business:contact_data:region": "New Brunswick",
    "business:contact_data:postal_code": "E1C 8W4",
    "business:contact_data:country_name": "Canada",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Métadonnées essentielles */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#ff5d22" />
        <meta name="msapplication-TileColor" content="#ff5d22" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* DNS Prefetch pour améliorer les performances */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Données structurées JSON-LD - Organization & Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "LocalBusiness", "ProfessionalService", "ITService"],
                  "@id": "https://www.m2atech.com/#organization",
                  name: "M2ATech Solutions Inc.",
                  legalName: "M2ATech Solutions Inc.",
                  alternateName: ["M2ATech", "M2A Tech Solutions", "M2ATech Moncton"],
                  url: "https://www.m2atech.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.m2atech.com/logo3.png",
                    width: 512,
                    height: 512,
                  },
                  image: "https://www.m2atech.com/logo3.png",
                  description:
                    "Agence de développement web, mobile, IA et cybersécurité à Moncton, Nouveau-Brunswick, Canada. Web development, mobile apps, AI solutions and cybersecurity services in Moncton, New Brunswick, Canada.",
                  slogan: "Your Digital Partner in Atlantic Canada | Votre Partenaire Digital au Canada Atlantique",
                  foundingDate: "2024",
                  foundingLocation: {
                    "@type": "Place",
                    name: "Moncton, New Brunswick, Canada"
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "203-74 Belmont Street",
                    addressLocality: "Moncton",
                    addressRegion: "New Brunswick",
                    postalCode: "E1C 8W4",
                    addressCountry: "CA",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "46.0878",
                    longitude: "-64.7782",
                  },
                  telephone: "+1-506-850-6548",
                  email: "contact@m2atech.com",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-506-850-6548",
                      contactType: "customer service",
                      email: "contact@m2atech.com",
                      availableLanguage: ["English", "French"],
                      areaServed: ["CA", "CA-NB", "CA-NS", "CA-PE"],
                      hoursAvailable: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        opens: "09:00",
                        closes: "17:00",
                      },
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-506-850-6548",
                      contactType: "sales",
                      email: "contact@m2atech.com",
                      availableLanguage: ["English", "French"],
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=61578397720574",
                    "https://www.linkedin.com/company/m2atech-solutions-inc",
                    "https://www.instagram.com/m2atech.solutions",
                  ],
                  areaServed: [
                    {
                      "@type": "Country",
                      name: "Canada",
                      "@id": "https://en.wikipedia.org/wiki/Canada",
                    },
                    {
                      "@type": "City",
                      name: "Moncton",
                      containedInPlace: {
                        "@type": "State",
                        name: "New Brunswick"
                      }
                    },
                    {
                      "@type": "State",
                      name: "New Brunswick",
                      "@id": "https://en.wikipedia.org/wiki/New_Brunswick",
                    },
                    {
                      "@type": "State",
                      name: "Nova Scotia",
                    },
                    {
                      "@type": "State",
                      name: "Prince Edward Island",
                    },
                  ],
                  knowsLanguage: ["en", "fr"],
                  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
                  currenciesAccepted: "CAD",
                  priceRange: "$$",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "17:00",
                    },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Application Development",
                          description: "Custom web applications built with modern technologies like React and Next.js",
                          serviceType: "Web Development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Mobile App Development",
                          description: "Native and cross-platform mobile applications for iOS and Android",
                          serviceType: "Mobile Development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Custom Software Development",
                          description: "Tailored software solutions to meet specific business needs",
                          serviceType: "Software Development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SEO Services",
                          description: "Search engine optimization to improve online visibility",
                          serviceType: "SEO",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "AI Solutions",
                          description: "Artificial intelligence solutions including chatbots, machine learning, and process automation",
                          serviceType: "AI Development",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cybersecurity Services",
                          description: "Comprehensive security solutions including audits, penetration testing, and compliance",
                          serviceType: "Cybersecurity",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.m2atech.com/#website",
                  url: "https://www.m2atech.com",
                  name: "M2ATech Solutions Inc.",
                  description: "Digital solutions for modern businesses in Atlantic Canada",
                  publisher: {
                    "@id": "https://www.m2atech.com/#organization",
                  },
                  inLanguage: ["en-CA", "fr-CA"],
                },
              ],
            }),
          }}
        />

      </head>
      <body suppressHydrationWarning>
        {/*
          Analytics Components

          Option 1 (Recommandé): Utiliser Google Tag Manager pour tout gérer
          - Configurez GA4, Hotjar dans l'interface GTM
          - Plus facile à maintenir, pas besoin de redéployer
        */}
        <GoogleTagManager />

        {/*
          Option 2: Utiliser les composants individuels
          - Décommentez les composants ci-dessous si vous n'utilisez pas GTM
          - Nécessite un redéploiement pour chaque modification
        */}
        {/* <GoogleAnalytics /> */}
        {/* <Hotjar /> */}

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}