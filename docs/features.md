# M2ATech Solutions Inc. - Documentation complète des features frontend

## 1. Pages & Routes

### Pages principales
| Route | Description |
|-------|-------------|
| `/` | Page d'accueil (landing page) |
| `/about` | Page À propos |
| `/contact` | Page Contact |
| `/projects` | Portfolio des projets |
| `/jobs` | Offres d'emploi |
| `/privacy` | Politique de confidentialité |
| `/cookie` | Politique des cookies |

### Pages de services (sous-routes)
| Route | Description |
|-------|-------------|
| `/services/web-apps` | Développement d'applications web |
| `/services/mobile-apps` | Développement d'applications mobiles |
| `/services/custom-software` | Solutions logicielles sur mesure |
| `/services/ai` | Solutions d'intelligence artificielle |
| `/services/seo` | Optimisation pour les moteurs de recherche |
| `/services/cybersecurity` | Services de cybersécurité |

### API Routes
| Route | Description |
|-------|-------------|
| `/api/contact` | Endpoint de soumission du formulaire de contact |
| `/api/sitemap` | Génération dynamique du sitemap |

---

## 2. Sections de la page d'accueil

### MainBanner (Hero)
- Titre principal avec sous-titre et bouton CTA
- Image animée avec effets de scale/hover
- Fond avec dégradé et formes décoratives SVG
- Animations d'entrée avec Framer Motion
- Design responsive (mobile/tablette/desktop)

### ServicesSection
- Grille de 6 cartes de services (3 colonnes sur desktop)
- Icônes de services via react-icons
- Chaque carte redirige vers la page de service dédiée
- Code couleur par service (orange, bleu, vert, violet, rose, turquoise)

### ToolsSection (Stack technologique)
- **Langages** : TypeScript, JavaScript, PHP, Dart
- **Frameworks** : React, Next.js, Node.js, Flutter, Laravel
- **Outils & Plateformes** : Git, Firebase, MySQL, PostgreSQL, Docker, Figma, Gimp, OpenAI, LLM, K6
- Logos affichés en grille avec effets hover

### StatsSection
- Compteur animé : 10+ projets
- Métrique de satisfaction client : 98%
- Badge support 24/7
- Animation dynamique déclenchée au scroll (useInView)

### WhyChooseUsSection
- 6 cartes de caractéristiques en grille responsive
- Icônes : Livraison rapide, Partenaire de confiance, Livraison à temps, Support 24/7, Qualité premium, Équipe experte
- Animations hover avec effet translateY

### ClientsSection
- Carrousel à défilement infini avec logos clients
- 7 clients : M2A DocAssist, DIO Cleaning, Masta Barber, Kane Eco Construction, Trio Pro Move, Maelo Studio, OPTEN Niger
- Dégradés en fondu sur les côtés
- Support fond sombre pour certains logos

### TestimonialsSection
- 3 témoignages clients avec avatars
- Notations 5 étoiles
- Images avatar depuis `/img/testimonials/`

### PromotionBanner
- Bannière promotionnelle "Lancement 2025 - 30% de réduction"
- Fond en dégradé (bleu vers violet)
- Badge et bouton d'appel à l'action

---

## 3. Structure des composants

### Composants de mise en page (Layout)
| Composant | Description |
|-----------|-------------|
| `ClientLayout.jsx` | Wrapper avec Chakra UI et LanguageProvider |
| `Navbar.jsx` | Barre de navigation avec dropdowns, hamburger mobile, sélecteur de langue |
| `FooterApp.jsx` | Pied de page avec liens, réseaux sociaux, infos entreprise |
| `ContactBanner.jsx` | Bannière CTA avec boutons email/téléphone |

### Composants utilitaires (Partials)
| Composant | Description |
|-----------|-------------|
| `AnimatedSection.jsx` | Animations déclenchées au scroll (up, down, left, right, scale, fade) |
| `StaggeredContainer.jsx` | Conteneur pour animations enfants décalées |
| `LanguageSwitcher.jsx` | Basculement de langue (EN/FR) avec variante icône |

### Composants Analytics
| Composant | Description |
|-----------|-------------|
| `GoogleTagManager.jsx` | Intégration GTM (ID: GTM-WVHTZ5VK) |
| `GoogleAnalytics.jsx` | Intégration GA4 (optionnel) |
| `Hotjar.jsx` | Tracking comportement utilisateur (ID: 6551244) |
| `LinkedInInsight.jsx` | Suivi conversion LinkedIn (Partner ID: 8374450) |

### Composants de pages de services
| Composant | Description |
|-----------|-------------|
| `WebAppsSection.jsx` | 6 features applications web avec icônes |
| `MobileAppsSection.jsx` | 6 features applications mobiles |
| `CustomSoftwareSection.jsx` | 6 features logiciels sur mesure |
| `AiSection.jsx` | 6 features solutions IA |
| `SeoSection.jsx` | 6 features services SEO |
| `CybersecuritySection.jsx` | 6 features cybersécurité |
| `ProcessSection.jsx` | Processus en 4 étapes (Consultation, Planification, Développement, Support) |
| `ServiceBanner.jsx` | En-tête des pages de service |

### Composants spécifiques aux pages
| Composant | Description |
|-----------|-------------|
| `About.jsx` | Histoire de l'entreprise, valeurs, statistiques |
| `Jobs.jsx` | Offres d'emploi avec suivi des délais |
| `ProjectSection.jsx` | Vitrine portfolio avec filtrage |
| `PrivacyPolicy.jsx` | Contenu politique de confidentialité |
| `CookiePolicy.jsx` | Contenu politique des cookies |
| `NotFound.jsx` | Page d'erreur 404 personnalisée |

---

## 4. Features UI & Animations

### Framework d'animations (Framer Motion)
- Variants de motion : hover, tap, initial, animate, exit
- Hook `useInView` pour animations déclenchées au scroll
- Transitions de page avec opacité et translations Y
- Durées de transition : 0.2s à 0.6s

### Design responsive
- `useBreakpointValue` de Chakra UI pour composants adaptatifs
- Breakpoints : base (mobile) → md (tablette) → lg (desktop)
- Grilles responsives (1 → 2 → 3+ colonnes)
- Navigation flexible (hamburger mobile, navigation complète desktop)

### Éléments interactifs
- Effets hover sur les cartes (translateY, scale, boxShadow)
- Animations boutons (hover: scale 1.05, tap: scale 0.95-0.98)
- Inputs de formulaire avec animations au focus
- Animations d'icônes (rotation, scale)
- Compteurs animés (StatsSection)

### Effets visuels
- Fonds en dégradé (linéaire et radial)
- Formes SVG décoratives (cercles, vecteurs, réseaux, cartes)
- Transitions d'opacité
- Ombres portées au hover
- Effets de border-radius
- Backdrop blur pour les modales

### Palette de couleurs
- **Primaire** : Orange (#ff5d22, #DD6B20)
- **Secondaire** : Blanc, Gris (échelle 50-900)
- **Accents** : Couleurs par service (bleu, vert, violet, rose, turquoise)
- Mode clair par défaut

---

## 5. Navigation

### Menu principal
1. **Services** (Dropdown)
   - Web Apps
   - Mobile Apps
   - Custom Software
   - SEO
   - AI Solutions
   - Cybersecurity
2. **Projets**
3. **Emplois**
4. **Contact**

### Barre d'information supérieure (se réduit au scroll)
- Email : contact@m2atech.com
- Téléphone : +1 (506) 850-6548
- Sélecteur de langue

### Liens du pied de page
- Liens rapides : À propos, Services, Projets, Contact, Emplois
- Liens services : les 6 services
- Légal : Confidentialité, Cookies
- Réseaux sociaux : Facebook, LinkedIn, Instagram, YouTube

### Menu mobile
- Toggle hamburger
- Dropdown services pliable
- Bouton "Travaillez avec nous"

---

## 6. Support multilingue

### Implémentation
- Système basé sur `LanguageContext` (React Context)
- Hook personnalisé `useTranslation`
- Persistance via `localStorage`
- Détection automatique de la langue du navigateur
- Français comme langue par défaut
- `useLayoutEffect` pour éviter le flash d'hydratation

### Langues supportées
- Anglais (en)
- Français (fr) - par défaut

### Structure des clés de traduction
- `nav.*` - Éléments de navigation
- `home.*` - Contenu page d'accueil
- `contact.*` - Formulaire, informations, succès
- `about.*` - Page à propos
- `jobs.*` - Offres d'emploi
- `projects.*` - Portfolio
- `footer.*` - Pied de page
- `servicesPage.*` - Pages de services détaillées

---

## 7. Formulaires & Interactions

### Formulaire de contact
- **Champs** : Nom, Email, Sujet, Message
- Validation en temps réel
- États d'erreur avec messages animés
- Intégration reCAPTCHA Enterprise de Google
- État de chargement pendant la soumission
- Modale de succès avec icône de validation animée
- Réinitialisation du formulaire après succès

### Candidature emploi
- Liens vers le CRM externe (m2acrm.com)
- Suivi du statut des offres (jours restants, badges d'urgence)
- Logique de calcul des délais
- Badge "urgent" automatique quand < 3 jours restants

---

## 8. Intégrations

### Sécurité & Vérification
- Google reCAPTCHA Enterprise (protection formulaire contact)
- Meta tag de vérification Google Search Console

### Analytics & Tracking
| Service | Identifiant | Usage |
|---------|-------------|-------|
| Google Tag Manager | GTM-WVHTZ5VK | Tracking principal |
| Google Analytics 4 | via GTM | Analytics optionnel |
| Hotjar | ID: 6551244, SV: 6 | Comportement utilisateur |
| LinkedIn Insight | Partner ID: 8374450 | Suivi conversions |

### Backend
- Client Axios pour les appels API
- Soumission formulaire vers endpoint `/contact`
- Gestion des erreurs avec codes de statut
- Server action : `api_contact()` pour soumission sécurisée

### APIs externes
- Google Maps Embed API (page contact - carte intégrée)
- Google Fonts (typographie)

---

## 9. SEO & Métadonnées

### Implémentation SEO
- Métadonnées dynamiques dans `layout.jsx`
- Mots-clés en anglais et français (100+ mots-clés)
- Balises Open Graph (aperçus réseaux sociaux)
- Balises Twitter Card
- URLs canoniques
- Données structurées JSON-LD :
  - Schema Organization
  - Schema LocalBusiness
  - Schema ProfessionalService
  - Détails de point de contact
  - Horaires d'ouverture
  - Zone desservie (Canada, provinces atlantiques)
  - Catalogue de services avec offres
  - Schema Website
  - Support multilingue (en-CA, fr-CA)

### SEO local
- Géo-ciblage : Moncton, NB, Canada
- Coordonnées : 46.0878, -64.7782
- Adresse : 74 Belmont Street, Moncton, NB E1C 8W4
- Téléphone : +1-506-850-6548

### Features meta
- Favicon et apple-touch-icon
- Fichier manifest pour PWA
- DNS prefetch pour la performance
- Couleur thème : #ff5d22

---

## 10. Features spéciales

### Progressive Web App (PWA)
- `manifest.json` configuré
- Couleur thème : #ff5d22
- Mode d'affichage : standalone
- Catégories : business, productivity, technology
- Icônes maskable

### Gestion des offres d'emploi
- Offres en temps réel avec suivi des délais
- Système de badge "urgent" (auto quand < 3 jours restants)
- Détection statut "fermé"
- Liens de candidature vers le CRM externe

### Portfolio de projets
- Cartes de projets avec images
- Galeries multi-images par projet
- Tags technologiques (Next.js, React, Node.js, MongoDB, Stripe, E-commerce, etc.)
- URLs live vers les sites présentés
- Liste des features par projet
- Mise en avant des clients

### Contenu dynamique
- Politiques cookies/confidentialité avec dates auto-générées
- Page d'erreur 404 personnalisée
- Modale de succès avec animations
- Compteurs animés en temps réel

---

## 11. Dépendances principales

### Framework
| Package | Version |
|---------|---------|
| next | 14.2.28 |
| react | ^18 |
| react-dom | ^18 |

### UI
| Package | Version |
|---------|---------|
| @chakra-ui/react | ^2.10.7 |
| @chakra-ui/icons | ^2.2.4 |
| @emotion/react | ^11.14.0 |
| @emotion/styled | ^11.14.0 |
| framer-motion | ^12.7.4 |

### Icônes & Bibliothèques
| Package | Version |
|---------|---------|
| react-icons | ^5.5.0 |
| aos | ^2.3.4 |
| axios | ^1.9.0 |

### Sécurité
| Package | Version |
|---------|---------|
| @google-cloud/recaptcha-enterprise | ^6.3.1 |

---

## 12. Variables d'environnement

### Analytics
- `NEXT_PUBLIC_GTM_ID` - Google Tag Manager
- `NEXT_PUBLIC_HOTJAR_ID` - Hotjar
- `NEXT_PUBLIC_HOTJAR_SV` - Version script Hotjar

### APIs
- `NEXT_PUBLIC_API_BASE_URL` - API Backend
- `NEXT_PUBLIC_GOOGLE_API_KEY` - Google Maps
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA

### Vérification
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console

---

## 13. Arborescence des fichiers

```
/src
  /app
    page.jsx                    # Page d'accueil
    layout.jsx                  # Layout racine avec métadonnées
    globals.css                 # Styles globaux
    /about
      layout.jsx, page.jsx
    /contact
      layout.jsx, page.jsx
    /projects
      layout.jsx, page.jsx
    /jobs
      layout.jsx, page.jsx
    /privacy
      layout.jsx, page.jsx
    /cookie
      layout.jsx, page.jsx
    /services
      layout.jsx
      /web-apps/page.jsx
      /mobile-apps/page.jsx
      /custom-software/page.jsx
      /ai/page.jsx
      /seo/page.jsx
      /cybersecurity/page.jsx
    /api
      /contact/contact.js
      /sitemap/route.js
  /components
    /Home                       # 13 composants
    /Services                   # 8 composants
    /Contact                    # 1 composant
    /About                      # 1 composant
    /Jobs                       # 1 composant
    /Projects                   # 1 composant
    /Partials                   # 7 composants
    /Layout                     # 1 composant
    /Analytics                  # 4 composants
  /contexts
    LanguageContext.js
  /hooks
    useTranslation.js
  /translations
    translations.js
  /lib
    /axios
      axiosConfig.js
```
