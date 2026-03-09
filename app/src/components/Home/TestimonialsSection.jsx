"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Avatar,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('home.testimonials.testimonial1.name'),
      role: t('home.testimonials.testimonial1.role'),
      content: t('home.testimonials.testimonial1.content'),
      avatar: "/img/testimonials/avatar1.png",
      rating: 5,
    },
    {
      name: t('home.testimonials.testimonial2.name'),
      role: t('home.testimonials.testimonial2.role'),
      content: t('home.testimonials.testimonial2.content'),
      avatar: "/img/testimonials/avatar2.png",
      rating: 5,
    },
    {
      name: t('home.testimonials.testimonial3.name'),
      role: t('home.testimonials.testimonial3.role'),
      content: t('home.testimonials.testimonial3.content'),
      avatar: "/img/testimonials/avatar3.png",
      rating: 5,
    },
    {
      name: t('home.testimonials.testimonial4.name'),
      role: t('home.testimonials.testimonial4.role'),
      content: t('home.testimonials.testimonial4.content'),
      avatar: "/img/testimonials/avatar4.png",
      rating: 5,
    },
  ];

  return (
    <Box py={24} bg="var(--color-bg-primary)" position="relative" overflow="hidden">
      {/* Giant decorative quote */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        opacity={0.03}
        pointerEvents="none"
      >
        <Icon as={FaQuoteLeft} w="300px" h="300px" color="#ff5d22" />
      </Box>

      <Container maxW="1280px" position="relative" zIndex={1}>
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="700"
            color="var(--color-text-primary)"
          >
            {t('home.testimonials.title')}{" "}
            <Text as="span" className="gradient-text">
              {t('home.testimonials.titleHighlight')}
            </Text>
          </Heading>
          <Text color="var(--color-text-secondary)" maxW="600px" fontSize="lg">
            {t('home.testimonials.subtitle')}
          </Text>
        </VStack>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          alignItems="center"
        >
          {testimonials.map((testimonial, index) => (
            <GridItem key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Box
                  className="glass-card"
                  p={8}
                  borderRadius="xl"
                  position="relative"
                  transition="all 0.3s ease"
                  bg="white"
                  boxShadow="0 2px 20px rgba(0,0,0,0.06)"
                  _hover={{
                    transform: "translateY(-5px)",
                    borderColor: "rgba(255, 93, 34, 0.3)",
                  }}
                >
                  {/* Stars */}
                  <HStack spacing={1} mb={5}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MotionBox
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon as={FaStar} w={4} h={4} color="#ff5d22" />
                      </MotionBox>
                    ))}
                  </HStack>

                  <Text
                    color="var(--color-text-secondary)"
                    mb={6}
                    fontStyle="italic"
                    lineHeight="1.8"
                    fontSize="sm"
                  >
                    &ldquo;{testimonial.content}&rdquo;
                  </Text>

                  <HStack spacing={4}>
                    <Avatar
                      size="md"
                      name={testimonial.name}
                      bg="var(--color-bg-card)"
                      color="#ff5d22"
                      border="2px solid"
                      borderColor="#ff5d22"
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold" color="var(--color-text-primary)" fontSize="sm">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="xs" color="var(--color-text-muted)">
                        {testimonial.role}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </MotionBox>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
