"use client";

import React from 'react';
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
    <Box py={16} bg="white" id="ai">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('servicesPage.ai.title')}{" "}
          <Box as="span" color="#DD6B20">
            {t('servicesPage.ai.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              {t('servicesPage.ai.heading')} <Box as="span" color="#DD6B20">{t('servicesPage.ai.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={8}>
              {t('servicesPage.ai.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRobot} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.ai.bullets.openAI')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaBrain} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.ai.bullets.customModels')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaCogs} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.ai.bullets.dataAnalysis')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaComments} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.ai.bullets.voiceAssistants')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} bg="purple.50" p={8} borderRadius="2xl" boxShadow="inner">
              <Box
                bg="white"
                h="400px"
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={6}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient="linear(to-br, purple.100, blue.50, purple.50)"
                  opacity="0.5"
                />
                <Icon as={FaRobot} w={16} h={16} color="#DD6B20" mb={4} zIndex={1} />
                <Text fontWeight="bold" mb={2} textAlign="center" zIndex={1} fontSize="lg">{t('servicesPage.ai.preview')}</Text>
                <Text textAlign="center" color="gray.500" zIndex={1}>{t('servicesPage.ai.previewDescription')}</Text>
              </Box>
            </Box>
          )}
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={16}>
          {features.map((feature, index) => (
            <Box
              key={index}
              bg="gray.50"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'md',
                borderColor: 'purple.200'
              }}
            >
              <Icon as={feature.icon} w={8} h={8} color="#DD6B20" mb={4} />
              <Heading as="h3" size="md" mb={3} color="gray.800">
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AiSection;
