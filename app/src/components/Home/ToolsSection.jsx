"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ScrollRow = ({ items, direction = "left", speed = 30 }) => {
  const duplicated = [...items, ...items];

  return (
    <Box overflow="hidden" position="relative" py={4}>
      {/* Fade overlays */}
      <Box
        position="absolute"
        left="0"
        top="0"
        bottom="0"
        w="100px"
        bgGradient="linear(to-r, var(--color-bg-primary), transparent)"
        zIndex={2}
        pointerEvents="none"
      />
      <Box
        position="absolute"
        right="0"
        top="0"
        bottom="0"
        w="100px"
        bgGradient="linear(to-l, var(--color-bg-primary), transparent)"
        zIndex={2}
        pointerEvents="none"
      />

      <Flex justify="center">
        <Flex
          className="infinite-scroll"
          gap={10}
          w="max-content"
          sx={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
        {duplicated.map((tech, index) => (
          <Flex
            key={`${tech.name}-${index}`}
            direction="column"
            align="center"
            gap={2}
            flexShrink={0}
            opacity={0.7}
            transition="all 0.3s ease"
            _hover={{ opacity: 1, transform: "translateY(-4px)" }}
          >
            <Box
              w={14}
              h={14}
              borderRadius="xl"
              bg="var(--color-bg-secondary)"
              border="1px solid"
              borderColor="var(--color-border)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={3}
              transition="all 0.3s ease"
              _hover={{ borderColor: "var(--color-border-hover)" }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                w="100%"
                h="100%"
                objectFit="contain"
              />
            </Box>
            <Text color="var(--color-text-muted)" fontSize="xs" fontWeight="500">
              {tech.name}
            </Text>
          </Flex>
        ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const ToolsSection = () => {
  const { t } = useTranslation();

  const programmingLanguages = [
    { name: "TypeScript", logo: "/tools/typescript.png" },
    { name: "JavaScript", logo: "/tools/javascript.png" },
    { name: "PHP", logo: "/tools/php.png" },
    { name: "Dart", logo: "/tools/dart.png" },
  ];

  const frameworks = [
    { name: "React", logo: "/tools/react.png" },
    { name: "Next.js", logo: "/tools/next js.png" },
    { name: "Node.js", logo: "/tools/node.png" },
    { name: "Flutter", logo: "/tools/flutter.png" },
    { name: "Laravel", logo: "/tools/laravel.png" },
  ];

  const tools = [
    { name: "Git", logo: "/tools/git.png" },
    { name: "Firebase", logo: "/tools/firebase.png" },
    { name: "MySQL", logo: "/tools/mysql.png" },
    { name: "PostgreSQL", logo: "/tools/postgre.png" },
    { name: "Docker", logo: "/tools/docker.png" },
    { name: "Figma", logo: "/tools/figma.png" },
    { name: "Gimp", logo: "/tools/gimp.jpg" },
    { name: "OpenAI", logo: "/tools/openai.png" },
    { name: "LLM", logo: "/tools/llm.png" },
    { name: "K6", logo: "/tools/k6.png" },
  ];

  return (
    <Box py={24} bg="var(--color-bg-primary)">
      <Container maxW="1280px">
        <MotionBox
          textAlign="center"
          mb={14}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontFamily="var(--font-display)"
            fontWeight="800"
            color="var(--color-text-primary)"
            mb={4}
          >
            {t('home.tools.title')}
          </Heading>
          <Text fontSize="lg" color="var(--color-text-secondary)" maxW="2xl" mx="auto">
            {t('home.tools.subtitle')}
          </Text>
        </MotionBox>

        <VStack spacing={10}>
          <Box w="100%">
            <Text
              fontSize="sm"
              color="var(--color-text-muted)"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              textAlign="center"
            >
              {t('home.tools.programmingLanguages')}
            </Text>
            <ScrollRow items={programmingLanguages} direction="left" speed={20} />
          </Box>

          <Box w="100%">
            <Text
              fontSize="sm"
              color="var(--color-text-muted)"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              textAlign="center"
            >
              {t('home.tools.frameworks')}
            </Text>
            <ScrollRow items={frameworks} direction="right" speed={25} />
          </Box>

          <Box w="100%">
            <Text
              fontSize="sm"
              color="var(--color-text-muted)"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              textAlign="center"
            >
              {t('home.tools.toolsPlatforms')}
            </Text>
            <ScrollRow items={tools} direction="left" speed={35} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ToolsSection;
