"use client";

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
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
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <Text ref={ref} fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="white">
      {count}{suffix}
    </Text>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: 10,
      suffix: "+",
      label: t('home.stats.projectsCompleted'),
    },
    {
      value: 98,
      suffix: "%",
      label: t('home.stats.clientSatisfaction'),
    },
    {
      value: 24,
      suffix: "/7",
      label: t('home.stats.support'),
    },
    {
      value: 5,
      suffix: "+",
      label: t('home.stats.yearsExperience'),
    },
  ];

  return (
    <Box
      py={20}
      bgGradient="linear(135deg, #ff5d22 0%, #dd6b20 50%, #c05621 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 8, md: 12 }}>
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VStack spacing={2}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <Text
                  color="white"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign="center"
                  opacity="0.9"
                >
                  {stat.label}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StatsSection;
