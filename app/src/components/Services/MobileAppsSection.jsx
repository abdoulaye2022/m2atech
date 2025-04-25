"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaApple, FaAndroid, FaMobile, FaRocket, FaShieldAlt, FaSync, FaCode } from 'react-icons/fa';

const MobileAppsSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const features = [
    {
      icon: FaApple,
      title: "iOS Excellence",
      description: "Native apps built with Swift/SwiftUI for premium performance"
    },
    {
      icon: FaAndroid,
      title: "Android Mastery",
      description: "Kotlin-powered apps optimized for all devices"
    },
    {
      icon: FaMobile,
      title: "Cross-Platform",
      description: "Flutter/React Native solutions for maximum reach"
    },
    {
      icon: FaCode,
      title: "Clean Architecture",
      description: "MVVM/MVI patterns for maintainable code"
    },
    {
      icon: FaShieldAlt,
      title: "App Security",
      description: "Data encryption and secure authentication"
    },
    {
      icon: FaSync,
      title: "CI/CD Pipeline",
      description: "Automated testing and deployment"
    }
  ];

  return (
    <Box py={16} bg="white" id="mobile-apps">
      <Container maxW="container.xl">
        {/* Added the new heading here */}
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Mobile{" "}
          <Box as="span" color="#DD6B20">
            Solutions
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              Premium <Box as="span" color="#DD6B20">Mobile Experiences</Box>
            </Heading>
            
            <Text fontSize="lg" color="gray.600" mb={8}>
              We craft mobile applications that deliver seamless performance across all platforms.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRocket} color="#DD6B20" mr={3} />
                <Text>App Store deployment included</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>Rigorous security audits</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaSync} color="#DD6B20" mr={3} />
                <Text>Ongoing maintenance</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMobile} color="#DD6B20" mr={3} />
                <Text>Device-specific optimization</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} bg="orange.50" p={8} borderRadius="2xl" boxShadow="inner">
              <Box 
                bg="white" 
                h="400px" 
                borderRadius="xl" 
                border="1px solid" 
                borderColor="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={6}
              >
                <Flex mb={6}>
                  <Icon as={FaApple} w={10} h={10} color="gray.700" mr={4} />
                  <Icon as={FaAndroid} w={10} h={10} color="green.500" />
                </Flex>
                <Text fontWeight="bold" mb={2} textAlign="center">App Preview</Text>
                <Text textAlign="center" color="gray.500">Your custom mobile solution</Text>
              </Box>
            </Box>
          )}
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <Box 
              key={index} 
              bg="gray.50" 
              p={8} 
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'md',
                borderColor: 'orange.200'
              }}
            >
              <Icon as={feature.icon} w={8} h={8} color="#DD6B20" mb={4} />
              <Heading as="h3" size="md" mb={3} color="gray.800">
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MobileAppsSection;