"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

const clients = [
  { name: "M2A DocAssist", logo: "/img/clients/m2adoc.png", url: "https://m2adoc.com" },
  { name: "DIO Cleaning", logo: "/img/clients/diocleaning.png", url: "https://crmdiocleaning.com" },
  { name: "Masta Barber", logo: "/img/clients/mastabarber.png", url: "https://mastabarber.com" },
  { name: "Kane Eco Construction", logo: "/img/clients/kaneeco.png", url: "https://kane-eco-construction.com" },
  { name: "Trio Pro Move", logo: "/img/clients/triopro.png", url: "https://triopromovecleanservice.com" },
  { name: "Maelo Studio", logo: "/img/clients/maelostudio.png", url: "https://maelostudio.com" },
  { name: "OPTEN Niger", logo: "/img/clients/opten.png", url: "https://ongopten.com" },
];

const ClientsSection = () => {
  const { t } = useTranslation();
  const duplicatedClients = [...clients, ...clients];

  return (
    <Box py={20} bg="var(--color-bg-tertiary)" overflow="hidden">
      <Container maxW="1280px" mb={10}>
        <VStack spacing={4} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="700"
            color="var(--color-text-primary)"
          >
            {t('home.clients.title')}{" "}
            <Text as="span" className="gradient-text">
              {t('home.clients.titleHighlight')}
            </Text>
          </Heading>
          <Text color="var(--color-text-secondary)" maxW="600px" fontSize="lg">
            {t('home.clients.subtitle')}
          </Text>
        </VStack>
      </Container>

      <Box position="relative" w="100%" overflow="hidden">
        {/* Gradient overlays */}
        <Box
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          w="150px"
          bgGradient="linear(to-r, var(--color-bg-tertiary), transparent)"
          zIndex={2}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          w="150px"
          bgGradient="linear(to-l, var(--color-bg-tertiary), transparent)"
          zIndex={2}
          pointerEvents="none"
        />

        <Box
          display="flex"
          gap="60px"
          px="30px"
          className="infinite-scroll"
          w="max-content"
        >
          {duplicatedClients.map((client, index) => (
            <Box
              key={`${client.name}-${index}`}
              as="a"
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="80px"
              w="150px"
              p={4}
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="var(--color-border)"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                borderColor: "var(--color-border-hover)",
                bg: "var(--color-bg-card-hover)",
              }}
            >
              <Box position="relative" w="100%" h="100%">
                <Image
                  src={client.logo}
                  alt={`${client.name} - Client M2ATech Solutions Moncton`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="150px"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientsSection;
