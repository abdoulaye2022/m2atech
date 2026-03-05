"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaRobot, FaBrain, FaCogs, FaComments, FaEye, FaPlug } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const AiSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaComments,
      title: t('servicesPage.ai.features.customChatbots.title'),
      description: t('servicesPage.ai.features.customChatbots.description')
    },
    {
      icon: FaBrain,
      title: t('servicesPage.ai.features.machineLearning.title'),
      description: t('servicesPage.ai.features.machineLearning.description')
    },
    {
      icon: FaCogs,
      title: t('servicesPage.ai.features.processAutomation.title'),
      description: t('servicesPage.ai.features.processAutomation.description')
    },
    {
      icon: FaComments,
      title: t('servicesPage.ai.features.nlp.title'),
      description: t('servicesPage.ai.features.nlp.description')
    },
    {
      icon: FaEye,
      title: t('servicesPage.ai.features.computerVision.title'),
      description: t('servicesPage.ai.features.computerVision.description')
    },
    {
      icon: FaPlug,
      title: t('servicesPage.ai.features.aiIntegration.title'),
      description: t('servicesPage.ai.features.aiIntegration.description')
    }
  ];

  return (
    <Box py={16} bg="var(--color-bg-primary)" id="ai">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="var(--color-text-primary)" fontFamily="var(--font-display)">
          {t('servicesPage.ai.title')}{" "}
          <Box as="span" className="gradient-text">
            {t('servicesPage.ai.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="var(--color-text-primary)" lineHeight="1.2" fontFamily="var(--font-display)">
              {t('servicesPage.ai.heading')} <Box as="span" className="gradient-text">{t('servicesPage.ai.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="var(--color-text-secondary)" mb={8}>
              {t('servicesPage.ai.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRobot} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.ai.bullets.openAI')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaBrain} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.ai.bullets.customModels')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaCogs} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.ai.bullets.dataAnalysis')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaComments} color="#ff5d22" mr={3} />
                <Text color="var(--color-text-primary)">{t('servicesPage.ai.bullets.voiceAssistants')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} borderRadius="2xl" overflow="hidden" position="relative" h="450px">
              <Image
                src="/img/services/ai.png"
                alt={t('servicesPage.ai.preview')}
                fill
                style={{ objectFit: "cover", borderRadius: "1rem" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Box>
          )}
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="0 2px 20px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="var(--color-border)"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                borderColor: "var(--color-border-hover)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)"
              }}
            >
              <Icon as={feature.icon} w={8} h={8} color="#ff5d22" mb={4} />
              <Heading as="h3" size="md" mb={3} color="var(--color-text-primary)" fontFamily="var(--font-display)">
                {feature.title}
              </Heading>
              <Text color="var(--color-text-secondary)">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AiSection;
