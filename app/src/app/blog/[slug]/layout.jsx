const articlesMeta = {
  "investir-application-mobile-2025": {
    title: "5 raisons d'investir dans une application mobile en 2025 | M2ATech Blog",
    description:
      "Decouvrez pourquoi investir dans une application mobile en 2025 est essentiel pour votre entreprise au Nouveau-Brunswick. Accessibilite, fidelisation, avantage concurrentiel.",
    keywords: [
      "application mobile 2025",
      "investir app mobile",
      "developpement mobile Moncton",
      "mobile app investment",
      "app development New Brunswick",
    ],
  },
  "ia-transforme-developpement-logiciel": {
    title: "Comment l'IA transforme le developpement logiciel | M2ATech Blog",
    description:
      "L'intelligence artificielle revolutionne le developpement logiciel. Decouvrez comment l'IA accelere le coding, le testing et l'optimisation des performances.",
    keywords: [
      "IA developpement logiciel",
      "intelligence artificielle programmation",
      "AI software development",
      "machine learning coding",
      "OpenAI integration",
    ],
  },
  "seo-local-nouveau-brunswick": {
    title: "SEO local : dominer les recherches au Nouveau-Brunswick | M2ATech Blog",
    description:
      "Strategies SEO locales pour les entreprises a Moncton, Fredericton et Saint John. Google Business, mots-cles locaux, avis clients et optimisation technique.",
    keywords: [
      "SEO local Nouveau-Brunswick",
      "referencement Moncton",
      "Google Business Profile NB",
      "local SEO New Brunswick",
      "SEO Moncton Fredericton",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = articlesMeta[slug];

  if (!meta) {
    return {
      title: "Article | M2ATech Blog",
      description: "Blog M2ATech Solutions - Articles et insights sur le developpement web, mobile et IA.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://www.m2atech.com/blog/${slug}`,
    },
  };
}

export default function BlogArticleLayout({ children }) {
  return <>{children}</>;
}
