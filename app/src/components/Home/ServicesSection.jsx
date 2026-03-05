"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaGlobe, FaMobileAlt, FaCode, FaSearch, FaRobot, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: FaGlobe, title: t('home.services.webApps.title'), description: t('home.services.webApps.description'), href: "/services/web-apps", color: "#ff5d22" },
    { icon: FaMobileAlt, title: t('home.services.mobileApps.title'), description: t('home.services.mobileApps.description'), href: "/services/mobile-apps", color: "#3b82f6" },
    { icon: FaCode, title: t('home.services.customSoftware.title'), description: t('home.services.customSoftware.description'), href: "/services/custom-software", color: "#10b981" },
    { icon: FaSearch, title: t('home.services.seo.title'), description: t('home.services.seo.description'), href: "/services/seo", color: "#8b5cf6" },
    { icon: FaRobot, title: t('home.services.ai.title'), description: t('home.services.ai.description'), href: "/services/ai", color: "#ec4899", popular: true },
  ];

  return (
    <Box py={24} bg="var(--color-bg-secondary)" position="relative" overflow="hidden">
      {/* Section number */}
      <Text className="section-number">01</Text>

      <Container maxW="1280px" position="relative" zIndex={1}>
        <Box textAlign="center" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="800"
            color="var(--color-text-primary)"
            mb={4}
          >
            {t('home.services.title')}
          </Heading>
          <Text
            color="var(--color-text-secondary)"
            fontSize="lg"
            maxW="600px"
            mx="auto"
            mb={6}
          >
            {t('home.services.subtitle')}
          </Text>
          <Text
            color="var(--color-text-muted)"
            fontSize="md"
            maxW="800px"
            mx="auto"
            lineHeight="1.8"
          >
            {t('home.services.longDescription')}
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                h="100%"
              >
                <Link href={service.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box
                    className="glass-card"
                    p={8}
                    borderRadius="xl"
                    h="100%"
                    boxShadow="0 2px 20px rgba(0, 0, 0, 0.06)"
                    transition="all 0.3s ease"
                    cursor="pointer"
                    position="relative"
                    overflow="hidden"
                    role="group"
                    _hover={{
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1)`,
                      borderColor: `${service.color}66`,
                    }}
                  >
                    {/* Popular badge */}
                    {service.popular && (
                      <Badge
                        position="absolute"
                        top={4}
                        right={4}
                        bg="#fff3ee"
                        color="#ff5d22"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        border="1px solid rgba(255, 93, 34, 0.3)"
                      >
                        {t('home.services.popularBadge')}
                      </Badge>
                    )}

                    {/* Icon */}
                    <Flex
                      w={14}
                      h={14}
                      borderRadius="xl"
                      bg="#fff3ee"
                      border="1px solid"
                      borderColor="rgba(255, 93, 34, 0.12)"
                      align="center"
                      justify="center"
                      mb={5}
                      transition="all 0.3s ease"
                      _groupHover={{
                        bg: "#fff3ee",
                        transform: "scale(1.1)",
                      }}
                    >
                      <Icon
                        as={service.icon}
                        w={7}
                        h={7}
                        color={service.color}
                      />
                    </Flex>

                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-display)"
                      color="var(--color-text-primary)"
                      mb={3}
                    >
                      {service.title}
                    </Heading>

                    <Text color="var(--color-text-secondary)" fontSize="sm" lineHeight="1.7" mb={4}>
                      {service.description}
                    </Text>

                    {/* Arrow on hover */}
                    <Flex
                      align="center"
                      gap={2}
                      color={service.color}
                      opacity={0}
                      transform="translateX(-10px)"
                      transition="all 0.3s ease"
                      _groupHover={{
                        opacity: 1,
                        transform: "translateX(0)",
                      }}
                      fontSize="sm"
                      fontWeight={600}
                    >
                      <Text>{t('home.services.learnMore')}</Text>
                      <Icon as={FaArrowRight} w={3} h={3} />
                    </Flex>
                  </Box>
                </Link>
              </MotionBox>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
