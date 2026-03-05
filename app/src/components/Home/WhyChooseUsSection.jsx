"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaRocket, FaHandshake, FaClock, FaHeadset, FaAward, FaUsers } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const ProgressBar = ({ delay = 0, percentage = 95 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref} w="100%" h="3px" bg="rgba(0, 0, 0, 0.06)" borderRadius="full" overflow="hidden">
      <MotionBox
        h="100%"
        bg="#ff5d22"
        borderRadius="full"
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
      />
    </Box>
  );
};

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const features = [
    { icon: FaRocket, title: t('home.whyChooseUs.speed.title'), description: t('home.whyChooseUs.speed.description'), percentage: 98 },
    { icon: FaHandshake, title: t('home.whyChooseUs.trust.title'), description: t('home.whyChooseUs.trust.description'), percentage: 100 },
    { icon: FaClock, title: t('home.whyChooseUs.delivery.title'), description: t('home.whyChooseUs.delivery.description'), percentage: 95 },
    { icon: FaHeadset, title: t('home.whyChooseUs.support.title'), description: t('home.whyChooseUs.support.description'), percentage: 100 },
    { icon: FaAward, title: t('home.whyChooseUs.quality.title'), description: t('home.whyChooseUs.quality.description'), percentage: 97 },
    { icon: FaUsers, title: t('home.whyChooseUs.team.title'), description: t('home.whyChooseUs.team.description'), percentage: 96 },
  ];

  return (
    <Box py={24} bg="var(--color-bg-tertiary)" position="relative" overflow="hidden">
      <Text className="section-number" right="0" left="auto">02</Text>

      <Container maxW="1280px" position="relative" zIndex={1}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }}>
          {/* Left side - Title */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              position="sticky"
              top="120px"
            >
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontFamily="var(--font-display)"
                fontWeight="800"
                color="var(--color-text-primary)"
                mb={4}
                lineHeight="1.1"
              >
                {t('home.whyChooseUs.title')}{" "}
                <Text as="span" className="gradient-text">
                  {t('home.whyChooseUs.titleHighlight')}
                </Text>
              </Heading>
              <Text color="var(--color-text-secondary)" fontSize="lg" lineHeight="1.7" maxW="450px">
                {t('home.whyChooseUs.subtitle')}
              </Text>

              <Box mt={8} h="2px" w="80px" bg="#ff5d22" borderRadius="full" />
            </MotionBox>
          </GridItem>

          {/* Right side - Features list */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Flex gap={5} align="start">
                    <Flex
                      w={12}
                      h={12}
                      borderRadius="xl"
                      bg="#fff3ee"
                      border="1px solid"
                      borderColor="rgba(255, 93, 34, 0.12)"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={feature.icon} w={5} h={5} color="#ff5d22" />
                    </Flex>

                    <Box flex={1}>
                      <Text
                        fontFamily="var(--font-display)"
                        fontWeight="700"
                        fontSize="lg"
                        color="var(--color-text-primary)"
                        mb={1}
                      >
                        {feature.title}
                      </Text>
                      <Text color="var(--color-text-muted)" fontSize="sm" lineHeight="1.7" mb={3}>
                        {feature.description}
                      </Text>
                      <ProgressBar delay={index * 0.1} percentage={feature.percentage} />
                    </Box>
                  </Flex>
                </MotionBox>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
