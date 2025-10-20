"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const ContactBanner = () => {
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  const { t } = useTranslation();

  const buttonVariants = {
    hover: {
      y: -3,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      y: -1,
      scale: 0.98
    }
  };

  return (
    <AnimatedSection direction="up" distance={50}>
      <Box bg="black" color="white" py={12} overflow="hidden">
        <Container maxW="container.xl">
          <Flex
            direction={flexDirection}
            justify="space-between"
            align="center"
            gap={6}
          >
            <AnimatedSection delay={0.1} flex={1}>
              <Heading as="h3" size="lg" mb={2} textAlign={textAlign}>
                {t('contact.banner.title')}{" "}
                <Text as="span" color="orange.400">
                  {t('contact.banner.email')}
                </Text>
              </Heading>
              <Text fontSize="lg" opacity={0.9} textAlign={textAlign}>
                {t('contact.banner.subtitle')}
              </Text>
            </AnimatedSection>

            <AnimatedSection 
              delay={0.3}
              direction="left"
              distance={30}
            >
              <Flex
                gap={4}
                justify={useBreakpointValue({ base: "center", md: "flex-end" })}
              >
                <MotionButton
                  as="a"
                  href="mailto:contact@m2atech.com"
                  leftIcon={<FaEnvelope />}
                  colorScheme="orange"
                  size="lg"
                  px={8}
                  borderRadius="md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: "0 8px 25px rgba(221, 107, 32, 0.3)",
                  }}
                >
                  {t('contact.banner.emailButton')}
                </MotionButton>

                <MotionButton
                  as="a"
                  href="tel:+15068506548"
                  leftIcon={<FaPhoneAlt />}
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size="lg"
                  px={8}
                  borderRadius="md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  _hover={{
                    bg: "whiteAlpha.200",
                    borderColor: "orange.400",
                    color: "orange.400",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
                  }}
                  transition="all 0.3s ease"
                >
                  {t('contact.banner.callButton')}
                </MotionButton>
              </Flex>
            </AnimatedSection>
          </Flex>
        </Container>
      </Box>
    </AnimatedSection>
  );
};

export default ContactBanner;
