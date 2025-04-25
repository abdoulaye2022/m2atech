"use client";

import React from 'react';
import { Box, Container, Heading, Text, Grid, GridItem, Button, Icon, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FaGlobe, FaMobileAlt, FaCode, FaSearch } from 'react-icons/fa';

const ServicesSection = () => {
  const gridTemplate = useBreakpointValue({
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)'
  });

  const services = [
    {
      icon: FaGlobe,
      title: "Web Apps",
      description: "From landing pages to complete web applications handling millions of data. We use the right tools to build the perfect digital solution for your needs."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      description: "iOS and Android applications with clean code and smooth performance. We handle the full deployment process."
    },
    {
      icon: FaCode,
      title: "Custom Software",
      description: "Tailored solutions that integrate seamlessly with your existing systems and workflows."
    },
    {
      icon: FaSearch,
      title: "SEO",
      description: "Boost your visibility with our optimization strategies. Technical SEO, content strategy, and analytics."
    }
  ];

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Heading 
          as="h2" 
          size="xl" 
          mb={12} 
          textAlign="center"
          color="gray.800"
          position="relative"
          _after={{
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            bg: 'orange.400',
            mx: 'auto',
            mt: '4'
          }}
        >
          Our Services
        </Heading>

        <Grid 
          templateColumns={gridTemplate} 
          gap={8}
          mb={12}
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <Box 
                bg="white" 
                p={8} 
                borderRadius="lg" 
                boxShadow="md"
                h="100%"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl'
                }}
              >
                <Flex
                  align="center"
                  mb={4}
                >
                  <Icon 
                    as={service.icon} 
                    w={8} 
                    h={8} 
                    color="orange.400" 
                    mr={4}
                  />
                  <Heading as="h3" size="md" color="gray.700">
                    {service.title}
                  </Heading>
                </Flex>
                <Text color="gray.600">
                  {service.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>

        <Flex justify="center">
          <Button
            colorScheme="orange"
            size="lg"
            px={8}
            py={6}
            borderRadius="full"
            boxShadow="md"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.3s ease"
          >
            View All Services
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServicesSection;