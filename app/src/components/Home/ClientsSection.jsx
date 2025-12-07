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
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "M2A DocAssist", logo: "/img/clients/m2adoc.png", url: "https://m2adoc.com", darkBg: false },
  { name: "DIO Cleaning", logo: "/img/clients/diocleaning.png", url: "https://crmdiocleaning.com", darkBg: false },
  { name: "Masta Barber", logo: "/img/clients/mastabarber.png", url: "https://mastabarber.com", darkBg: false },
  { name: "Kane Eco Construction", logo: "/img/clients/kaneeco.png", url: "https://kane-eco-construction.com", darkBg: false },
  { name: "Trio Pro Move", logo: "/img/clients/triopro.png", url: "https://triopromovecleanservice.com", darkBg: true },
  { name: "Maelo Studio", logo: "/img/clients/maelostudio.png", url: "https://maelostudio.com", darkBg: true },
  { name: "OPTEN Niger", logo: "/img/clients/opten.png", url: "https://ongopten.com", darkBg: false },
];

const ClientsSection = () => {
  const { t } = useTranslation();

  // Double the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <Box py={16} bg="white" overflow="hidden">
      <Container maxW="container.xl" mb={10}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl" color="gray.800">
            {t('home.clients.title')}{" "}
            <Box as="span" color="orange.500">
              {t('home.clients.titleHighlight')}
            </Box>
          </Heading>
          <Text color="gray.600" maxW="600px" fontSize="lg">
            {t('home.clients.subtitle')}
          </Text>
        </VStack>
      </Container>

      {/* Scrolling container */}
      <Box position="relative" w="100%" overflow="hidden">
        {/* Gradient overlays for fade effect */}
        <Box
          position="absolute"
          left="0"
          top="0"
          bottom="0"
          w="150px"
          bgGradient="linear(to-r, white, transparent)"
          zIndex={2}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          w="150px"
          bgGradient="linear(to-l, white, transparent)"
          zIndex={2}
          pointerEvents="none"
        />

        {/* Scrolling logos */}
        <motion.div
          style={{
            display: "flex",
            gap: "60px",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
          animate={{
            x: [0, -50 * clients.length * 3.5],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
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
              bg={client.darkBg ? "gray.800" : "gray.50"}
              borderRadius="xl"
              border="1px solid"
              borderColor={client.darkBg ? "gray.700" : "gray.100"}
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "md",
                borderColor: "orange.400",
                bg: client.darkBg ? "gray.700" : "white",
              }}
            >
              <Box position="relative" w="100%" h="100%">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="150px"
                />
              </Box>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default ClientsSection;
