"use client";

import React from "react";
import { Box, Container, Heading, Text, Flex, SimpleGrid, Icon } from "@chakra-ui/react";
import {
  FaGlobe,
  FaShoppingCart,
  FaClipboardList,
  FaRobot,
  FaMobileAlt,
  FaSyncAlt,
  FaTools,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const MotionBox = motion(Box);

const OffersSection = () => {
  const { t } = useTranslation();

  const offers = [
    { icon: FaGlobe, label: t("home.offers.showcase"), href: "/services/web-apps" },
    { icon: FaShoppingCart, label: t("home.offers.ecommerce"), href: "/services/web-apps" },
    { icon: FaMobileAlt, label: t("home.offers.mobile"), href: "/services/mobile-apps" },
    { icon: FaClipboardList, label: t("home.offers.crm"), href: "/services/custom-software" },
    { icon: FaRobot, label: t("home.offers.chatbot"), href: "/services/ai" },
    { icon: FaSyncAlt, label: t("home.offers.redesign"), href: "/services/web-apps" },
    { icon: FaTools, label: t("home.offers.maintenance"), href: "/contact" },
    { icon: FaMapMarkerAlt, label: t("home.offers.localSeo"), href: "/services/seo" },
  ];

  return (
    <Box id="offers" py={{ base: 16, md: 20 }} bg="var(--color-bg-primary)" position="relative" overflow="hidden">
      <Container maxW="1280px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: 10, lg: 16 }}
        >
          <Box flex="0 0 auto" maxW={{ base: "100%", lg: "420px" }}>
            <Text
              color="#ff5d22"
              fontSize="sm"
              fontWeight={700}
              textTransform="uppercase"
              letterSpacing="wider"
              mb={3}
            >
              {t("home.offers.eyebrow")}
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontFamily="var(--font-display)"
              fontWeight="700"
              color="var(--color-text-primary)"
              lineHeight="1.2"
              mb={4}
            >
              {t("home.offers.title")}
            </Heading>
            <Text color="var(--color-text-secondary)" fontSize="md" lineHeight="1.8">
              {t("home.offers.subtitle")}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} flex="1" w="100%">
            {offers.map((offer, index) => (
              <MotionBox
                key={offer.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Link href={offer.href} style={{ textDecoration: "none", display: "block" }}>
                  <Flex
                    align="center"
                    gap={3}
                    px={5}
                    py={4}
                    borderRadius="xl"
                    bg="var(--color-bg-secondary)"
                    border="1px solid"
                    borderColor="var(--color-border)"
                    role="group"
                    transition="all 0.25s ease"
                    _hover={{
                      bg: "#ff5d22",
                      borderColor: "#ff5d22",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 30px rgba(255, 93, 34, 0.25)",
                    }}
                  >
                    <Flex
                      w={9}
                      h={9}
                      borderRadius="lg"
                      bg="#fff3ee"
                      align="center"
                      justify="center"
                      flexShrink={0}
                      _groupHover={{ bg: "rgba(255,255,255,0.2)" }}
                      transition="all 0.25s ease"
                    >
                      <Icon as={offer.icon} w={4} h={4} color="#ff5d22" _groupHover={{ color: "white" }} />
                    </Flex>
                    <Text
                      flex="1"
                      fontWeight={600}
                      fontSize="sm"
                      color="var(--color-text-primary)"
                      _groupHover={{ color: "white" }}
                    >
                      {offer.label}
                    </Text>
                    <Icon
                      as={FaArrowRight}
                      w={3}
                      h={3}
                      color="var(--color-text-muted)"
                      _groupHover={{ color: "white", transform: "translateX(3px)" }}
                      transition="all 0.25s ease"
                    />
                  </Flex>
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default OffersSection;
