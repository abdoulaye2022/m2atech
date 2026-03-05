export const metadata = {
  title: {
    default: "AI & Machine Learning Solutions | M2ATech - Moncton, NB",
    fr: "Solutions IA & Machine Learning | M2ATech - Moncton, NB",
  },
  description: {
    default:
      "AI and machine learning solutions by M2ATech. Custom chatbots, process automation, NLP, and computer vision for businesses in Moncton, New Brunswick.",
    fr: "Solutions d'intelligence artificielle et machine learning par M2ATech. Chatbots personnalises, automatisation des processus, NLP et vision par ordinateur pour les entreprises a Moncton, Nouveau-Brunswick.",
  },
  keywords: [
    "AI solutions Moncton",
    "machine learning New Brunswick",
    "custom chatbot development",
    "process automation Atlantic Canada",
    "artificial intelligence NB",
    "solutions IA Moncton",
    "machine learning Nouveau-Brunswick",
    "developpement chatbot personnalise",
    "automatisation processus Canada Atlantique",
    "intelligence artificielle NB",
  ],
  alternates: {
    canonical: "https://www.m2atech.com/services/ai",
    languages: {
      "en-CA": "https://www.m2atech.com/services/ai",
      "fr-CA": "https://www.m2atech.com/services/ai",
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
