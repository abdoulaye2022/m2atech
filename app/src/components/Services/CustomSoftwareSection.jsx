"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaCogs, FaDatabase, FaCloud, FaShieldAlt, FaSync, FaChartBar } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const CustomSoftwareSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaCogs,
      title: t('servicesPage.customSoftware.features.tailoredSolutions.title'),
      description: t('servicesPage.customSoftware.features.tailoredSolutions.description')
    },
    {
      icon: FaDatabase,
      title: t('servicesPage.customSoftware.features.dataManagement.title'),
      description: t('servicesPage.customSoftware.features.dataManagement.description')
    },
    {
      icon: FaCloud,
      title: t('servicesPage.customSoftware.features.cloudIntegration.title'),
      description: t('servicesPage.customSoftware.features.cloudIntegration.description')
    },
    {
      icon: FaShieldAlt,
      title: t('servicesPage.customSoftware.features.enterpriseSecurity.title'),
      description: t('servicesPage.customSoftware.features.enterpriseSecurity.description')
    },
    {
      icon: FaSync,
      title: t('servicesPage.customSoftware.features.systemIntegration.title'),
      description: t('servicesPage.customSoftware.features.systemIntegration.description')
    },
    {
      icon: FaChartBar,
      title: t('servicesPage.customSoftware.features.businessIntelligence.title'),
      description: t('servicesPage.customSoftware.features.businessIntelligence.description')
    }
  ];

  return (
    <Box py={16} bg="white" id="custom-software">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('servicesPage.customSoftware.title')}{" "}
          <Box as="span" color="#DD6B20">
            {t('servicesPage.customSoftware.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              {t('servicesPage.customSoftware.heading')} <Box as="span" color="#DD6B20">{t('servicesPage.customSoftware.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={8}>
              {t('servicesPage.customSoftware.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaCogs} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.customSoftware.bullets.processAutomation')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaDatabase} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.customSoftware.bullets.customCRM')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaCloud} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.customSoftware.bullets.cloudNative')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.customSoftware.bullets.complianceReady')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} bg="orange.50" p={8} borderRadius="2xl" boxShadow="inner">
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
              >
                <Icon as={FaCogs} w={12} h={12} color="#DD6B20" mb={4} />
                <Text fontWeight="bold" mb={2} textAlign="center">{t('servicesPage.customSoftware.preview')}</Text>
                <Text textAlign="center" color="gray.500">{t('servicesPage.customSoftware.previewDescription')}</Text>
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
                borderColor: 'orange.200'
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

export default CustomSoftwareSection;
