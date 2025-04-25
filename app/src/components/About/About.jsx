"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, useBreakpointValue, Button } from '@chakra-ui/react';
import { FaRocket, FaUsers, FaLightbulb, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const stats = [
    { value: "6+", label: "Projects Delivered" },
    { value: "4+", label: "Satisfied Clients" },
    { value: "100%", label: "Client Retention" },
    { value: "New Brunswick", label: "Based in", icon: FaMapMarkerAlt }
  ];

  const values = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Modern solutions tailored for Atlantic Canadian businesses"
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Your vision combined with our technical expertise"
    },
    {
      icon: FaLightbulb,
      title: "Creativity",
      description: "Unique digital experiences that stand out"
    },
    {
      icon: FaHandshake,
      title: "Integrity",
      description: "Transparent processes and honest communication"
    }
  ];

  return (
    <Box py={16} bg="white" id="about">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          About <Box as="span" color="#DD6B20">Our New Brunswick Agency</Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center" mb={16}>
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800">
              Our Story
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              Founded in New Brunswick, we're a passionate team dedicated to helping local businesses thrive through digital transformation. 
              In just a few months, we've already delivered successful projects for clients across Atlantic Canada.
            </Text>
            <Text fontSize="lg" color="gray.600">
              What sets us apart is our deep understanding of regional business needs combined with cutting-edge technical expertise.
            </Text>
          </Box>

          {isDesktop && (
            <Box flex={1}>
              <Image
                src="/img/about1.png" // Suggested New Brunswick-themed image
                alt="Our New Brunswick team"
                borderRadius="2xl"
                boxShadow="lg"
              />
            </Box>
          )}
        </Flex>

        <Box bg="orange.50" p={8} borderRadius="2xl" mb={16}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} textAlign="center">
            {stats.map((stat, index) => (
              <Box key={index}>
                <Text fontSize="3xl" fontWeight="bold" color="#DD6B20">
                  {stat.value}
                  {stat.icon && <Icon as={stat.icon} ml={2} verticalAlign="middle" />}
                </Text>
                <Text color="gray.600">{stat.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Heading as="h2" size="xl" mb={12} textAlign="center" color="gray.800">
          Our <Box as="span" color="#DD6B20">Values</Box>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
          {values.map((value, index) => (
            <Box 
              key={index} 
              textAlign="center"
              p={6}
              borderRadius="xl"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'md'
              }}
            >
              <Icon as={value.icon} w={10} h={10} color="#DD6B20" mb={4} mx="auto" />
              <Heading as="h3" size="md" mb={3} color="gray.800">
                {value.title}
              </Heading>
              <Text color="gray.600">{value.description}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          {isDesktop && (
            <Box flex={1}>
              <Image
                src="/img/mission.png" // New Brunswick mission image
                alt="Serving Atlantic Canada"
                borderRadius="2xl"
                boxShadow="lg"
              />
            </Box>
          )}
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800">
              Our Local Mission
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              To empower New Brunswick businesses with affordable, high-quality digital solutions that drive real growth in our local economy.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={4}>
              We're committed to helping Atlantic Canadian businesses compete in the digital age while maintaining their unique local identity.
            </Text>
            <Button
              colorScheme="orange"
              size="lg"
              mt={4}
              as="a"
              href="/contact"
            >
              Let's Build Something Great
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;