"use client";

import React from "react";
import Navbar from "@/components/Partials/Navbar";
import FooterApp from "@/components/Partials/FooterApp";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Badge,
  Icon,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import {
  FaShieldAlt,
  FaDatabase,
  FaCog,
  FaLock,
  FaClock,
  FaUserShield,
  FaHandshake,
  FaSyncAlt,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Section = ({ icon, title, children }) => (
  <Box>
    <HStack spacing={3} mb={4}>
      <Icon as={icon} w={5} h={5} color="#ff5d22" />
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
        fontFamily="var(--font-display)"
        color="var(--color-text-primary)"
      >
        {title}
      </Heading>
    </HStack>
    <Box pl={{ base: 0, md: 8 }}>{children}</Box>
  </Box>
);

const DataItem = ({ name, linkedToIdentity, usedForTracking, usage }) => (
  <Box
    bg="white"
    border="1px solid"
    borderColor="var(--color-border)"
    borderRadius="xl"
    p={5}
    transition="all 0.2s"
    _hover={{ borderColor: "rgba(255, 93, 34, 0.3)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
  >
    <Text fontWeight="700" fontSize="lg" color="var(--color-text-primary)" mb={2}>
      {name}
    </Text>
    <HStack spacing={3} mb={2} flexWrap="wrap">
      <Badge
        colorScheme={linkedToIdentity ? "orange" : "gray"}
        borderRadius="full"
        px={3}
        py={1}
        fontSize="xs"
      >
        {linkedToIdentity ? "Lié à l'identité" : "Non lié à l'identité"}
      </Badge>
      <HStack spacing={1}>
        <Icon
          as={usedForTracking ? FaCheckCircle : FaTimesCircle}
          color={usedForTracking ? "red.400" : "green.500"}
          w={3}
          h={3}
        />
        <Text fontSize="xs" color="var(--color-text-muted)">
          {usedForTracking ? "Utilisé pour le tracking" : "Aucun tracking"}
        </Text>
      </HStack>
    </HStack>
    <Text fontSize="sm" color="var(--color-text-secondary)">
      {usage}
    </Text>
  </Box>
);

export default function BeydoumAutoPrivacyPage() {
  return (
    <>
      <Navbar />
      <Box pt="80px" bg="var(--color-bg-primary)" minH="100vh">
        <Container maxW="800px" py={{ base: 10, md: 16 }}>
          {/* Header */}
          <VStack spacing={4} mb={12} textAlign="center">
            <Badge
              bg="#fff3ee"
              color="#ff5d22"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight={600}
              border="1px solid"
              borderColor="rgba(255, 93, 34, 0.15)"
            >
              Politique de confidentialité
            </Badge>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontFamily="var(--font-display)"
              color="var(--color-text-primary)"
              lineHeight="1.2"
            >
              Beydoum Auto
            </Heading>
            <Text color="var(--color-text-secondary)" fontSize={{ base: "md", md: "lg" }} maxW="600px">
              Application mobile de facturation automobile développée par M2atech Solutions Inc.
            </Text>
            <Text fontSize="sm" color="var(--color-text-muted)">
              Date d{"'"}entrée en vigueur : 17 mars 2026
            </Text>
          </VStack>

          <VStack spacing={10} align="stretch">
            {/* 1. Introduction */}
            <Section icon={FaShieldAlt} title="1. Introduction">
              <Text color="var(--color-text-secondary)" lineHeight="1.8">
                La présente politique de confidentialité décrit comment <strong>M2atech Solutions Inc.</strong> collecte,
                utilise et protège les informations personnelles des utilisateurs de l{"'"}application mobile{" "}
                <strong>Beydoum Auto</strong> (identifiant : com.m2atech.beydoumauto). Cette application est un outil
                privé de facturation destiné à un atelier de réparation automobile situé au Nouveau-Brunswick, Canada.
                Nous nous engageons à protéger la vie privée de nos utilisateurs conformément aux lois canadiennes
                applicables, notamment la LPRPDE (PIPEDA).
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 2. Données collectées */}
            <Section icon={FaDatabase} title="2. Données collectées">
              <Text color="var(--color-text-secondary)" mb={4} lineHeight="1.8">
                L{"'"}application collecte uniquement les données strictement nécessaires à son fonctionnement.
                Aucune donnée n{"'"}est collectée à des fins publicitaires ou de suivi.
              </Text>
              <VStack spacing={4} align="stretch">
                <DataItem
                  name="Nom (Name)"
                  linkedToIdentity={true}
                  usedForTracking={false}
                  usage="Utilisé pour la génération et la gestion des factures clients. Le nom est affiché sur les factures produites par l'application."
                />
                <DataItem
                  name="Informations de paiement (Payment Info)"
                  linkedToIdentity={true}
                  usedForTracking={false}
                  usage="Enregistrement du mode de paiement sélectionné sur les factures (ex. : comptant, débit, crédit). Aucune donnée bancaire n'est stockée."
                />
                <DataItem
                  name="Identifiant utilisateur (User ID)"
                  linkedToIdentity={true}
                  usedForTracking={false}
                  usage="Utilisé pour l'authentification et la gestion du compte utilisateur au sein de l'application."
                />
              </VStack>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 3. Utilisation des données */}
            <Section icon={FaCog} title="3. Utilisation des données">
              <Text color="var(--color-text-secondary)" mb={4} lineHeight="1.8">
                Les données collectées sont utilisées exclusivement pour le fonctionnement de l{"'"}application :
              </Text>
              <List spacing={2}>
                {[
                  "Création et gestion des factures pour les clients de l'atelier",
                  "Authentification sécurisée des utilisateurs",
                  "Génération de documents PDF professionnels",
                  "Recherche et suivi des clients et véhicules",
                ].map((item, i) => (
                  <ListItem key={i} color="var(--color-text-secondary)" display="flex" alignItems="flex-start">
                    <ListIcon as={FaCheckCircle} color="#ff5d22" mt={1} />
                    {item}
                  </ListItem>
                ))}
              </List>
              <Box
                mt={4}
                p={4}
                bg="#fff3ee"
                borderRadius="lg"
                border="1px solid"
                borderColor="rgba(255, 93, 34, 0.15)"
              >
                <Text fontSize="sm" color="var(--color-text-primary)" fontWeight="600">
                  Aucune donnée n{"'"}est utilisée pour la publicité, le profilage ou le tracking.
                </Text>
              </Box>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 4. Stockage et sécurité */}
            <Section icon={FaLock} title="4. Stockage et sécurité">
              <Text color="var(--color-text-secondary)" lineHeight="1.8">
                Les données sont stockées sur un serveur sécurisé situé au Canada. Toutes les communications
                entre l{"'"}application et le serveur sont chiffrées via HTTPS/SSL. L{"'"}authentification repose
                sur un système de jetons JWT avec expiration automatique. Nous mettons en oeuvre des mesures
                techniques et organisationnelles appropriées pour protéger vos données contre tout accès non
                autorisé, toute modification, divulgation ou destruction.
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 5. Conservation des données */}
            <Section icon={FaClock} title="5. Conservation des données">
              <Text color="var(--color-text-secondary)" lineHeight="1.8">
                Les données personnelles sont conservées aussi longtemps que le compte utilisateur est actif et
                que l{"'"}application est utilisée. Les factures et documents associés sont conservés conformément
                aux obligations légales comptables applicables. Vous pouvez demander la suppression de votre
                compte et de vos données à tout moment en nous contactant.
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 6. Droits des utilisateurs */}
            <Section icon={FaUserShield} title="6. Droits des utilisateurs">
              <Text color="var(--color-text-secondary)" mb={4} lineHeight="1.8">
                Conformément aux lois canadiennes sur la protection des données, vous disposez des droits suivants :
              </Text>
              <List spacing={2}>
                {[
                  "Droit d'accès — Obtenir une copie de vos données personnelles",
                  "Droit de rectification — Corriger vos données inexactes ou incomplètes",
                  "Droit de suppression — Demander la suppression de vos données personnelles",
                  "Droit de retrait du consentement — Retirer votre consentement à tout moment",
                ].map((item, i) => (
                  <ListItem key={i} color="var(--color-text-secondary)" display="flex" alignItems="flex-start">
                    <ListIcon as={FaCheckCircle} color="#ff5d22" mt={1} />
                    {item}
                  </ListItem>
                ))}
              </List>
              <Text color="var(--color-text-secondary)" mt={4} lineHeight="1.8">
                Pour exercer ces droits, contactez-nous à{" "}
                <Link href="mailto:contact@m2atech.com" color="#ff5d22" fontWeight="600">
                  contact@m2atech.com
                </Link>
                .
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 7. Partage avec des tiers */}
            <Section icon={FaHandshake} title="7. Partage avec des tiers">
              <Box
                p={4}
                bg="#fff3ee"
                borderRadius="lg"
                border="1px solid"
                borderColor="rgba(255, 93, 34, 0.15)"
              >
                <Text color="var(--color-text-primary)" fontWeight="600" lineHeight="1.8">
                  Nous ne partageons, ne vendons et ne louons aucune donnée personnelle à des tiers.
                </Text>
              </Box>
              <Text color="var(--color-text-secondary)" mt={4} lineHeight="1.8">
                Les données collectées restent strictement internes et sont utilisées uniquement dans le cadre
                du fonctionnement de l{"'"}application Beydoum Auto. Aucune donnée n{"'"}est transmise à des
                services d{"'"}analyse, de publicité ou à tout autre service tiers.
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 8. Modifications */}
            <Section icon={FaSyncAlt} title="8. Modifications de cette politique">
              <Text color="var(--color-text-secondary)" lineHeight="1.8">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous
                encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous
                protégeons vos données.
              </Text>
              <Text color="var(--color-text-muted)" mt={2} fontSize="sm">
                Dernière mise à jour : 17 mars 2026
              </Text>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* 9. Contact */}
            <Section icon={FaEnvelope} title="9. Contact">
              <Text color="var(--color-text-secondary)" lineHeight="1.8" mb={2}>
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
              </Text>
              <Box
                p={5}
                bg="white"
                border="1px solid"
                borderColor="var(--color-border)"
                borderRadius="xl"
              >
                <VStack align="start" spacing={1}>
                  <Text fontWeight="700" color="var(--color-text-primary)">M2atech Solutions Inc.</Text>
                  <Text color="var(--color-text-secondary)">Dieppe, Nouveau-Brunswick, Canada</Text>
                  <Link href="mailto:contact@m2atech.com" color="#ff5d22" fontWeight="600">
                    contact@m2atech.com
                  </Link>
                  <Link href="https://m2atech.com" color="#ff5d22" fontWeight="600" isExternal>
                    m2atech.com
                  </Link>
                </VStack>
              </Box>
            </Section>

            <Divider borderColor="var(--color-border)" />

            {/* English Summary */}
            <Box
              p={6}
              bg="white"
              border="1px solid"
              borderColor="var(--color-border)"
              borderRadius="xl"
            >
              <Badge
                bg="gray.100"
                color="gray.600"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                mb={4}
              >
                English Summary
              </Badge>
              <Heading
                as="h2"
                fontSize="xl"
                fontFamily="var(--font-display)"
                color="var(--color-text-primary)"
                mb={3}
              >
                Privacy Policy — Beydoum Auto
              </Heading>
              <VStack align="start" spacing={2}>
                <Text color="var(--color-text-secondary)" lineHeight="1.8" fontSize="sm">
                  <strong>Beydoum Auto</strong> is a private mobile invoicing application for an auto repair shop,
                  developed by <strong>M2atech Solutions Inc.</strong> (Dieppe, NB, Canada).
                </Text>
                <Text color="var(--color-text-secondary)" lineHeight="1.8" fontSize="sm">
                  <strong>Data collected:</strong> Name (for invoices), Payment Info (payment method on invoices),
                  and User ID (authentication). All data is linked to identity but never used for tracking or advertising.
                </Text>
                <Text color="var(--color-text-secondary)" lineHeight="1.8" fontSize="sm">
                  <strong>Data usage:</strong> Exclusively for app functionality (invoice generation, client management,
                  authentication). No data is shared with or sold to third parties.
                </Text>
                <Text color="var(--color-text-secondary)" lineHeight="1.8" fontSize="sm">
                  <strong>Security:</strong> Data is stored on a secure server in Canada with HTTPS/SSL encryption
                  and JWT-based authentication.
                </Text>
                <Text color="var(--color-text-secondary)" lineHeight="1.8" fontSize="sm">
                  <strong>Your rights:</strong> You may request access, correction, or deletion of your personal data
                  at any time by contacting{" "}
                  <Link href="mailto:contact@m2atech.com" color="#ff5d22" fontWeight="600">
                    contact@m2atech.com
                  </Link>
                  .
                </Text>
                <Text color="var(--color-text-muted)" fontSize="xs" mt={2}>
                  Effective date: March 17, 2026
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Container>
        <FooterApp />
      </Box>
    </>
  );
}
