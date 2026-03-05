"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MotionBox = motion(Box);

const AnimatedCounter = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / 2000, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <VStack ref={ref} spacing={0} align="center">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="800"
        fontFamily="var(--font-display)"
        color="var(--color-text-primary)"
      >
        {count}{suffix}
      </Text>
      <Text fontSize="xs" color="var(--color-text-muted)" textTransform="uppercase" letterSpacing="wider">
        {label}
      </Text>
    </VStack>
  );
};

function MainBanner() {
  const { t } = useTranslation();

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      bg="var(--color-bg-primary)"
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
      className="grain-bg"
    >
      {/* Gradient radial orange subtil */}
      <Box
        position="absolute"
        bottom="-200px"
        right="-200px"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(255, 93, 34, 0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          w="4px"
          h="4px"
          borderRadius="full"
          bg="rgba(255, 93, 34, 0.3)"
          left={`${15 + i * 18}%`}
          bottom="20%"
          sx={{
            animation: `float-particle ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
          pointerEvents="none"
        />
      ))}

      <Container maxW="1280px" py={{ base: 20, md: 8 }} pt={{ base: "120px", md: "100px" }} position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
          minH={{ base: "auto", lg: "80vh" }}
        >
          <MotionBox
            flex={{ base: "1", lg: "0 0 58%" }}
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <MotionBox variants={fadeUp}>
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
                mb={6}
                fontFamily="var(--font-body)"
              >
                {t('home.mainBanner.badge')}
              </Badge>
            </MotionBox>

            <MotionBox variants={fadeUp}>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
                fontWeight="800"
                lineHeight="1.1"
                fontFamily="var(--font-display)"
                color="var(--color-text-primary)"
                mb={6}
              >
                {t('home.mainBanner.title')}{" "}
                <Text as="span" className="gradient-text">
                  {t('home.mainBanner.titleHighlight')}
                </Text>
              </Heading>
            </MotionBox>

            <MotionBox variants={fadeUp}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                mb={10}
                color="var(--color-text-secondary)"
                maxW="540px"
                lineHeight="1.7"
              >
                {t('home.mainBanner.subtitle')}
              </Text>
            </MotionBox>

            <MotionBox variants={fadeUp}>
              <HStack spacing={4} flexWrap="wrap">
                <Link href="/projects" passHref>
                  <Button
                    size="lg"
                    bg="#ff5d22"
                    color="white"
                    px={8}
                    py={7}
                    borderRadius="xl"
                    fontFamily="var(--font-display)"
                    fontWeight={700}
                    _hover={{
                      bg: "#e04d15",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 30px rgba(255, 93, 34, 0.3)",
                    }}
                    transition="all 0.3s ease"
                  >
                    {t('home.mainBanner.cta')}
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="var(--color-text-primary)"
                    color="var(--color-text-primary)"
                    px={8}
                    py={7}
                    borderRadius="xl"
                    fontFamily="var(--font-display)"
                    fontWeight={700}
                    _hover={{
                      bg: "var(--color-text-primary)",
                      color: "white",
                      transform: "translateY(-3px)",
                    }}
                    transition="all 0.3s ease"
                  >
                    {t('home.mainBanner.ctaSecondary')}
                  </Button>
                </Link>
              </HStack>
            </MotionBox>

            <MotionBox variants={fadeUp} mt={12}>
              <HStack
                spacing={{ base: 6, md: 10 }}
                divider={<Box h="40px" w="1px" bg="rgba(0, 0, 0, 0.1)" />}
              >
                <AnimatedCounter end={11} suffix="+" label={t('home.stats.projectsCompleted')} />
                <AnimatedCounter end={98} suffix="%" label={t('home.stats.clientSatisfaction')} />
                <AnimatedCounter end={6} suffix="+" label={t('home.stats.yearsLabel')} />
              </HStack>
            </MotionBox>
          </MotionBox>

          <MotionBox
            flex={{ base: "1", lg: "0 0 38%" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            display={{ base: "none", lg: "block" }}
          >
            <Box position="relative" w="100%" h="500px" borderRadius="2xl" overflow="hidden">
              <Image
                src="/img/hero-banner.jpg"
                alt="M2ATech team working on digital solutions"
                fill
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
              />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}

export default MainBanner;
