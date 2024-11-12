// next.config.js

module.exports = {
  reactStrictMode: true, // Active le mode strict de React pour une meilleure gestion des erreurs
  webpack: (config, { dev }) => {
    if (dev) {
      // Utiliser le cache du système de fichiers pendant le développement
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
  experimental: {
    reactRefresh: true, // Assurez-vous que Fast Refresh est activé pour un rechargement rapide des composants
  },
};
