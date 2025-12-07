"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  Text,
  Heading,
  Flex,
  useBreakpointValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";

const FooterApp = () => {
  const { t } = useTranslation();
  const columnTemplate = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });

  return (
    <Box
      bg="gray.900"
      color="white"
      py={12}
      borderTop="1px solid"
      borderColor="orange.500"
    >
      <Container maxW="container.xl">
        <Grid templateColumns={columnTemplate} gap={8} mb={8}>
          {/* Column 1: Logo and Social */}
          <GridItem>
            <Flex direction="column" height="100%">
              <Image
                src="/logo2.png"
                alt="M2ATech Logo"
                w="150px"
                mb={4}
                loading="lazy"
              />
              <Text mb={6} fontSize="sm" opacity={0.8}>
                {t('footer.description')}
              </Text>
              <Flex mt="auto" gap={4}>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61578397720574"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/m2atech-solutions-inc"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/m2atech.solutions?igsh=MWk4dWdubXBsNmJzZg%3D%3D&utm_source=qr"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaInstagram size={20} />
                </Link>
              </Flex>
            </Flex>
          </GridItem>

          {/* Column 2: Quick Links */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              {t('footer.quickLinks')}
            </Heading>
            <Stack spacing={3}>
              <Link
                href="/about"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.aboutUs')}
              </Link>
              <Link
                href="/services/web-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.services')}
              </Link>
              <Link
                href="/projects"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.projects')}
              </Link>
              <Link
                href="/contact"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.contact')}
              </Link>
            </Stack>
          </GridItem>

          {/* Column 3: Our Services */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              {t('footer.ourServices')}
            </Heading>
            <Stack spacing={3}>
              <Link
                href="/services/web-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.webApps')}
              </Link>
              <Link
                href="/services/mobile-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.mobileApps')}
              </Link>
              <Link
                href="/services/custom-software"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.customSoftware')}
              </Link>
              <Link
                href="/services/seo"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.seo')}
              </Link>
              <Link
                href="/services/ai"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.ai')}
              </Link>
              <Link
                href="/services/cybersecurity"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                {t('footer.cybersecurity')}
              </Link>
            </Stack>
          </GridItem>

          {/* Column 4: Contact */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              {t('footer.contactUs')}
            </Heading>
            <Stack spacing={3}>
              <Flex align="center">
                <EmailIcon mr={3} color="orange.300" />
                <Link
                  href="mailto:contact@m2atech.com"
                  _hover={{ color: "orange.300" }}
                >
                  {t('footer.email')}
                </Link>
              </Flex>
              <Flex align="center">
                <PhoneIcon mr={3} color="orange.300" />
                <Text>{t('footer.phone')}</Text>
              </Flex>
              <Text mt={4} fontSize="sm" opacity={0.8}>
                {t('footer.address')}
              </Text>
            </Stack>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
          >
            <Text color="gray.400" mb={{ base: 2, md: 0 }}>
              © {new Date().getFullYear()} {t('footer.copyright')}
            </Text>
            <Flex gap={4}>
              <Link
                href="/privacy"
                fontSize="sm"
                _hover={{ color: "orange.300" }}
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                href="/cookie"
                fontSize="sm"
                _hover={{ color: "orange.300" }}
              >
                {t('footer.cookiePolicy')}
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterApp;
