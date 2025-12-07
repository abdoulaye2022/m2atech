"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "@/hooks/useTranslation";

const ToolsSection = () => {
  const { t } = useTranslation();
  const columns = useBreakpointValue({ base: 3, md: 5, lg: 7 });

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

  const renderTechGroup = (title, items) => (
    <Box mb={12}>
      <Heading as="h3" size="lg" mb={6} color="gray.700" textAlign="center">
        {title}
      </Heading>

      <SimpleGrid columns={columns} spacing={8} placeItems="center">
        {items.map((tech, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-5px)",
            }}
          >
            <Box
              w={16}
              h={16}
              mb={2}
              bg="white"
              p={2}
              borderRadius="lg"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={40}
                height={40}
                objectFit="contain"
              />
            </Box>
            <Text color="gray.600" fontSize="sm" fontWeight="medium">
              {tech.name}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            size="xl"
            mb={4}
            color="gray.800"
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              bg: "orange.400",
              mx: "auto",
              mt: "4",
            }}
          >
            {t('home.tools.title')}
          </Heading>

          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            {t('home.tools.subtitle')}
          </Text>
        </Box>

        <VStack spacing={12}>
          {renderTechGroup(t('home.tools.programmingLanguages'), programmingLanguages)}
          {renderTechGroup(t('home.tools.frameworks'), frameworks)}
          {renderTechGroup(t('home.tools.toolsPlatforms'), tools)}
        </VStack>
      </Container>
    </Box>
  );
};

export default ToolsSection;
