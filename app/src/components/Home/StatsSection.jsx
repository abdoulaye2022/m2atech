"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MotionBox = motion(Box);

const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <Text
      ref={ref}
      fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
      fontWeight="700"
      fontFamily="var(--font-display)"
      color="white"
      lineHeight="1"
    >
      {count}{suffix}
    </Text>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: 11, suffix: "+", label: t('home.stats.projectsCompleted') },
    { value: 98, suffix: "%", label: t('home.stats.clientSatisfaction') },
    { value: 24, suffix: "/7", label: t('home.stats.support') },
    { value: 6, suffix: "+", label: t('home.stats.yearsExperience') },
    { value: 15, suffix: "+", label: t('home.stats.technologiesMastered') },
  ];

  return (
    <Box py={20} bgGradient="linear(135deg, #ff5d22 0%, #dd6b20 50%, #c05621 100%)" position="relative">
      <Container maxW="1280px">
        <Flex
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={{ base: 8, md: 4 }}
        >
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              flex={{ base: "0 0 45%", md: "1" }}
              position="relative"
              _after={
                index < stats.length - 1
                  ? {
                      content: '""',
                      position: "absolute",
                      right: "0",
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: "50px",
                      width: "1px",
                      bg: "rgba(255,255,255,0.2)",
                      display: { base: "none", md: "block" },
                    }
                  : undefined
              }
            >
              <VStack spacing={2} textAlign="center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <Text
                  color="rgba(255,255,255,0.8)"
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="500"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  {stat.label}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default StatsSection;
