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
  Stack,
  Image,
  Input,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";

const FooterApp = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61578397720574", color: "#1877f2", label: "Facebook" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/m2atech-solutions-inc", color: "#0a66c2", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/m2atech.solutions?igsh=MWk4dWdubXBsNmJzZg%3D%3D&utm_source=qr", color: "#e4405f", label: "Instagram" },
  ];

  return (
    <Box bg="#080808" color="white" position="relative">
      {/* Top separator */}
      <Box className="accent-bar" />

      <Container maxW="1280px" py={16}>
        {/* Top section: logo + newsletter */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          mb={14}
          gap={8}
        >
          <Box>
            <Image
              src="/logo2.png"
              alt="M2ATech Solutions Inc. - Agence Web Moncton"
              w="160px"
              mb={3}
              loading="lazy"
            />
            <Text color="whiteAlpha.500" fontSize="sm" maxW="350px">
              {t('footer.partnerDesc')}
            </Text>
          </Box>

          {/* Newsletter */}
          <Box>
            <Text fontFamily="var(--font-display)" fontWeight="700" mb={3} fontSize="sm">
              {t('footer.newsletterTitle')}
            </Text>
            <HStack>
              <Input
                placeholder={t('footer.emailPlaceholder')}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="lg"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{
                  borderColor: "#ff5d22",
                  boxShadow: "none",
                }}
                _hover={{
                  borderColor: "whiteAlpha.200",
                }}
                size="lg"
                w="250px"
                color="white"
              />
              <Button
                bg="#ff5d22"
                color="white"
                _hover={{ bg: "#e04d15" }}
                size="lg"
                borderRadius="lg"
                px={6}
                fontFamily="var(--font-display)"
                fontWeight="700"
              >
                {t('footer.subscribeButton')}
              </Button>
            </HStack>
          </Box>
        </Flex>

        {/* Main grid */}
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={8}
          mb={12}
        >
          {/* Quick Links */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="sm"
              mb={5}
              color="#ff5d22"
              fontFamily="var(--font-display)"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {t('footer.quickLinks')}
            </Heading>
            <Stack spacing={3}>
              {[
                { href: "/about", label: t('footer.aboutUs') },
                { href: "/services/web-apps", label: t('footer.services') },
                { href: "/projects", label: t('footer.projects') },
                { href: "/contact", label: t('footer.contact') },
                { href: "/blog", label: t('footer.blog') },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="whiteAlpha.600"
                  fontSize="sm"
                  _hover={{ color: "#ff5d22", transform: "translateX(4px)" }}
                  transition="all 0.2s"
                  display="block"
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Services */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="sm"
              mb={5}
              color="#ff5d22"
              fontFamily="var(--font-display)"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {t('footer.ourServices')}
            </Heading>
            <Stack spacing={3}>
              {[
                { href: "/services/web-apps", label: t('footer.webApps') },
                { href: "/services/mobile-apps", label: t('footer.mobileApps') },
                { href: "/services/custom-software", label: t('footer.customSoftware') },
                { href: "/services/seo", label: t('footer.seo') },
                { href: "/services/ai", label: t('footer.ai') },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="whiteAlpha.600"
                  fontSize="sm"
                  _hover={{ color: "#ff5d22", transform: "translateX(4px)" }}
                  transition="all 0.2s"
                  display="block"
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="sm"
              mb={5}
              color="#ff5d22"
              fontFamily="var(--font-display)"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {t('footer.contactUs')}
            </Heading>
            <Stack spacing={4}>
              <Flex align="center" gap={3}>
                <EmailIcon color="#ff5d22" />
                <Link
                  href="mailto:contact@m2atech.com"
                  color="whiteAlpha.600"
                  fontSize="sm"
                  _hover={{ color: "#ff5d22" }}
                >
                  {t('footer.email')}
                </Link>
              </Flex>
              <Flex align="center" gap={3}>
                <PhoneIcon color="#ff5d22" />
                <Text color="whiteAlpha.600" fontSize="sm">{t('footer.phone')}</Text>
              </Flex>
              <Text color="whiteAlpha.500" fontSize="xs" mt={2}>
                {t('footer.address')}
              </Text>
            </Stack>
          </GridItem>

          {/* Social */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="sm"
              mb={5}
              color="#ff5d22"
              fontFamily="var(--font-display)"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              {t('footer.followUs')}
            </Heading>
            <HStack spacing={4}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Suivez M2ATech sur ${social.label}`}
                >
                  <Flex
                    w={10}
                    h={10}
                    borderRadius="lg"
                    bg="whiteAlpha.100"
                    align="center"
                    justify="center"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: `${social.color}20`,
                      boxShadow: `0 0 15px ${social.color}40`,
                      transform: "translateY(-2px)",
                    }}
                  >
                    <Icon as={social.icon} w={5} h={5} color="whiteAlpha.700" _hover={{ color: social.color }} transition="color 0.2s" />
                  </Flex>
                </Link>
              ))}
            </HStack>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Box borderTop="1px solid" borderColor="whiteAlpha.100" pt={6}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={3}
          >
            <Text color="whiteAlpha.400" fontSize="xs">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </Text>
            <HStack spacing={6}>
              <Link href="/privacy" fontSize="xs" color="whiteAlpha.400" _hover={{ color: "#ff5d22" }}>
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/cookie" fontSize="xs" color="whiteAlpha.400" _hover={{ color: "#ff5d22" }}>
                {t('footer.cookiePolicy')}
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterApp;
