"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Tag,
  Button,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { getProjects } from "@/components/Projects/ProjectSection";

const MotionBox = motion(Box);

export const PRODUCT_KEYS = ["m2abot", "m2adoc", "m2acrm", "wasifacture", "timetopray", "epilist"];

export const getProducts = (t) => {
  const all = getProjects(t);
  return PRODUCT_KEYS.map((key) => all.find((p) => p.key === key)).filter(Boolean);
};

const ProductsSection = () => {
  const { t } = useTranslation();
  const products = getProducts(t);

  return (
    <Box py={{ base: 16, md: 24 }} bg="var(--color-bg-primary)">
      <Container maxW="1280px">
        <Box textAlign="center" mb={16} maxW="760px" mx="auto">
          <Badge
            bg="#fff3ee"
            color="#ff5d22"
            px={4}
            py={1.5}
            borderRadius="full"
            fontSize="xs"
            fontWeight={700}
            letterSpacing="wider"
            mb={5}
          >
            {t("products.eyebrow")}
          </Badge>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontFamily="var(--font-display)"
            fontWeight="700"
            color="var(--color-text-primary)"
            lineHeight="1.15"
            mb={5}
          >
            {t("products.title")}{" "}
            <Text as="span" className="gradient-text">
              {t("products.titleHighlight")}
            </Text>
          </Heading>
          <Text color="var(--color-text-secondary)" fontSize="lg" lineHeight="1.8">
            {t("products.subtitle")}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {products.map((product, index) => (
            <MotionBox
              key={product.key}
              id={product.key}
              sx={{ scrollMarginTop: "100px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
              h="100%"
            >
              <Flex
                direction="column"
                h="100%"
                bg="white"
                borderRadius="2xl"
                border="1px solid"
                borderColor="var(--color-border)"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  borderColor: "var(--color-border-hover)",
                }}
              >
                <Box position="relative" h="210px" bg="var(--color-bg-tertiary)">
                  <Image
                    src={product.images[0]}
                    alt={`${product.title} - ${product.category}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </Box>
                <Flex direction="column" flex="1" p={7}>
                  <HStack spacing={3} mb={3}>
                    <Flex w={10} h={10} borderRadius="lg" bg="#fff3ee" align="center" justify="center" flexShrink={0}>
                      <Icon as={product.icon} color="#ff5d22" w={5} h={5} />
                    </Flex>
                    <Box>
                      <Heading as="h2" fontSize="xl" fontFamily="var(--font-display)" color="var(--color-text-primary)">
                        {product.title}
                      </Heading>
                      <Text fontSize="xs" color="var(--color-text-muted)" fontWeight={600}>
                        {product.category}
                      </Text>
                    </Box>
                  </HStack>
                  <Text color="var(--color-text-secondary)" fontSize="sm" lineHeight="1.75" mb={5} flex="1">
                    {product.description}
                  </Text>
                  <HStack spacing={2} mb={6} flexWrap="wrap">
                    {product.tags.slice(0, 4).map((tag) => (
                      <Tag key={tag} size="sm" bg="var(--color-bg-secondary)" color="var(--color-text-secondary)" borderRadius="full">
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                  <HStack spacing={3}>
                    {product.liveUrl && product.liveUrl !== "#" && (
                      <Button
                        as="a"
                        href={product.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        flex="1"
                        bg="#ff5d22"
                        color="white"
                        borderRadius="lg"
                        fontWeight={700}
                        rightIcon={<FaExternalLinkAlt size={11} />}
                        _hover={{ bg: "#e04d15" }}
                      >
                        {t("products.visit")}
                      </Button>
                    )}
                    <Link href="/contact" passHref style={{ flex: 1 }}>
                      <Button
                        as="span"
                        size="sm"
                        w="100%"
                        variant="outline"
                        borderColor="var(--color-border)"
                        borderRadius="lg"
                        fontWeight={700}
                        rightIcon={<FaArrowRight size={11} />}
                        _hover={{ borderColor: "#ff5d22", color: "#ff5d22" }}
                      >
                        {t("products.demo")}
                      </Button>
                    </Link>
                  </HStack>
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Box
          mt={20}
          p={{ base: 8, md: 12 }}
          borderRadius="2xl"
          bgGradient="linear(135deg, #ff5d22 0%, #dd6b20 100%)"
          color="white"
          textAlign="center"
        >
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} fontFamily="var(--font-display)" mb={3}>
            {t("products.ctaTitle")}
          </Heading>
          <Text fontSize="lg" opacity={0.9} maxW="640px" mx="auto" mb={6}>
            {t("products.ctaSubtitle")}
          </Text>
          <Link href="/contact" passHref>
            <Button
              as="span"
              size="lg"
              bg="white"
              color="#ff5d22"
              borderRadius="xl"
              fontFamily="var(--font-display)"
              fontWeight={700}
              px={8}
              _hover={{ transform: "translateY(-2px)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            >
              {t("products.ctaButton")}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
