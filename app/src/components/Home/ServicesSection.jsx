"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
  Icon,
  Flex,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { FaGlobe, FaMobileAlt, FaCode, FaSearch, FaRobot, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const ServicesSection = () => {
  const { t } = useTranslation();
  const gridTemplate = useBreakpointValue({
    base: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const services = [
    {
      icon: FaGlobe,
      title: t('home.services.webApps.title'),
      description: t('home.services.webApps.description'),
      href: "/services/web-apps",
      color: "orange",
    },
    {
      icon: FaMobileAlt,
      title: t('home.services.mobileApps.title'),
      description: t('home.services.mobileApps.description'),
      href: "/services/mobile-apps",
      color: "blue",
    },
    {
      icon: FaCode,
      title: t('home.services.customSoftware.title'),
      description: t('home.services.customSoftware.description'),
      href: "/services/custom-software",
      color: "green",
    },
    {
      icon: FaSearch,
      title: t('home.services.seo.title'),
      description: t('home.services.seo.description'),
      href: "/services/seo",
      color: "purple",
    },
    {
      icon: FaRobot,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      href: "/services/ai",
      color: "pink",
    },
    {
      icon: FaShieldAlt,
      title: t('home.services.cybersecurity.title'),
      description: t('home.services.cybersecurity.description'),
      href: "/services/cybersecurity",
      color: "teal",
    },
  ];

  return (
    <Box py={20} bg="gray.50" position="relative" overflow="hidden">
      {/* Decorative shape - Circle en haut à gauche */}
      <Box
        position="absolute"
        left={{ base: "-150px", md: "-100px" }}
        top={{ base: "-100px", md: "-50px" }}
        w={{ base: "300px", md: "400px" }}
        h={{ base: "300px", md: "400px" }}
        opacity={0.2}
        zIndex={0}
        pointerEvents="none"
      >
        <Image
          src="/img/shape/circle-shape3.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* Decorative shape - Vector en bas à droite */}
      <Box
        position="absolute"
        right={{ base: "-150px", md: "-50px" }}
        bottom={{ base: "-100px", md: "-50px" }}
        w={{ base: "300px", md: "350px" }}
        h={{ base: "300px", md: "350px" }}
        opacity={0.15}
        zIndex={0}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/img/shape/vector-shape5.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Heading
          as="h2"
          size="xl"
          mb={4}
          textAlign="center"
          color="gray.800"
        >
          {t('home.services.title')}
        </Heading>
        <Text
          textAlign="center"
          color="gray.600"
          mb={12}
          maxW="600px"
          mx="auto"
        >
          {t('home.services.subtitle')}
        </Text>

        <Grid templateColumns={gridTemplate} gap={6} mb={12}>
          {services.map((service, index) => (
            <GridItem key={index}>
              <Link href={service.href} style={{ textDecoration: 'none' }}>
                <Box
                  bg="white"
                  p={8}
                  borderRadius="2xl"
                  boxShadow="sm"
                  h="100%"
                  transition="all 0.3s ease"
                  cursor="pointer"
                  position="relative"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.100"
                  role="group"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow: "xl",
                    borderColor: `${service.color}.200`,
                  }}
                >
                  <Box
                    w={14}
                    h={14}
                    borderRadius="xl"
                    bg={`${service.color}.100`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={5}
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: "scale(1.1)",
                      bg: `${service.color}.500`,
                    }}
                  >
                    <Icon
                      as={service.icon}
                      w={7}
                      h={7}
                      color={`${service.color}.500`}
                      transition="all 0.3s ease"
                      _groupHover={{
                        color: "white",
                      }}
                    />
                  </Box>
                  <Heading as="h3" size="md" color="gray.800" mb={3}>
                    {service.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                    {service.description}
                  </Text>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>

        <Flex justify="center">
          <Link href="/contact">
            <Button
              colorScheme="orange"
              size="lg"
              px={10}
              py={7}
              borderRadius="full"
              boxShadow="lg"
              fontSize="md"
              fontWeight="600"
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "xl",
              }}
              transition="all 0.3s ease"
            >
              {t('home.services.viewAll')}
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesSection;
