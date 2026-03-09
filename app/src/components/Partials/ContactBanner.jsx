"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Heading,
  Input,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

const ContactBanner = () => {
  const { t } = useTranslation();

  return (
    <Box
      py={20}
      bg="#1c1c21"
      position="relative"
      overflow="hidden"
    >
      {/* Orange glow */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        bg="radial-gradient(circle, rgba(255, 93, 34, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1280px">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            align={{ base: "start", lg: "center" }}
            gap={{ base: 8, lg: 16 }}
          >
            <VStack align="start" spacing={4} flex={1}>
              <Heading
                as="h3"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontFamily="var(--font-display)"
                fontWeight="700"
                color="white"
                lineHeight="1.2"
              >
                {t('ctaBanner.title1')}{" "}
                <Text as="span" className="gradient-text">
                  {t('ctaBanner.titleHighlight')}
                </Text>{" "}
                {t('ctaBanner.title2')}
              </Heading>
              <Text color="rgba(255, 255, 255, 0.6)" fontSize="lg" maxW="500px">
                {t('ctaBanner.subtitle')}
              </Text>

              <HStack spacing={6} mt={2}>
                <HStack spacing={2}>
                  <FaEnvelope color="#ff5d22" size={14} />
                  <Link href="mailto:contact@m2atech.com">
                    <Text color="rgba(255, 255, 255, 0.6)" fontSize="sm" _hover={{ color: "#ff5d22" }} transition="color 0.2s">
                      contact@m2atech.com
                    </Text>
                  </Link>
                </HStack>
                <HStack spacing={2}>
                  <FaPhoneAlt color="#ff5d22" size={14} />
                  <Text color="rgba(255, 255, 255, 0.6)" fontSize="sm">+1 (506) 850-6548</Text>
                </HStack>
              </HStack>
            </VStack>

            <Box>
              <Link href="/contact">
                <Button
                  size="lg"
                  bg="#ff5d22"
                  color="white"
                  rightIcon={<FaArrowRight />}
                  px={8}
                  py={7}
                  borderRadius="xl"
                  fontFamily="var(--font-display)"
                  fontWeight="700"
                  _hover={{
                    bg: "#e04d15",
                    transform: "translateY(-3px)",
                    boxShadow: "0 0 30px rgba(255, 93, 34, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  {t('ctaBanner.button')}
                </Button>
              </Link>
            </Box>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactBanner;
