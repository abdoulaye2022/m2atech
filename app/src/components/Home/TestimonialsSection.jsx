"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
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
  ];

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading as="h2" size="xl" color="gray.800">
            {t('home.testimonials.title')}{" "}
            <Box as="span" color="orange.500">
              {t('home.testimonials.titleHighlight')}
            </Box>
          </Heading>
          <Text color="gray.600" maxW="600px" fontSize="lg">
            {t('home.testimonials.subtitle')}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="2xl"
                boxShadow="md"
                position="relative"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
              >
                <Icon
                  as={FaQuoteLeft}
                  w={8}
                  h={8}
                  color="orange.100"
                  position="absolute"
                  top={6}
                  right={6}
                />

                <HStack spacing={1} mb={4}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} as={FaStar} w={4} h={4} color="yellow.400" />
                  ))}
                </HStack>

                <Text color="gray.600" mb={6} fontStyle="italic" lineHeight="1.8">
                  "{testimonial.content}"
                </Text>

                <HStack spacing={4}>
                  <Avatar
                    size="md"
                    name={testimonial.name}
                    bg="white"
                    color="orange.500"
                    border="2px solid"
                    borderColor="orange.400"
                  />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" color="gray.800">
                      {testimonial.name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
