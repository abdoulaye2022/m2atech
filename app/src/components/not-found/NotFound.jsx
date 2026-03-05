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
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

function NotFoundContent() {
  const { t } = useTranslation();

  return (
    <>
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
            <Box mb={6}>
              <Image src="/logo.png" alt="M2ATech Logo" h="45px" w="auto" />
            </Box>
            <Heading as="h1" size="xl" color="#ff5d22" fontFamily="var(--font-display)">
              {t('notFound.title')}
            </Heading>
            <Text fontSize="lg" color="var(--color-text-secondary)">
              {t('notFound.description')}
            </Text>
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
                {t('notFound.returnHome')}
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline"
                colorScheme="orange"
                size="md"
                px={6}
              >
                {t('notFound.contactUs')}
              </Button>
            </VStack>
          </VStack>
        </Container>
        <FooterApp />
      </Box>
    </>
  );
}

export default function NotFound() {
  return (
    <ChakraProvider>
      <LanguageProvider>
        <NotFoundContent />
      </LanguageProvider>
    </ChakraProvider>
  );
}
