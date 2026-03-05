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
} from "@chakra-ui/react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const MotionBox = motion(Box);

const blogPosts = [
  {
    slug: "investir-application-mobile-2025",
    title: "5 raisons d'investir dans une application mobile en 2025",
    excerpt: "Decouvrez pourquoi les entreprises du Nouveau-Brunswick adoptent le mobile pour atteindre leurs clients et augmenter leur chiffre d'affaires.",
    category: "Mobile",
    categoryColor: "#3b82f6",
    date: "28 Fev 2025",
    readTime: "5 min",
  },
  {
    slug: "ia-transforme-developpement-logiciel",
    title: "Comment l'IA transforme le developpement logiciel",
    excerpt: "L'intelligence artificielle revolutionne la facon dont nous concevons et developpons des logiciels. Voici comment en tirer parti pour votre entreprise.",
    category: "IA",
    categoryColor: "#ec4899",
    date: "15 Fev 2025",
    readTime: "7 min",
  },
  {
    slug: "seo-local-nouveau-brunswick",
    title: "SEO local : dominer les recherches au Nouveau-Brunswick",
    excerpt: "Strategies concretes pour que votre entreprise a Moncton, Fredericton ou Saint John apparaisse en premier sur Google.",
    category: "SEO",
    categoryColor: "#8b5cf6",
    date: "5 Fev 2025",
    readTime: "6 min",
  },
];

const BlogPreviewSection = () => {
  const { t } = useTranslation();

  return (
    <Box py={24} bg="var(--color-bg-primary)">
      <Container maxW="1280px">
        <Flex justify="space-between" align="end" mb={16} flexWrap="wrap" gap={4}>
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontFamily="var(--font-display)"
              fontWeight="800"
              color="var(--color-text-primary)"
              mb={4}
            >
              {t('home.blog.title')}{" "}
              <Text as="span" className="gradient-text">
                {t('home.blog.titleHighlight')}
              </Text>
            </Heading>
            <Text color="var(--color-text-secondary)" fontSize="lg" maxW="500px">
              {t('home.blog.subtitle')}
            </Text>
          </Box>

          <Link href="/blog">
            <Flex
              align="center"
              gap={2}
              color="#ff5d22"
              fontWeight="600"
              fontSize="sm"
              _hover={{ gap: 3 }}
              transition="all 0.3s"
            >
              <Text>{t('home.blog.viewAll')}</Text>
              <Icon as={FaArrowRight} w={3} h={3} />
            </Flex>
          </Link>
        </Flex>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {blogPosts.map((post, index) => (
            <GridItem key={post.slug}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                    _hover={{
                      transform: "translateY(-8px)",
                      borderColor: "rgba(255, 93, 34, 0.3)",
                    }}
                  >
                    {/* Category badge */}
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

                    {/* Title */}
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-display)"
                      color="var(--color-text-primary)"
                      mb={3}
                      lineHeight="1.4"
                      _groupHover={{ color: "#ff5d22" }}
                      transition="color 0.2s"
                    >
                      {post.title}
                    </Heading>

                    {/* Excerpt */}
                    <Text
                      color="var(--color-text-muted)"
                      fontSize="sm"
                      lineHeight="1.7"
                      mb={6}
                      noOfLines={2}
                      flex={1}
                    >
                      {post.excerpt}
                    </Text>

                    {/* Meta */}
                    <Flex justify="space-between" align="center" mt="auto">
                      <Text color="var(--color-text-muted)" fontSize="xs">
                        {post.date}
                      </Text>
                      <Flex align="center" gap={1} color="var(--color-text-muted)" fontSize="xs">
                        <Icon as={FaClock} w={3} h={3} />
                        <Text>{post.readTime}</Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Link>
              </MotionBox>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPreviewSection;
