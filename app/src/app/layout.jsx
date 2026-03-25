import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import GoogleTagManager from "@/components/Analytics/GoogleTagManager";
import LinkedInInsight from "@/components/Analytics/LinkedInInsight";

export const metadata = {
  title: "M2ATech Solutions Inc. | Agence Web, Mobile, IA & SEO a Moncton, NB",
  description:
    "Agence technologique leader au Canada Atlantique. Developpement web, applications mobiles, logiciels sur mesure, solutions IA et SEO a Moncton, Nouveau-Brunswick. Votre partenaire digital.",
  keywords: [
    "web development Moncton",
    "web developer Moncton NB",
    "website design Moncton",
    "Moncton web agency",
    "web development company Moncton",
    "best web developer Moncton",
    "web development New Brunswick",
    "mobile app development New Brunswick",
    "software company New Brunswick",
    "IT services New Brunswick",
    "tech company New Brunswick",
    "New Brunswick web design",
    "NB software development",
    "web development Canada",
    "custom software Atlantic Canada",
    "digital agency Canada",
    "software development Maritimes",
    "tech consulting Atlantic Canada",
    "Canadian web development company",
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
    "data protection services",
    "developpement web Moncton",
    "developpeur web Moncton",
    "creation site web Moncton",
    "agence web Moncton",
    "meilleur developpeur Moncton",
    "site internet Moncton",
    "developpement web Nouveau-Brunswick",
    "application mobile Nouveau-Brunswick",
    "entreprise informatique Nouveau-Brunswick",
    "services TI Nouveau-Brunswick",
    "developpeur NB",
    "creation site web NB",
    "developpement web Canada",
    "logiciel personnalise Canada Atlantique",
    "agence digitale Canada",
    "developpement logiciel Maritimes",
    "consultation tech Canada",
    "solutions e-commerce",
    "design web adaptatif",
    "developpement React",
    "experts Next.js",
    "developpement Flutter",
    "services SEO NB",
    "transformation digitale",
    "solutions IA Canada",
    "intelligence artificielle Moncton",
    "developpement chatbot",
    "apprentissage automatique",
    "cybersecurite Moncton",
    "test de penetration NB",
    "audit de securite Canada",
    "protection des donnees",
    "developpement web Fredericton",
    "application mobile Fredericton",
    "agence web Nouveau-Brunswick",
    "solutions IA Atlantique Canada",
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
    title: "M2ATech Solutions Inc. | Web, Mobile, AI & SEO Experts - Moncton",
    description:
      "Your partner for high-performance web, mobile, AI and SEO solutions in the Maritimes. Transforming businesses through innovative technology.",
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
    title: "M2ATech Solutions Inc. | Web, Mobile, AI & SEO Experts",
    description:
      "Custom digital solutions for New Brunswick businesses. Web apps, mobile apps, AI & SEO services.",
    images: ["https://www.m2atech.com/logo3.png"],
  },
  alternates: {
    canonical: "https://www.m2atech.com",
    languages: {
      "en-CA": "https://www.m2atech.com",
      "fr-CA": "https://www.m2atech.com",
    },
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

const organizationJsonLd = {
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
        "Agence de developpement web, mobile, IA et SEO a Moncton, Nouveau-Brunswick, Canada. Web development, mobile apps, AI solutions and SEO services in Moncton, New Brunswick, Canada.",
      slogan: "Your Digital Partner in Atlantic Canada | Votre Partenaire Digital au Canada Atlantique",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Moncton, New Brunswick, Canada",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "74 Belmont Street",
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
        { "@type": "Country", name: "Canada" },
        { "@type": "City", name: "Moncton", containedInPlace: { "@type": "State", name: "New Brunswick" } },
        { "@type": "State", name: "New Brunswick" },
        { "@type": "State", name: "Nova Scotia" },
        { "@type": "State", name: "Prince Edward Island" },
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
            itemOffered: { "@type": "Service", name: "Web Application Development", description: "Custom web applications built with modern technologies like React and Next.js", serviceType: "Web Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android", serviceType: "Mobile Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Custom Software Development", description: "Tailored software solutions to meet specific business needs", serviceType: "Software Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "SEO Services", description: "Search engine optimization to improve online visibility", serviceType: "SEO" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AI Solutions", description: "Artificial intelligence solutions including chatbots, machine learning, and process automation", serviceType: "AI Development" },
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
      publisher: { "@id": "https://www.m2atech.com/#organization" },
      inLanguage: ["en-CA", "fr-CA"],
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coute un site web professionnel a Moncton ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le cout d'un site web professionnel varie selon la complexite du projet. Chez M2ATech Solutions a Moncton, nous proposons des solutions adaptees a votre budget, allant de sites vitrines a des applications web complexes. Contactez-nous pour une consultation gratuite de 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont vos delais de livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos delais varient selon le projet : 2-4 semaines pour un site vitrine, 4-8 semaines pour une application web, et 8-16 semaines pour un logiciel sur mesure. Nous respectons les echeances convenues avec une garantie de livraison a temps.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des clients hors du Nouveau-Brunswick ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous travaillons avec des clients partout au Canada et a l'international. Notre equipe a Moncton collabore efficacement a distance grace a des outils de communication modernes.",
      },
    },
    {
      "@type": "Question",
      name: "Offrez-vous de la maintenance apres livraison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolument. Nous offrons des plans de maintenance et support 24/7 pour assurer le bon fonctionnement de votre solution digitale apres livraison.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des applications mobiles iOS et Android ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous developpons des applications mobiles cross-platform avec Flutter, permettant de cibler iOS et Android avec un seul code source, reduisant les couts et accelerant le developpement.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se deroule une collaboration avec M2ATech ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre processus se deroule en 4 etapes : Consultation gratuite pour comprendre vos besoins, Strategie et planification detaillee, Developpement agile avec points reguliers, et Livraison avec support continu.",
      },
    },
    {
      "@type": "Question",
      name: "Utilisez-vous l'IA dans vos developpements ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous integrons des solutions d'intelligence artificielle (chatbots, automatisation, machine learning) dans nos projets pour maximiser l'efficacite de votre entreprise.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles technologies utilisez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous utilisons les technologies les plus modernes : React, Next.js, Node.js pour le web, Flutter pour le mobile, Python et OpenAI pour l'IA, ainsi que Docker, PostgreSQL et Firebase pour l'infrastructure.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#ff5d22" />
        <meta name="msapplication-TileColor" content="#ff5d22" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          src="https://api.m2abot.ai/widget.js"
          data-token="df4f4808d6976c6d2ad230bd4fbcc79cd19a73d733d7a8b77339453f12547e21"
          async
        />
      </head>
      <body suppressHydrationWarning>
        <GoogleTagManager />
        <LinkedInInsight />

        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
