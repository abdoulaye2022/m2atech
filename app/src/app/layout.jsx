import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import GoogleTagManager from "@/components/Analytics/GoogleTagManager";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import Hotjar from "@/components/Analytics/Hotjar";

export const metadata = {
  title: "M2ATech Solutions Inc. | Web & Mobile Development in Moncton, NB",
  description:
    "Specialized in web apps, mobile apps, custom software and SEO services in Atlantic Canada. Moncton's leading tech solutions provider for businesses seeking digital transformation.",
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
    "software development Maritimes",
    "digital transformation NB",
    "tech consulting Moncton",

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
    "développement logiciel Maritimes",
    "transformation digitale NB",
    "consultation tech Moncton",
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
    title: "M2ATech Solutions Inc. | Digital Technology Experts - Moncton",
    description:
      "Your partner for high-performance web, mobile and SEO solutions in the Maritimes. Transforming businesses through innovative technology.",
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
    title: "M2ATech Solutions Inc. | Expert Developers in Moncton",
    description:
      "Custom digital solutions for New Brunswick businesses. Web apps, mobile apps, and SEO services.",
    images: ["https://www.m2atech.com/logo3.png"],
  },
  alternates: {
    canonical: "https://www.m2atech.com",
    languages: {
      "en-CA": "https://www.m2atech.com/en",
      "fr-CA": "https://www.m2atech.com/fr",
    },
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

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
                  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
                  "@id": "https://www.m2atech.com/#organization",
                  name: "M2ATech Solutions Inc.",
                  legalName: "M2ATech Solutions Inc.",
                  url: "https://www.m2atech.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.m2atech.com/logo3.png",
                    width: 512,
                    height: 512,
                  },
                  image: "https://www.m2atech.com/logo3.png",
                  description:
                    "Specialized in web apps, mobile apps, custom software and SEO services in Atlantic Canada.",
                  foundingDate: "2024",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "203-74 Belmont Street",
                    addressLocality: "Moncton",
                    addressRegion: "NB",
                    postalCode: "E1C 8W4",
                    addressCountry: "CA",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "46.0878",
                    longitude: "-64.7782",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-506-850-6548",
                      contactType: "customer service",
                      email: "contact@m2atech.com",
                      availableLanguage: ["en", "fr"],
                      areaServed: ["CA-NB", "CA-NS", "CA-PE"],
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+1-506-850-6548",
                      contactType: "sales",
                      email: "contact@m2atech.com",
                      availableLanguage: ["en", "fr"],
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/profile.php?id=61578397720574",
                    "https://www.linkedin.com/company/m2atech-solutions-inc",
                    "https://www.instagram.com/m2atech.solutions",
                  ],
                  areaServed: [
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