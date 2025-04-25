'use client'

import React from 'react';
import { Box, Container, Flex, Text, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactBanner = () => {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const textAlign = useBreakpointValue({ base: 'center', md: 'left' });

  return (
    <Box bg="black" color="white" py={12}>
      <Container maxW="container.xl">
        <Flex
          direction={flexDirection}
          justify="space-between"
          align="center"
          gap={6}
        >
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={2} textAlign={textAlign}>
              Send us an email <Text as="span" color="orange.400">contact@m2atech.com</Text>
            </Heading>
            <Text fontSize="lg" opacity={0.9} textAlign={textAlign}>
              Get a free estimate for your project in the next 24 hours.
            </Text>
          </Box>

          <Flex gap={4} justify={useBreakpointValue({ base: 'center', md: 'flex-end' })}>
            <Button
              leftIcon={<FaEnvelope />}
              colorScheme="orange"
              size="lg"
              px={8}
              borderRadius="md"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
              transition="all 0.3s ease"
            >
              Email Us
            </Button>
            
            <Button
              leftIcon={<FaPhoneAlt />}
              variant="outline"
              colorScheme="whiteAlpha"
              size="lg"
              px={8}
              borderRadius="md"
              _hover={{
                bg: 'whiteAlpha.100',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s ease"
            >
              Call Us
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactBanner;