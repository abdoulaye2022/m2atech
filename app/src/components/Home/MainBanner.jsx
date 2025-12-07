"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedSection from "../Partials/AnimatedSection";
import { motion } from "framer-motion";

const MotionButton = motion(Button);
const MotionImage = motion(Image);

function MainBanner() {
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const textSize = useBreakpointValue({ base: "lg", md: "xl" });
  const { t } = useTranslation();

  const buttonVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, #f8f9fa, #e9ecef)"
      position="relative"
      overflow="hidden"
      minH="calc(100vh - 103px)"
      display="flex"
      alignItems="center"
      pt="103px"
      boxSizing="border-box"
    >
      {/* Decorative shape - Globe en arrière-plan */}
      <Box
        position="absolute"
        right={{ base: "-150px", md: "-100px", lg: "0" }}
        top={{ base: "auto", lg: "50%" }}
        bottom={{ base: "-100px", lg: "auto" }}
        transform={{ base: "none", lg: "translateY(-50%)" }}
        w={{ base: "400px", md: "500px", lg: "600px" }}
        h={{ base: "400px", md: "500px", lg: "600px" }}
        opacity={0.35}
        zIndex={0}
        pointerEvents="none"
      >
        <Image
          src="/img/shape/circle-shape1.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* Decorative shape - Network en haut à gauche */}
      <Box
        position="absolute"
        left={{ base: "-100px", md: "-50px" }}
        top={{ base: "-50px", md: "50px" }}
        w={{ base: "250px", md: "350px" }}
        h={{ base: "250px", md: "350px" }}
        opacity={0.25}
        zIndex={0}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/img/shape/vector-shape1.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Container maxW="container.xl" py={8} position="relative" zIndex={1}>
        <Flex
          direction={flexDirection}
          align="center"
          justify="space-between"
          gap={12}
          h="100%"
        >
          <AnimatedSection
            flex="1"
            delay={0.1}
            direction="left"
            distance={50}
          >
            <Heading
              as="h1"
              size={headingSize}
              mb={6}
              fontWeight="bold"
              lineHeight="1.2"
              color="gray.800"
            >
              {t('home.mainBanner.title')}{" "}
              <Text as="span" color="orange.500">
                {t('home.mainBanner.titleHighlight')}
              </Text>
            </Heading>

            <AnimatedSection delay={0.2} distance={30}>
              <Text
                fontSize={textSize}
                mb={8}
                color="gray.600"
              >
                {t('home.mainBanner.subtitle')}
              </Text>
            </AnimatedSection>

            <AnimatedSection delay={0.3} distance={20}>
              <Link href="/contact" passHref>
                <MotionButton
                  colorScheme="orange"
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="full"
                  boxShadow="md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  _hover={{
                    boxShadow: "0 8px 25px rgba(221, 107, 32, 0.3)",
                  }}
                  transition="all 0.3s ease"
                >
                  {t('home.mainBanner.cta')}
                </MotionButton>
              </Link>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection
            flex="1"
            delay={0.4}
            direction="right"
            distance={50}
          >
            <Box
              position="relative"
              minH={{ base: "300px", md: "500px" }}
              w="100%"
            >
              <MotionImage
                src="/img/banner-img1.png"
                alt="M2ATech Digital Solutions"
                w="100%"
                h="100%"
                objectFit="contain"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              />
            </Box>
          </AnimatedSection>
        </Flex>
      </Container>
    </Box>
  );
}

export default MainBanner;
