import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  Text,
  Heading,
  Flex,
  useBreakpointValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterApp = () => {
  const columnTemplate = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });

  return (
    <Box
      bg="gray.900"
      color="white"
      py={12}
      borderTop="1px solid"
      borderColor="orange.500"
    >
      <Container maxW="container.xl">
        <Grid templateColumns={columnTemplate} gap={8} mb={8}>
          {/* Column 1: Logo and Social */}
          <GridItem>
            <Flex direction="column" height="100%">
              <Image
                src="/logo2.png"
                alt="M2ATech Logo"
                w="150px"
                mb={4}
                loading="lazy"
              />
              <Text mb={6} fontSize="sm" opacity={0.8}>
                Delivering innovative digital solutions for your business growth
                and success.
              </Text>
              <Flex mt="auto" gap={4}>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/m2atech-solutions-inc"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/m2atech.solutions?igsh=MWk4dWdubXBsNmJzZg%3D%3D&utm_source=qr"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaInstagram size={20} />
                </Link>
                {/* <Link
                  target="_blank"
                  href="https://youtube.com/m2atech"
                  isExternal
                  _hover={{ color: "orange.300" }}
                >
                  <FaYoutube size={20} />
                </Link> */}
              </Flex>
            </Flex>
          </GridItem>

          {/* Column 2: Quick Links */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              Quick Links
            </Heading>
            <Stack spacing={3}>
              <Link
                href="/about"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                About Us
              </Link>
              <Link
                href="/services/web-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Projects
              </Link>
              <Link
                href="/projects"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Contact
              </Link>
            </Stack>
          </GridItem>

          {/* Column 3: Our Services */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              Our Services
            </Heading>
            <Stack spacing={3}>
              <Link
                href="/services/web-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Web Apps
              </Link>
              <Link
                href="/services/mobile-apps"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Mobile Apps
              </Link>
              <Link
                href="/services/custom-software"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                Custom Software
              </Link>
              <Link
                href="/services/seo"
                _hover={{ color: "orange.300", transform: "translateX(4px)" }}
                transition="all 0.2s"
              >
                SEO
              </Link>
            </Stack>
          </GridItem>

          {/* Column 4: Contact */}
          <GridItem>
            <Heading
              as="h3"
              size="md"
              mb={4}
              color="orange.400"
              fontWeight="semibold"
            >
              Contact Us
            </Heading>
            <Stack spacing={3}>
              <Flex align="center">
                <EmailIcon mr={3} color="orange.300" />
                <Link
                  href="mailto:info@m2atech.com"
                  _hover={{ color: "orange.300" }}
                >
                  contact@m2atech.com
                </Link>
              </Flex>
              <Flex align="center">
                <PhoneIcon mr={3} color="orange.300" />
                <Text>+1 (506) 850-6548</Text>
              </Flex>
              <Text mt={4} fontSize="sm" opacity={0.8}>
                203-74 Belmont Street,
                <br />
                Moncton, NB E1C 8W4, Canada
              </Text>
            </Stack>
          </GridItem>
        </Grid>

        {/* Copyright */}
        <Box borderTop="1px solid" borderColor="gray.700" pt={6}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
          >
            <Text color="gray.400" mb={{ base: 2, md: 0 }}>
              © {new Date().getFullYear()} M2ATech Solutions Inc. All rights
              reserved.
            </Text>
            <Flex gap={4}>
              <Link
                href="/privacy"
                fontSize="sm"
                _hover={{ color: "orange.300" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie"
                fontSize="sm"
                _hover={{ color: "orange.300" }}
              >
                Cookie Policy
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterApp;
