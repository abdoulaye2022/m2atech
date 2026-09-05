# M2ATech Solutions Inc. - Documentation complète des features frontend

> Dernière mise à jour : 5 septembre 2026

## 1. Pages & Routes

### Pages principales
| Route | Description |
|-------|-------------|
| `/` | Page d'accueil (landing page) |
| `/about` | Page À propos |
| `/contact` | Page Contact |
| `/projects` | Portfolio des projets (32 réalisations) |
| `/products` | Produits SaaS maison (6 produits) |
| `/blog` | Liste des articles de blog |
| `/blog/[slug]` | Article de blog (3 articles) |
| `/jobs` | Offres d'emploi |
| `/privacy` | Politique de confidentialité |
| `/privacy/beydoum-auto` | Politique de confidentialité de l'app Beydoum Auto (client) |
| `/cookie` | Politique des cookies |

### Pages de services (sous-routes)
| Route | Description |
|-------|-------------|
| `/services/web-apps` | Développement d'applications web |
| `/services/mobile-apps` | Développement d'applications mobiles |
| `/services/custom-software` | Solutions logicielles sur mesure |
| `/services/ai` | Solutions d'intelligence artificielle |
| `/services/seo` | Optimisation pour les moteurs de recherche |
| `/services/maintenance` | Maintenance & hébergement, 3 forfaits mensuels |

> La page cybersécurité n'existe plus. Les clés de traduction `nav.cybersecurity` et `footer.cybersecurity` subsistent mais ne sont plus utilisées.

### Routes techniques
| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Sitemap généré par `app/sitemap.js` (18 URL) |
| `/robots.txt` | Règles robots générées par `app/robots.js` |
| `/api/contact` | Server action `api_contact()` vers le backend PHP |
| `/api/sitemap` | Ancienne génération de sitemap (conservée) |

---

## 2. Sections de la page d'accueil (dans l'ordre)

| # | Composant | Contenu |
|---|-----------|---------|
| 1 | `MainBanner` | Hero |
| 2 | `ServicesSection` | 6 cartes de services |
| 3 | `OffersSection` | Grille de 8 offres populaires |
| 4 | `RecentProjectsSection` | Carrousel des 8 projets récents |
| 5 | `StatsSection` | Compteurs animés |
| 6 | `WhyChooseUsSection` | 6 arguments |
| 7 | `PromotionBanner` | Bannière consultation gratuite |
| 8 | `ProcessSection` | Processus en 4 étapes |
| 9 | `ToolsSection` | Stack technologique |
| 10 | `ContactBanner` | Appel à l'action contact |
| 11 | `ClientsSection` | Carrousel logos clients |
| 12 | `TestimonialsSection` | Témoignages |
| 13 | `BlogPreviewSection` | Aperçu des 3 articles |
| 14 | `FAQSection` | 8 questions fréquentes |
| 15 | `FooterApp` | Pied de page |

### MainBanner (Hero)
- Badge "Your digital growth partner in Atlantic Canada"
- Titre orienté résultat avec mot-clé en dégradé orange
- Deux boutons : "Get My Free Quote" (→ `/contact`) et "See Our Work" (→ `/projects`)
- Trois preuves de confiance : consultation gratuite 30 min, devis sous 24 h, sans engagement
- Trois compteurs animés : 32+ projets, 98 % satisfaction, 6+ années
- Hauteur limitée à 88 % de l'écran sur desktop pour laisser voir la section suivante
- Animations d'entrée Framer Motion accélérées (stagger 0,08 s, durée 0,4 s)
- Illustration à droite masquée sur mobile

### ServicesSection
- Grille de 6 cartes (3 colonnes desktop) : Web Apps, Mobile Apps, Custom Software, SEO, AI Solutions, Maintenance & Hosting
- Badge "Popular" sur AI Solutions
- Code couleur par service (orange, bleu, vert, violet, rose, turquoise)
- Flèche "Learn more" au survol

### OffersSection (Solutions populaires)
- Bloc texte à gauche + grille de 8 pastilles cliquables à droite
- Offres : Site vitrine, Boutique e-commerce, Application mobile, CRM & logiciel de gestion, Chatbot IA & automatisation, Refonte de site, Maintenance & hébergement, SEO local
- Chaque pastille pointe vers la page service correspondante
- Ancre `#offers`

### RecentProjectsSection (Réalisations récentes)
- Carrousel horizontal des 8 premiers projets de `getProjects()` (source unique : `ProjectSection.jsx`)
- 4 cartes visibles sur desktop, 2 sur tablette, 1 sur mobile, contenu dans la largeur 1280 px
- Flèches de défilement carte par carte, scroll-snap, lien "View all projects"
- Chaque carte : capture, badge catégorie avec icône, titre, extrait (3 lignes), 3 tags, boutons "View details" (→ `/projects`) et "Visit site" (lien externe)
- Ancre `#recent-projects`

### StatsSection
- 5 compteurs animés : 32+ projets, 98 % satisfaction, 24/7 support, 6+ années, 15+ technologies
- Fond dégradé orange
- Animation déclenchée au scroll (`useInView`)

### WhyChooseUsSection
- 6 cartes : Livraison rapide, Partenaire de confiance, Livraison à temps, Support 24/7, Qualité premium, Équipe experte

### PromotionBanner
- Badge "Places limitées", titre "Lancez votre projet sans risque"
- Consultation stratégique gratuite de 30 min et devis détaillé sous 24 h

### ProcessSection
- 4 étapes : Consultation, Planification, Développement, Support

### ToolsSection (Stack technologique)
- **Langages** : TypeScript, JavaScript, PHP, Dart
- **Frameworks** : React, Next.js, Node.js, Flutter, Laravel
- **Outils & Plateformes** : Git, Firebase, MySQL, PostgreSQL, Docker, Figma, Gimp, OpenAI, LLM, K6

### ClientsSection
- Carrousel à défilement infini, logos cliquables vers le site du client
- 11 clients : D&H Global Supply, AxxesBusiness, 4 Plus One Contracting, Bin Bab Makka, M2A DocAssist, DIO Cleaning, Masta Barber, Kane Eco Construction, Trio Pro Move, Maelo Studio, OPTEN Niger

### TestimonialsSection
- 4 témoignages : Masta Barber, DIO Cleaning Services, Trio Pro Move & Clean, Frais Chez Vous
- Notations 5 étoiles, avatars depuis `/img/testimonials/`

### BlogPreviewSection
- 3 cartes d'articles avec catégorie colorée, date et temps de lecture

### FAQSection
- 8 questions/réponses (coût, délais, zone desservie, maintenance, iOS/Android, déroulement, IA, technologies)

---

## 3. Page Produits (`/products`)

- Composant `ProductsSection` avec en-tête "Made in Moncton"
- 6 produits SaaS maison, tirés de `getProjects()` via `getProducts()` (clés `PRODUCT_KEYS`) :

| Produit | Catégorie | URL |
|---------|-----------|-----|
| M2aBot | Chatbot IA bilingue | https://m2abot.ai |
| M2A DocAssist | Documentation médicale IA | https://m2adoc.com |
| M2A CRM | CRM pour PME | https://m2acrm.com |
| WasiFacture | Facturation web & mobile (FCFA) | https://wasifacture.com |
| TimeToPray | App islamique mobile | https://timetopray.app |
| EpiList | Liste de courses familiale | https://epilist.app |

- Chaque carte : capture, icône, titre, catégorie, description, 4 tags, boutons "Visit" et "Request a demo" (→ `/contact`)
- Ancre par produit (`/products#m2abot`, etc.) utilisée par le menu
- Bandeau d'appel à l'action orange en bas de page, puis `ContactBanner`

---

## 3b. Page Maintenance & hébergement (`/services/maintenance`)

- Composant `MaintenanceSection`, même gabarit que les autres pages services (Navbar, section, `ContactBanner`, footer)
- 6 features incluses : hébergement rapide au Canada, sauvegardes automatiques, mises à jour & correctifs, surveillance 24/7, modifications incluses, rapports de performance
- 3 forfaits mensuels en CAD, définis dans la constante `PLANS` du composant (seul endroit où changer les prix) :

| Forfait | Prix | Pour qui |
|---------|------|----------|
| Essentiel | 49 $/mois | Sites vitrines |
| Pro (mis en avant) | 99 $/mois | Entreprises qui mettent à jour régulièrement |
| Premium | 199 $/mois | E-commerce, SaaS, fort trafic |

- Contenu de chaque forfait (liste `included`) dans `servicesPage.maintenance.plans.*` en EN et FR
- Bouton "Choisir ce forfait" → `/contact?plan=<clé>`
- Bandeau de garanties (sans engagement, données au Canada, délais garantis) et FAQ de 3 questions en accordéon
- Ancre `#pricing` pour lier directement aux forfaits
- Présente dans le menu Services, le pied de page, la grille de services et les offres populaires de l'accueil, et le sitemap

---

## 4. Portfolio (`/projects`)

- 32 projets définis dans `getProjects(t)` (exporté depuis `ProjectSection.jsx`), du plus récent au plus ancien
- Chaque projet : clé, titre, description, catégorie, tags, icône react-icons, 3 captures, liste de features, URL live
- Galerie d'images par projet avec navigation, modale plein écran
- Captures stockées dans `/public/img/projects/<clé>1..3.png` (1440×900)
- Pour ajouter un projet : insérer l'objet en tête de `getProjects`, ajouter les traductions `projects.projects.<clé>` en EN et FR, déposer 3 captures, puis incrémenter les compteurs dans `StatsSection.jsx` et `MainBanner.jsx`

---

## 5. Structure des composants

### Layout & Partials
| Composant | Description |
|-----------|-------------|
| `Layout/ClientLayout.jsx` | Wrapper Chakra UI + LanguageProvider |
| `Partials/Navbar.jsx` | Navigation fixe avec menus déroulants Services et Produits (composant `DropdownMenu` partagé), menu mobile repliable, sélecteur de langue, bouton "Work with us" |
| `Partials/FooterApp.jsx` | Pied de page 5 colonnes : Liens rapides, Services, Produits, Contact (courriel, téléphone cliquable, adresse), Réseaux sociaux ; newsletter ; liens légaux |
| `Partials/ContactBanner.jsx` | Bannière CTA avec boutons courriel et contact |
| `Partials/AnimatedSection.jsx` | Animations déclenchées au scroll |
| `Partials/StaggeredContainer.jsx` | Conteneur pour animations enfants décalées |
| `Partials/LanguageSwitcher.jsx` | Basculement EN/FR |
| `Partials/FloatingCTA.jsx` | Non utilisé (remplacé par le widget M2aBot) |

### Analytics
| Composant | Description |
|-----------|-------------|
| `Analytics/GoogleTagManager.jsx` | GTM (ID : GTM-WVHTZ5VK) |
| `Analytics/GoogleAnalytics.jsx` | GA4 (optionnel, via GTM) |
| `Analytics/Hotjar.jsx` | Hotjar (ID : 6551244) |
| `Analytics/LinkedInInsight.jsx` | LinkedIn Insight (Partner ID : 8374450) |

### Home (15 composants, voir section 2)

### Services
| Composant | Description |
|-----------|-------------|
| `Services/WebAppsSection.jsx` | 6 features applications web |
| `Services/MobileAppsSection.jsx` | 6 features applications mobiles |
| `Services/CustomSoftwareSection.jsx` | 6 features logiciels sur mesure |
| `Services/AiSection.jsx` | 6 features solutions IA |
| `Services/SeoSection.jsx` | 6 features SEO |
| `Services/MaintenanceSection.jsx` | Page Maintenance & hébergement : 6 features, 3 forfaits, garanties, FAQ |
| `Services/ProcessSection.jsx` | Processus en 4 étapes (aussi sur l'accueil) |
| `Services/ServiceBanner.jsx` | En-tête des pages de service |

### Pages
| Composant | Description |
|-----------|-------------|
| `About/About.jsx` | Histoire, valeurs, statistiques |
| `Contact/Contact.jsx` | Formulaire de contact avec reCAPTCHA Enterprise |
| `Products/ProductsSection.jsx` | Grille des produits SaaS |
| `Projects/ProjectSection.jsx` | Portfolio + export `getProjects` |
| `Jobs/Jobs.jsx` | Offres d'emploi et état vide |
| `privacy-policy/PrivacyPolicy.jsx` | Politique de confidentialité |
| `cookie-policy/CookiePolicy.jsx` | Politique des cookies |
| `not-found/NotFound.jsx` | Page 404 |

---

## 6. Navigation

### Menu principal (desktop)
1. **Services** (menu déroulant, 6 entrées avec icône et description)
2. **Produits** (menu déroulant, 6 entrées avec icône et description + lien "Voir tous nos produits")
3. **Projets**
4. **Emplois**
5. **Contact**
6. Sélecteur de langue + bouton "Travaillez avec nous"

### Menu mobile
- Hamburger, sections Services et Produits repliables, liens directs, bouton "Travaillez avec nous"

### Pied de page
- **Liens rapides** : À propos, Services, Produits, Projets, Blog, Carrières, Contact
- **Nos services** : les 6 services
- **Nos produits** : M2aBot, M2A DocAssist, M2A CRM, WasiFacture, TimeToPray (liens externes) + "Tous les produits"
- **Contact** : contact@m2atech.com, +1 (506) 850-6548 (lien `tel:`), 74 Belmont Street, Moncton
- **Réseaux** : Facebook, LinkedIn, Instagram
- Newsletter (champ + bouton, sans traitement backend)
- Légal : Confidentialité, Cookies

---

## 7. Support multilingue

- `LanguageContext` (React Context) + hook `useTranslation`
- Français par défaut côté SSR ; côté client, langue sauvegardée dans `localStorage` sinon langue du navigateur
- Contenu masqué (`visibility: hidden`) jusqu'à l'hydratation pour éviter le flash
- Fichier unique `translations/translations.js` (~2 400 lignes), objets `en` et `fr` symétriques
- Clés principales : `nav.*`, `home.*` (dont `home.offers.*`, `home.recentProjects.*`), `contact.*`, `about.*`, `jobs.*`, `products.*`, `projects.*`, `footer.*`, `ctaBanner.*`, `servicesPage.*`, `notFound.*`
- `t()` retourne aussi des tableaux (ex. `projects.projects.<clé>.features`)

---

## 8. Formulaires & Interactions

### Formulaire de contact
- Champs : Nom, Email, Sujet, Message
- Validation en temps réel, messages d'erreur animés
- reCAPTCHA Enterprise via le hook `useRecaptcha` (action `CONTACT_FORM`), badge masqué pour ne pas chevaucher le widget
- Envoi via `api_contact()` → backend PHP `POST /contact` (vérification reCAPTCHA côté serveur, envoi Brevo)
- Modale de succès animée, réinitialisation du formulaire

### Offres d'emploi
- Liste `jobOpenings` dans `Jobs.jsx` (actuellement vide)
- État vide : encart "Aucun poste ouvert pour le moment" + bouton candidature spontanée
- Quand une offre existe : calcul des jours restants, badge "urgent" sous 3 jours, statut "Fermé" après la date limite, lien de candidature vers m2acrm.com

---

## 9. Intégrations

| Service | Détail |
|---------|--------|
| Widget M2aBot | Script `https://api.m2abot.ai/widget.js` chargé dans `layout.jsx`, chatbot "Alex AI Assistant" sur toutes les pages |
| Google reCAPTCHA Enterprise | Protection du formulaire de contact |
| Google Tag Manager | GTM-WVHTZ5VK |
| Hotjar | ID 6551244, SV 6 |
| LinkedIn Insight | Partner ID 8374450 |
| Google Maps Embed | Carte sur la page contact |
| Google Fonts | Syne (titres) et DM Sans (texte) |
| Backend | Axios (`lib/axios/axiosConfig.js`) vers `NEXT_PUBLIC_API_BASE_URL` |

---

## 10. SEO & Métadonnées

- Métadonnées définies dans chaque `layout.jsx` avec `title` et `description` en **chaînes simples** (Next.js n'accepte pas d'objet `{default, fr}` : il rendrait `[object Object]`)
- Page d'accueil ciblée en anglais sur les requêtes réelles : "Web & Mobile App Development Company in Moncton, NB | M2ATech", description mentionnant "Moncton IT company"
- `<html lang="en">`, Open Graph (locale en_CA, alternate fr_CA), Twitter Card, canonical, alternates en-CA / fr-CA
- Données structurées JSON-LD : Organization, LocalBusiness, ProfessionalService, WebSite, catalogue de services, horaires, zone desservie
- SEO local : Moncton, NB, coordonnées 46.0878 / -64.7782, 74 Belmont Street, +1-506-850-6548
- Sitemap : accueil, about, products, projects, contact, jobs, 6 services, privacy, cookie, blog + 3 articles
- Robots : tout autorisé sauf `/api/`, `/admin/`, `/_next/`, `/private/`
- Favicon, apple-touch-icon, manifest PWA, couleur thème #ff5d22

---

## 11. Design & Animations

- Palette : orange primaire #ff5d22 (hover #e04d15), fonds #ffffff / #f8f8f6 / #f2f1ee, texte #1c1c21 / #55556a / #8e8ea0
- Variables CSS dans `globals.css` (`--color-*`, `--font-display`, `--font-body`)
- Classes utilitaires : `glass-card`, `gradient-text`, `section-number`, `grain-bg`, `infinite-scroll`, `accent-bar`
- Framer Motion : animations d'entrée, `whileInView` avec `viewport={{ once: true }}`, hover translateY / scale
- Chakra UI 2 pour la mise en page responsive (`base` → `sm` → `md` → `lg`)
- Mode clair uniquement

---

## 12. Dépendances principales

| Package | Version |
|---------|---------|
| next | 14.2.28 |
| react / react-dom | ^18 |
| @chakra-ui/react | ^2.10.7 |
| @chakra-ui/icons | ^2.2.4 |
| @emotion/react, @emotion/styled | ^11.14.0 |
| framer-motion | ^12.7.4 |
| react-icons | ^5.5.0 |
| axios | ^1.9.0 |
| aos | ^2.3.4 |
| @google-cloud/recaptcha-enterprise | ^6.3.1 |

---

## 13. Variables d'environnement

| Variable | Usage |
|----------|-------|
| `NEXT_PUBLIC_API_BASE_URL` | URL du backend PHP |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Clé site reCAPTCHA Enterprise |
| `NEXT_PUBLIC_GOOGLE_API_KEY` | Google Maps Embed |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 (optionnel) |
| `NEXT_PUBLIC_HOTJAR_ID`, `NEXT_PUBLIC_HOTJAR_SV` | Hotjar |

---

## 14. Arborescence des fichiers

```
/src
  /app
    page.jsx, layout.jsx, globals.css, not-found.jsx
    sitemap.js, robots.js
    /about, /contact, /projects, /products, /jobs, /privacy, /cookie, /blog
      layout.jsx, page.jsx
    /privacy/beydoum-auto
    /blog/[slug]
    /services
      layout.jsx
      /web-apps, /mobile-apps, /custom-software, /ai, /seo, /maintenance
        layout.jsx, page.jsx
    /api
      /contact/contact.js
      /sitemap/route.js
  /components
    /Home              # 15 composants (dont OffersSection, RecentProjectsSection)
    /Products          # ProductsSection.jsx
    /Projects          # ProjectSection.jsx (exporte getProjects)
    /Services          # 8 composants
    /Contact, /About, /Jobs
    /Partials          # Navbar, FooterApp, ContactBanner, AnimatedSection, …
    /Layout            # ClientLayout.jsx
    /Analytics         # 4 composants
    /privacy-policy, /cookie-policy, /not-found
  /contexts
    LanguageContext.js
  /hooks
    useTranslation.js
    useRecaptcha.js
  /translations
    translations.js
  /lib/axios
    axiosConfig.js
```
