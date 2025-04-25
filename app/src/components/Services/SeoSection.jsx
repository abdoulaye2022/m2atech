"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaSearch, FaChartLine, FaMobile, FaPenFancy, FaGlobe, FaLink } from 'react-icons/fa';

const SeoSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const features = [
    {
      icon: FaSearch,
      title: "Keyword Strategy",
      description: "Targeted research to attract qualified traffic"
    },
    {
      icon: FaChartLine,
      title: "Performance Analytics",
      description: "Data-driven optimization with Google Analytics"
    },
    {
      icon: FaMobile,
      title: "Mobile Optimization",
      description: "SEO-friendly responsive design"
    },
    {
      icon: FaPenFancy,
      title: "Content Optimization",
      description: "Engaging content that ranks well"
    },
    {
      icon: FaGlobe,
      title: "Local SEO",
      description: "Dominate local search results"
    },
    {
      icon: FaLink,
      title: "Link Building",
      description: "High-quality backlink strategies"
    }
  ];

  return (
    <Box py={16} bg="white" id="seo">
      <Container maxW="container.xl">
        {/* Added the new heading here */}
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Search{" "}
          <Box as="span" color="#DD6B20">
            Optimization
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              Comprehensive <Box as="span" color="#DD6B20">SEO Services</Box>
            </Heading>
            
            <Text fontSize="lg" color="gray.600" mb={8}>
              We optimize your digital presence to increase visibility and drive organic growth.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaSearch} color="#DD6B20" mr={3} />
                <Text>Technical SEO audits</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaChartLine} color="#DD6B20" mr={3} />
                <Text>Competitor analysis</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaPenFancy} color="#DD6B20" mr={3} />
                <Text>Content strategy</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaGlobe} color="#DD6B20" mr={3} />
                <Text>Google My Business</Text>
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
                <Icon as={FaSearch} w={12} h={12} color="#DD6B20" mb={4} />
                <Text fontWeight="bold" mb={2} textAlign="center">SEO Results</Text>
                <Text textAlign="center" color="gray.500">Higher rankings · More traffic · Better conversions</Text>
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

export default SeoSection;