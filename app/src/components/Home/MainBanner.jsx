"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from "next/link";

function MainBanner() {
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const textSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Box 
      bgGradient="linear(to-r, #f8f9fa, #e9ecef)"
      position="relative"
      overflow="hidden"
      minH="calc(100vh - 103px)" // Hauteur totale moins la navbar
      display="flex"
      alignItems="center"
      pt="103px" // Compensation pour la navbar fixe
      boxSizing="border-box" // Important pour inclure le padding dans la hauteur
    >
      <Container maxW="container.xl" py={8}>
        <Flex
          direction={flexDirection}
          align="center"
          justify="space-between"
          gap={12}
          h="100%"
        >
          <Box flex="1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <Heading 
              as="h1" 
              size={headingSize}
              mb={6}
              fontWeight="bold"
              lineHeight="1.2"
              color="gray.800"
            >
              Innovative Digital Solutions for Your Business
            </Heading>

            <Text 
              fontSize={textSize}
              mb={8}
              color="gray.600"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="200"
            >
              At M2ATech, we specialize in creating modern, user-friendly websites, 
              powerful mobile apps, and custom software solutions tailored to your 
              unique needs. Let's transform your ideas into reality.
            </Text>

            <Box data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <Link href="/contact" passHref>
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
                  Start Your Project
                </Button>
              </Link>
            </Box>
          </Box>

          <Box 
            flex="1" 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="400"
            position="relative"
            minH={{ base: "300px", md: "500px" }}
            w="100%"
          >
            <Image
              src="/img/banner-img1.png"
              alt="M2ATech Digital Solutions"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default MainBanner;