"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaLaptopCode, FaServer, FaMobileAlt, FaRocket, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';

const WebAppsSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const features = [
    {
      icon: FaLaptopCode,
      title: "Modern Interfaces",
      description: "Optimized UX/UI with React, Next.js or Vue.js"
    },
    {
      icon: FaServer,
      title: "Robust Backend",
      description: "High-performance APIs with Node.js, Python or .NET"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile-First",
      description: "Responsive design for all devices"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Loading time optimization"
    },
    {
      icon: FaShieldAlt,
      title: "Security",
      description: "Data protection and GDPR compliance"
    },
    {
      icon: FaSyncAlt,
      title: "Scalability",
      description: "Future-proof architecture for your growth"
    }
  ];

  return (
    <Box py={16} bg="white" id="web-apps">
      <Container maxW="container.xl">
        {/* Added the new heading here */}
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Web{" "}
          <Box as="span" color="#DD6B20">
            Applications
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              High Performance <Box as="span" color="#DD6B20">Web Solutions</Box>
            </Heading>
            
            <Text fontSize="lg" color="gray.600" mb={8}>
              We develop web applications that combine aesthetics, functionality and technical performance.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRocket} color="#DD6B20" mr={3} />
                <Text>Optimized delivery timelines</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>Comprehensive security testing</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaSyncAlt} color="#DD6B20" mr={3} />
                <Text>Maintenance and updates</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMobileAlt} color="#DD6B20" mr={3} />
                <Text>Multi-device compatibility</Text>
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
                <Icon as={FaLaptopCode} w={12} h={12} color="#DD6B20" mb={4} />
                <Text fontWeight="bold" mb={2} textAlign="center">Preview</Text>
                <Text textAlign="center" color="gray.500">Your custom web application</Text>
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

export default WebAppsSection;