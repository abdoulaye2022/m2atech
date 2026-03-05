"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Badge,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Partials/Navbar";
import FooterApp from "@/components/Partials/FooterApp";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const blogPosts = [
  {
    slug: "investir-application-mobile-2025",
    title: "5 raisons d'investir dans une application mobile en 2025",
    excerpt: "Decouvrez pourquoi les entreprises du Nouveau-Brunswick adoptent le mobile pour atteindre leurs clients et augmenter leur chiffre d'affaires. De la fidelisation a l'accessibilite, les avantages sont nombreux.",
    category: "Mobile",
    categoryColor: "#3b82f6",
    date: "28 Fevrier 2025",
    readTime: "5 min",
  },
  {
    slug: "ia-transforme-developpement-logiciel",
    title: "Comment l'IA transforme le developpement logiciel",
    excerpt: "L'intelligence artificielle revolutionne la facon dont nous concevons et developpons des logiciels. Voici comment en tirer parti pour votre entreprise, de la generation de code au testing automatise.",
    category: "IA",
    categoryColor: "#ec4899",
    date: "15 Fevrier 2025",
    readTime: "7 min",
  },
  {
    slug: "seo-local-nouveau-brunswick",
    title: "SEO local : dominer les recherches au Nouveau-Brunswick",
    excerpt: "Strategies concretes pour que votre entreprise a Moncton, Fredericton ou Saint John apparaisse en premier sur Google. Guide complet du referencement local.",
    category: "SEO",
    categoryColor: "#8b5cf6",
    date: "5 Fevrier 2025",
    readTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Box bg="var(--color-bg-primary)" minH="100vh" pt="100px">
        <Container maxW="1280px" py={20}>
          <VStack spacing={4} mb={16} textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontFamily="var(--font-display)"
              fontWeight="800"
              color="var(--color-text-primary)"
            >
              Insights &{" "}
              <Text as="span" className="gradient-text">
                Expertise
              </Text>
            </Heading>
            <Text color="var(--color-text-secondary)" fontSize="lg" maxW="600px">
              Nos derniers articles sur le developpement web, mobile et les technologies qui transforment les entreprises au Nouveau-Brunswick.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
            {blogPosts.map((post, index) => (
              <GridItem key={post.slug}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  h="100%"
                >
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <Box
                      className="glass-card"
                      p={8}
                      borderRadius="xl"
                      h="100%"
                      cursor="pointer"
                      transition="all 0.3s ease"
                      role="group"
                      display="flex"
                      flexDirection="column"
                      bg="white"
                      boxShadow="0 2px 20px rgba(0,0,0,0.06)"
                      border="1px solid"
                      borderColor="var(--color-border)"
                      _hover={{
                        transform: "translateY(-8px)",
                        borderColor: "rgba(255, 93, 34, 0.3)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Badge
                        bg={`${post.categoryColor}20`}
                        color={post.categoryColor}
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        border="1px solid"
                        borderColor={`${post.categoryColor}40`}
                        w="fit-content"
                        mb={5}
                      >
                        {post.category}
                      </Badge>

                      <Heading
                        as="h2"
                        fontSize="xl"
                        fontFamily="var(--font-display)"
                        color="var(--color-text-primary)"
                        mb={4}
                        lineHeight="1.4"
                        _groupHover={{ color: "#ff5d22" }}
                        transition="color 0.2s"
                      >
                        {post.title}
                      </Heading>

                      <Text color="var(--color-text-secondary)" fontSize="sm" lineHeight="1.8" mb={6} flex={1}>
                        {post.excerpt}
                      </Text>

                      <Flex justify="space-between" align="center" mt="auto">
                        <Text color="var(--color-text-muted)" fontSize="xs">{post.date}</Text>
                        <Flex align="center" gap={1} color="var(--color-text-muted)" fontSize="xs">
                          <Icon as={FaClock} w={3} h={3} />
                          <Text>{post.readTime}</Text>
                        </Flex>
                      </Flex>

                      <Flex
                        align="center"
                        gap={2}
                        mt={4}
                        color="#ff5d22"
                        fontSize="sm"
                        fontWeight="600"
                        opacity={0}
                        transform="translateX(-10px)"
                        transition="all 0.3s"
                        _groupHover={{ opacity: 1, transform: "translateX(0)" }}
                      >
                        <Text>Lire l'article</Text>
                        <Icon as={FaArrowRight} w={3} h={3} />
                      </Flex>
                    </Box>
                  </Link>
                </MotionBox>
              </GridItem>
            ))}
          </Grid>
        </Container>
        <FooterApp />
      </Box>
    </>
  );
}
