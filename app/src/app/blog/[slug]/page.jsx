"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  Flex,
  Icon,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { FaClock, FaChevronRight, FaCalendar, FaUser } from "react-icons/fa";
import { useParams } from "next/navigation";
import Navbar from "@/components/Partials/Navbar";
import FooterApp from "@/components/Partials/FooterApp";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const articles = {
  "investir-application-mobile-2025": {
    title: "5 raisons d'investir dans une application mobile en 2025",
    category: "Mobile",
    categoryColor: "#3b82f6",
    date: "28 Fevrier 2025",
    readTime: "5 min",
    author: "M2ATech Solutions",
    content: [
      "Le marche des applications mobiles continue de croitre de maniere exponentielle. Pour les entreprises du Nouveau-Brunswick et du Canada Atlantique, investir dans une application mobile en 2025 n'est plus un luxe, mais une necessite strategique.",
      "1. Accessibilite 24/7 : Une application mobile permet a vos clients d'acceder a vos services a tout moment, ou qu'ils soient. Que ce soit pour consulter votre catalogue, passer une commande ou contacter votre equipe, tout est a portee de main.",
      "2. Fidelisation client : Les notifications push, les programmes de fidelite integres et l'experience personnalisee offerts par les applications mobiles augmentent significativement la retention client.",
      "3. Avantage concurrentiel : Au Nouveau-Brunswick, peu d'entreprises locales ont encore leur propre application. C'est le moment ideal pour se demarquer de la concurrence.",
      "4. Collecte de donnees : Une application vous permet de mieux comprendre le comportement de vos clients et d'adapter vos offres en consequence.",
      "5. Revenus supplementaires : Le m-commerce represente une part croissante des ventes en ligne. Une application bien concue peut devenir un canal de vente majeur.",
      "Chez M2ATech Solutions, nous developpons des applications mobiles cross-platform avec Flutter, permettant de cibler iOS et Android simultanement tout en optimisant les couts de developpement. Contactez-nous pour discuter de votre projet.",
    ],
  },
  "ia-transforme-developpement-logiciel": {
    title: "Comment l'IA transforme le developpement logiciel",
    category: "IA",
    categoryColor: "#ec4899",
    date: "15 Fevrier 2025",
    readTime: "7 min",
    author: "M2ATech Solutions",
    content: [
      "L'intelligence artificielle n'est plus de la science-fiction. Elle est deja en train de transformer fondamentalement la facon dont nous concevons, developpons et maintenons les logiciels.",
      "Generation de code assistee : Des outils bases sur l'IA peuvent generer du code boilerplate, suggerer des completions intelligentes et meme ecrire des fonctions entieres a partir de descriptions en langage naturel. Cela accelere considerablement le developpement.",
      "Testing automatise : L'IA peut generer des cas de test, identifier des bugs potentiels et meme predire quelles parties du code sont les plus susceptibles de contenir des erreurs.",
      "Optimisation des performances : Les algorithmes de machine learning peuvent analyser les patterns d'utilisation et optimiser automatiquement les performances des applications.",
      "Chatbots et assistants virtuels : L'integration de chatbots intelligents dans les applications permet d'offrir un support client 24/7 sans intervention humaine.",
      "Chez M2ATech, nous integrons l'IA dans nos projets en utilisant des technologies comme OpenAI, des modeles LLM et des solutions de machine learning pour maximiser la valeur delivree a nos clients au Nouveau-Brunswick et au-dela.",
    ],
  },
  "seo-local-nouveau-brunswick": {
    title: "SEO local : dominer les recherches au Nouveau-Brunswick",
    category: "SEO",
    categoryColor: "#8b5cf6",
    date: "5 Fevrier 2025",
    readTime: "6 min",
    author: "M2ATech Solutions",
    content: [
      "Pour les entreprises basees a Moncton, Fredericton ou Saint John, le referencement local est crucial pour attirer des clients dans votre zone geographique. Voici les strategies qui fonctionnent en 2025.",
      "Google Business Profile : Assurez-vous que votre fiche Google Business est complete, a jour et optimisee avec des photos, des horaires et des avis clients reguliers.",
      "Mots-cles locaux : Integrez naturellement des termes geographiques dans votre contenu : 'developpement web Moncton', 'agence web Nouveau-Brunswick', 'application mobile Fredericton'.",
      "Avis clients : Les avis Google sont un facteur de classement majeur pour le SEO local. Encouragez vos clients satisfaits a laisser des avis positifs.",
      "Contenu local : Creez du contenu pertinent pour votre communaute locale. Articles de blog, etudes de cas avec des clients locaux, participation a des evenements regionaux.",
      "Optimisation technique : Assurez-vous que votre site est rapide, mobile-friendly et securise (HTTPS). Google privilegie les sites qui offrent une excellente experience utilisateur.",
      "Donnees structurees : Implementez des schemas JSON-LD (LocalBusiness, Organization) pour aider Google a comprendre votre entreprise et l'afficher dans les resultats enrichis.",
      "M2ATech Solutions aide les entreprises du Nouveau-Brunswick a ameliorer leur visibilite en ligne grace a des strategies SEO eprouvees. Contactez-nous pour un audit gratuit de votre site.",
    ],
  },
};

export default function BlogArticlePage() {
  const params = useParams();
  const article = articles[params.slug];

  if (!article) {
    return (
      <>
        <Navbar />
        <Box bg="var(--color-bg-primary)" minH="100vh" pt="100px">
          <Container maxW="800px" py={20} textAlign="center">
            <Heading color="var(--color-text-primary)" fontFamily="var(--font-display)">Article non trouve</Heading>
            <Text color="var(--color-text-secondary)" mt={4}>
              <Link href="/blog">Retour au blog</Link>
            </Text>
          </Container>
          <FooterApp />
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box bg="var(--color-bg-primary)" minH="100vh" pt="100px">
        <Container maxW="800px" py={20}>
          <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Breadcrumb */}
            <Breadcrumb
              separator={<Icon as={FaChevronRight} color="var(--color-text-muted)" w={2} h={2} />}
              mb={8}
              fontSize="sm"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/" color="var(--color-text-muted)" _hover={{ color: "#ff5d22" }}>
                  Accueil
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog" color="var(--color-text-muted)" _hover={{ color: "#ff5d22" }}>
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <Text color="var(--color-text-secondary)" noOfLines={1} maxW="200px">
                  {article.title}
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>

            {/* Category */}
            <Badge
              bg={`${article.categoryColor}20`}
              color={article.categoryColor}
              fontSize="xs"
              px={3}
              py={1}
              borderRadius="full"
              border="1px solid"
              borderColor={`${article.categoryColor}40`}
              mb={6}
            >
              {article.category}
            </Badge>

            {/* Title */}
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontFamily="var(--font-display)"
              fontWeight="800"
              color="var(--color-text-primary)"
              mb={6}
              lineHeight="1.2"
            >
              {article.title}
            </Heading>

            {/* Meta */}
            <Flex gap={6} mb={12} flexWrap="wrap">
              <Flex align="center" gap={2} color="var(--color-text-muted)" fontSize="sm">
                <Icon as={FaUser} w={3} h={3} />
                <Text>{article.author}</Text>
              </Flex>
              <Flex align="center" gap={2} color="var(--color-text-muted)" fontSize="sm">
                <Icon as={FaCalendar} w={3} h={3} />
                <Text>{article.date}</Text>
              </Flex>
              <Flex align="center" gap={2} color="var(--color-text-muted)" fontSize="sm">
                <Icon as={FaClock} w={3} h={3} />
                <Text>{article.readTime} de lecture</Text>
              </Flex>
            </Flex>

            {/* Separator */}
            <Box h="1px" bg="rgba(0, 0, 0, 0.06)" mb={10} />

            {/* Content */}
            <VStack spacing={6} align="stretch">
              {article.content.map((paragraph, index) => (
                <Text
                  key={index}
                  color="var(--color-text-secondary)"
                  fontSize="md"
                  lineHeight="1.9"
                >
                  {paragraph}
                </Text>
              ))}
            </VStack>

            {/* CTA */}
            <Box
              mt={14}
              p={8}
              className="glass-card"
              borderRadius="xl"
              textAlign="center"
              bg="white"
              boxShadow="0 2px 20px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="var(--color-border)"
            >
              <Heading
                as="h3"
                fontSize="xl"
                fontFamily="var(--font-display)"
                color="var(--color-text-primary)"
                mb={3}
              >
                Un projet en tete ?
              </Heading>
              <Text color="var(--color-text-secondary)" mb={6}>
                Discutons de comment M2ATech peut vous aider a concretiser votre vision.
              </Text>
              <Link href="/contact">
                <Box
                  as="button"
                  bg="#ff5d22"
                  color="white"
                  px={8}
                  py={4}
                  borderRadius="xl"
                  fontFamily="var(--font-display)"
                  fontWeight="700"
                  _hover={{ bg: "#e04d15" }}
                  transition="all 0.3s"
                >
                  Contactez-nous
                </Box>
              </Link>
            </Box>
          </MotionBox>
        </Container>
        <FooterApp />
      </Box>
    </>
  );
}
