"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaRocket, FaHandshake, FaClock, FaHeadset, FaAward, FaUsers } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: FaRocket,
      title: t('home.whyChooseUs.speed.title'),
      description: t('home.whyChooseUs.speed.description'),
      color: "orange",
    },
    {
      icon: FaHandshake,
      title: t('home.whyChooseUs.trust.title'),
      description: t('home.whyChooseUs.trust.description'),
      color: "blue",
    },
    {
      icon: FaClock,
      title: t('home.whyChooseUs.delivery.title'),
      description: t('home.whyChooseUs.delivery.description'),
      color: "green",
    },
    {
      icon: FaHeadset,
      title: t('home.whyChooseUs.support.title'),
      description: t('home.whyChooseUs.support.description'),
      color: "purple",
    },
    {
      icon: FaAward,
      title: t('home.whyChooseUs.quality.title'),
      description: t('home.whyChooseUs.quality.description'),
      color: "pink",
    },
    {
      icon: FaUsers,
      title: t('home.whyChooseUs.team.title'),
      description: t('home.whyChooseUs.team.description'),
      color: "teal",
    },
  ];

  return (
    <Box py={20} bg="white" position="relative" overflow="hidden">
      {/* Background decoration - Vector shape en haut à droite */}
      <Box
        position="absolute"
        top={{ base: "-50px", md: "0" }}
        right={{ base: "-100px", md: "-50px" }}
        w={{ base: "300px", md: "400px" }}
        h={{ base: "300px", md: "400px" }}
        opacity={0.2}
        zIndex={0}
        pointerEvents="none"
      >
        <Image
          src="/img/shape/vector-shape1.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* Background decoration - Circle shape en bas à gauche */}
      <Box
        position="absolute"
        bottom={{ base: "-100px", md: "-50px" }}
        left={{ base: "-100px", md: "-50px" }}
        w={{ base: "300px", md: "400px" }}
        h={{ base: "300px", md: "400px" }}
        opacity={0.25}
        zIndex={0}
        pointerEvents="none"
      >
        <Image
          src="/img/shape/circle-shape2.png"
          alt=""
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading as="h2" size="xl" color="gray.800">
            {t('home.whyChooseUs.title')}{" "}
            <Box as="span" color="orange.500">
              {t('home.whyChooseUs.titleHighlight')}
            </Box>
          </Heading>
          <Text color="gray.600" maxW="600px" fontSize="lg">
            {t('home.whyChooseUs.subtitle')}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Flex
                direction="column"
                align="center"
                textAlign="center"
                p={8}
                bg="gray.50"
                borderRadius="2xl"
                border="1px solid"
                borderColor="gray.100"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                  borderColor: `${feature.color}.200`,
                  bg: "white",
                }}
              >
                <Flex
                  w={16}
                  h={16}
                  borderRadius="full"
                  bg={`${feature.color}.100`}
                  align="center"
                  justify="center"
                  mb={5}
                >
                  <Icon as={feature.icon} w={8} h={8} color={`${feature.color}.500`} />
                </Flex>
                <Heading as="h3" size="md" mb={3} color="gray.800">
                  {feature.title}
                </Heading>
                <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                  {feature.description}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
