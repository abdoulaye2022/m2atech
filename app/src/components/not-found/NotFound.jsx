"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  ChakraProvider
} from "@chakra-ui/react";
import Link from "next/link";
import FooterApp from "@/components/Partials/FooterApp";
import Navbar from "@/components/Partials/Navbar";

export default function NotFound() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box pt="102px">
        <Container
          maxW="container.lg"
          minH="70vh"
          display="flex"
          alignItems="center"
          py={10}
        >
          <VStack spacing={6} textAlign="center" w="full">
            {/* M2ATech Logo */}
            <Box mb={6}>
              <Image src="/logo.png" alt="M2ATech Logo" h="45px" w="auto" />
            </Box>

            {/* Error Message */}
            <Heading as="h1" size="xl" color="orange.500">
              404 - Page Not Found
            </Heading>

            <Text fontSize="lg" color="gray.600">
              The page you're looking for doesn't exist or has been moved.
            </Text>

            {/* Action Buttons */}
            <VStack spacing={3} mt={6}>
              <Button
                as={Link}
                href="/"
                colorScheme="orange"
                size="md"
                px={6}
                _hover={{ transform: "scale(1.03)" }}
                transition="all 0.2s"
              >
                Return Home
              </Button>

              <Button
                as={Link}
                href="/contact"
                variant="outline"
                colorScheme="orange"
                size="md"
                px={6}
              >
                Contact Us
              </Button>
            </VStack>
          </VStack>
        </Container>
        <FooterApp />
      </Box>
    </ChakraProvider>
  );
}
