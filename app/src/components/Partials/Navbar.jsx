"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  Collapse,
  useDisclosure,
  Link,
  HStack,
  Icon,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FaGlobe, FaMobileAlt, FaCode, FaSearch, FaRobot, FaShieldAlt } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const serviceItems = (t) => [
  { label: t('nav.webApps'), href: "/services/web-apps", icon: FaGlobe, desc: t('nav.webAppsDesc') },
  { label: t('nav.mobileApps'), href: "/services/mobile-apps", icon: FaMobileAlt, desc: t('nav.mobileAppsDesc') },
  { label: t('nav.customSoftware'), href: "/services/custom-software", icon: FaCode, desc: t('nav.customSoftwareDesc') },
  { label: t('nav.seo'), href: "/services/seo", icon: FaSearch, desc: t('nav.seoDesc') },
  { label: t('nav.ai'), href: "/services/ai", icon: FaRobot, desc: t('nav.aiDesc') },
];

const DesktopNav = () => {
  const { t } = useTranslation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { label: t('nav.projects'), href: "/projects" },
    { label: t('nav.jobs'), href: "/jobs" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <HStack spacing={8} align="center">
      <Box
        position="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <Box
          as="button"
          px={2}
          py={2}
          fontSize="md"
          fontWeight={500}
          color="var(--color-text-secondary)"
          position="relative"
          cursor="pointer"
          fontFamily="var(--font-body)"
          display="flex"
          alignItems="center"
          gap={1}
          transition="color 0.2s"
          _hover={{ color: "#ff5d22" }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            bg: "#ff5d22",
            transform: servicesOpen ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.3s ease",
            transformOrigin: "left",
          }}
        >
          {t('nav.services')}
          <Icon
            as={ChevronDownIcon}
            transition="transform 0.2s"
            transform={servicesOpen ? "rotate(180deg)" : ""}
            fontSize="sm"
          />
        </Box>

        <AnimatePresence>
          {servicesOpen && (
            <MotionBox
              position="absolute"
              top="100%"
              left="50%"
              transform="translateX(-50%)"
              pt={4}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              zIndex={100}
            >
              <Box
                bg="white"
                border="1px solid"
                borderColor="rgba(0, 0, 0, 0.08)"
                borderRadius="xl"
                p={6}
                minW="580px"
                boxShadow="0 20px 60px rgba(0, 0, 0, 0.1)"
              >
                <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                  {serviceItems(t).map((item) => (
                    <GridItem key={item.href}>
                      <Link
                        href={item.href}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Flex
                          p={4}
                          borderRadius="lg"
                          align="center"
                          gap={4}
                          transition="all 0.2s"
                          _hover={{ bg: "#fdf5f1" }}
                          role="group"
                        >
                          <Flex
                            w={10}
                            h={10}
                            borderRadius="lg"
                            bg="#fff3ee"
                            align="center"
                            justify="center"
                            flexShrink={0}
                            transition="all 0.2s"
                            _groupHover={{ bg: "rgba(255, 93, 34, 0.15)" }}
                          >
                            <Icon
                              as={item.icon}
                              w={5}
                              h={5}
                              color="var(--color-text-muted)"
                              _groupHover={{ color: "#ff5d22" }}
                              transition="color 0.2s"
                            />
                          </Flex>
                          <Box>
                            <Text
                              fontWeight={600}
                              fontSize="sm"
                              color="var(--color-text-primary)"
                              _groupHover={{ color: "#ff5d22" }}
                              transition="color 0.2s"
                            >
                              {item.label}
                            </Text>
                            <Text fontSize="xs" color="var(--color-text-muted)" mt={0.5}>
                              {item.desc}
                            </Text>
                          </Box>
                        </Flex>
                      </Link>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>

      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          px={2}
          py={2}
          fontSize="md"
          fontWeight={500}
          color="var(--color-text-secondary)"
          position="relative"
          _hover={{
            textDecoration: "none",
            color: "#ff5d22",
          }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            bg: "#ff5d22",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease",
            transformOrigin: "left",
          }}
          sx={{
            "&:hover::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          {item.label}
        </Link>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  const { t } = useTranslation();
  const { isOpen: servicesExpanded, onToggle: toggleServices } = useDisclosure();

  const navLinks = [
    { label: t('nav.projects'), href: "/projects" },
    { label: t('nav.jobs'), href: "/jobs" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <Stack bg="white" p={6} spacing={4} display={{ md: "none" }} borderTop="1px solid" borderColor="rgba(0,0,0,0.06)">
      <Box>
        <Flex
          py={2}
          justify="space-between"
          align="center"
          cursor="pointer"
          onClick={toggleServices}
        >
          <Text fontWeight={600} color="var(--color-text-primary)">
            {t('nav.services')}
          </Text>
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={servicesExpanded ? "rotate(180deg)" : ""}
            w={5}
            h={5}
            color="var(--color-text-muted)"
          />
        </Flex>
        <Collapse in={servicesExpanded} animateOpacity>
          <Stack
            mt={2}
            pl={4}
            borderLeft="2px solid"
            borderColor="rgba(255, 93, 34, 0.3)"
            spacing={3}
          >
            {serviceItems(t).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                py={1}
                color="var(--color-text-secondary)"
                _hover={{ color: "#ff5d22" }}
                fontSize="sm"
              >
                <HStack spacing={3}>
                  <Icon as={item.icon} w={4} h={4} color="var(--color-text-muted)" />
                  <Text>{item.label}</Text>
                </HStack>
              </Link>
            ))}
          </Stack>
        </Collapse>
      </Box>

      {navLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          py={2}
          display="block"
          fontWeight={600}
          color="var(--color-text-primary)"
          _hover={{ color: "#ff5d22", textDecoration: "none" }}
        >
          {item.label}
        </Link>
      ))}

      <Button
        as="a"
        href="/contact"
        w="full"
        bg="#ff5d22"
        color="white"
        _hover={{ bg: "#e04d15" }}
        mt={2}
        size="lg"
        fontFamily="var(--font-display)"
        fontWeight={700}
      >
        {t('nav.workWithUs')}
      </Button>
    </Stack>
  );
};

const ModernNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionBox
      position="fixed"
      width="full"
      zIndex="1400"
      top={0}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box h="2px" bg="#ff5d22" />

      <Box
        bg={scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.85)"}
        backdropFilter="blur(20px)"
        borderBottom="1px solid"
        borderColor={scrolled ? "rgba(0, 0, 0, 0.08)" : "transparent"}
        boxShadow={scrolled ? "0 2px 20px rgba(0, 0, 0, 0.06)" : "none"}
        transition="all 0.3s ease"
      >
        <Flex
          minH="70px"
          py={2}
          px={{ base: 4, md: 8 }}
          align="center"
          maxW="1280px"
          mx="auto"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              color="var(--color-text-primary)"
              _hover={{ bg: "rgba(0, 0, 0, 0.05)" }}
              aria-label="Toggle Navigation"
            />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align="center"
          >
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <HStack spacing={2}>
                <Image
                  src="/logo.png"
                  alt="M2ATech Solutions - Agence web Moncton"
                  height="36px"
                  objectFit="contain"
                  display={{ base: "none", md: "block" }}
                  loading="eager"
                />
                <Image
                  src="/logo4.png"
                  alt="M2ATech Solutions"
                  height="36px"
                  objectFit="contain"
                  display={{ base: "block", md: "none" }}
                  mx="auto"
                  loading="eager"
                />
              </HStack>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
              <DesktopNav />
            </Flex>
          </Flex>

          <HStack
            flex={{ base: 1, md: 0 }}
            justify="flex-end"
            spacing={4}
          >
            <LanguageSwitcher variant="icon" />
            <Button
              as="a"
              fontSize="sm"
              fontWeight={700}
              fontFamily="var(--font-display)"
              color="white"
              bg="#ff5d22"
              href="/contact"
              display={{ base: "none", md: "flex" }}
              _hover={{
                bg: "#e04d15",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 20px rgba(255, 93, 34, 0.3)",
              }}
              transition="all 0.3s ease"
              px={6}
              py={5}
              borderRadius="lg"
            >
              {t('nav.workWithUs')}
            </Button>
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </MotionBox>
  );
};

export default ModernNavbar;
