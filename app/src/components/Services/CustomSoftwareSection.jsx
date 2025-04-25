"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaCogs, FaDatabase, FaCloud, FaShieldAlt, FaSync, FaChartBar } from 'react-icons/fa';

const CustomSoftwareSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const features = [
    {
      icon: FaCogs,
      title: "Tailored Solutions",
      description: "Bespoke software designed for your unique business needs"
    },
    {
      icon: FaDatabase,
      title: "Data Management",
      description: "Custom databases and analytics platforms"
    },
    {
      icon: FaCloud,
      title: "Cloud Integration",
      description: "Seamless cloud deployment and migration"
    },
    {
      icon: FaShieldAlt,
      title: "Enterprise Security",
      description: "Robust protection for sensitive data"
    },
    {
      icon: FaSync,
      title: "System Integration",
      description: "Connect with your existing tools and workflows"
    },
    {
      icon: FaChartBar,
      title: "Business Intelligence",
      description: "Turn data into actionable insights"
    }
  ];

  return (
    <Box py={16} bg="white" id="custom-software">
      <Container maxW="container.xl">
        {/* Added the new heading here */}
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          Custom{" "}
          <Box as="span" color="#DD6B20">
            Software
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              Powerful <Box as="span" color="#DD6B20">Custom Software</Box>
            </Heading>
            
            <Text fontSize="lg" color="gray.600" mb={8}>
              We build specialized solutions that streamline operations and drive business growth.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaCogs} color="#DD6B20" mr={3} />
                <Text>Process automation</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaDatabase} color="#DD6B20" mr={3} />
                <Text>Custom CRM/ERP systems</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaCloud} color="#DD6B20" mr={3} />
                <Text>Cloud-native applications</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>Compliance-ready solutions</Text>
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
                <Icon as={FaCogs} w={12} h={12} color="#DD6B20" mb={4} />
                <Text fontWeight="bold" mb={2} textAlign="center">Your Business. Your Software.</Text>
                <Text textAlign="center" color="gray.500">Fully customized to your operational requirements</Text>
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

export default CustomSoftwareSection;