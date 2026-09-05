"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  HStack,
  Tag,
  Button,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { getProjects } from "@/components/Projects/ProjectSection";

const GAP = 24; // px, matches gap={6}
const VISIBLE = 4;

const RecentProjectsSection = () => {
  const { t } = useTranslation();
  const scrollerRef = useRef(null);
  const projects = getProjects(t).slice(0, 8);

  const scrollBy = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("[data-project-card]");
    const step = card ? card.offsetWidth + GAP : scroller.clientWidth;
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Box id="recent-projects" py={24} bg="var(--color-bg-secondary)" position="relative" overflow="hidden">
      <Text className="section-number">02</Text>

      <Container maxW="1280px" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "end" }}
          gap={6}
          mb={10}
        >
          <Box maxW="640px">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontFamily="var(--font-display)"
              fontWeight="700"
              color="var(--color-text-primary)"
              mb={4}
            >
              {t("home.recentProjects.title")}{" "}
              <Text as="span" className="gradient-text">
                {t("home.recentProjects.titleHighlight")}
              </Text>
            </Heading>
            <Text color="var(--color-text-secondary)" fontSize="lg">
              {t("home.recentProjects.subtitle")}
            </Text>
          </Box>

          <HStack spacing={3}>
            <IconButton
              aria-label={t("home.recentProjects.previous")}
              icon={<FaChevronLeft />}
              onClick={() => scrollBy(-1)}
              variant="outline"
              borderRadius="full"
              borderColor="var(--color-border)"
              _hover={{ bg: "#ff5d22", color: "white", borderColor: "#ff5d22" }}
            />
            <IconButton
              aria-label={t("home.recentProjects.next")}
              icon={<FaChevronRight />}
              onClick={() => scrollBy(1)}
              variant="outline"
              borderRadius="full"
              borderColor="var(--color-border)"
              _hover={{ bg: "#ff5d22", color: "white", borderColor: "#ff5d22" }}
            />
            <Link href="/projects" passHref>
              <Button
                as="span"
                variant="ghost"
                color="#ff5d22"
                fontWeight={700}
                fontFamily="var(--font-display)"
                rightIcon={<FaArrowRight />}
                _hover={{ bg: "#fff3ee" }}
              >
                {t("home.recentProjects.viewAll")}
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Container>

      <Container maxW="1280px" position="relative" zIndex={1}>
      <Box
        ref={scrollerRef}
        overflowX="auto"
        py={3}
        mx={-3}
        px={3}
        sx={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Flex gap={`${GAP}px`}>
          {projects.map((project) => (
            <Box
              key={project.key}
              data-project-card
              flex={{
                base: "0 0 85%",
                sm: `0 0 calc((100% - ${GAP}px) / 2)`,
                lg: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
              }}
              minW={0}
              bg="white"
              borderRadius="2xl"
              border="1px solid"
              borderColor="var(--color-border)"
              overflow="hidden"
              transition="all 0.3s ease"
              sx={{ scrollSnapAlign: "start" }}
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                borderColor: "var(--color-border-hover)",
              }}
            >
              <Box position="relative" h="190px" bg="var(--color-bg-tertiary)">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - ${project.category}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 480px) 85vw, (max-width: 992px) 50vw, 310px"
                />
                <Flex
                  position="absolute"
                  top={3}
                  left={3}
                  align="center"
                  gap={2}
                  bg="rgba(255,255,255,0.92)"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight={600}
                  color="var(--color-text-primary)"
                >
                  <Icon as={project.icon} color="#ff5d22" />
                  {project.category}
                </Flex>
              </Box>

              <Box p={5}>
                <Heading
                  as="h3"
                  fontSize="md"
                  fontFamily="var(--font-display)"
                  color="var(--color-text-primary)"
                  mb={2}
                >
                  {project.title}
                </Heading>
                <Text color="var(--color-text-secondary)" fontSize="sm" lineHeight="1.7" noOfLines={3} mb={4}>
                  {project.description}
                </Text>
                <HStack spacing={2} mb={5} flexWrap="wrap">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} size="sm" bg="#fff3ee" color="#ff5d22" borderRadius="full" fontWeight={600}>
                      {tag}
                    </Tag>
                  ))}
                </HStack>
                <HStack spacing={3}>
                  <Link href="/projects" passHref style={{ flex: 1 }}>
                    <Button
                      as="span"
                      size="sm"
                      w="100%"
                      bg="#ff5d22"
                      color="white"
                      borderRadius="lg"
                      fontWeight={700}
                      _hover={{ bg: "#e04d15" }}
                    >
                      {t("home.recentProjects.details")}
                    </Button>
                  </Link>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      flex="1"
                      variant="outline"
                      borderColor="var(--color-border)"
                      borderRadius="lg"
                      fontWeight={700}
                      rightIcon={<FaExternalLinkAlt size={11} />}
                      _hover={{ borderColor: "#ff5d22", color: "#ff5d22" }}
                    >
                      {t("home.recentProjects.visit")}
                    </Button>
                  )}
                </HStack>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
      </Container>
    </Box>
  );
};

export default RecentProjectsSection;
