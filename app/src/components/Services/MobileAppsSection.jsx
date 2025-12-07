"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaApple, FaAndroid, FaMobile, FaRocket, FaShieldAlt, FaSync, FaCode } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const MobileAppsSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaApple,
      title: t('servicesPage.mobileApps.features.iosExcellence.title'),
      description: t('servicesPage.mobileApps.features.iosExcellence.description')
    },
    {
      icon: FaAndroid,
      title: t('servicesPage.mobileApps.features.androidMastery.title'),
      description: t('servicesPage.mobileApps.features.androidMastery.description')
    },
    {
      icon: FaMobile,
      title: t('servicesPage.mobileApps.features.crossPlatform.title'),
      description: t('servicesPage.mobileApps.features.crossPlatform.description')
    },
    {
      icon: FaCode,
      title: t('servicesPage.mobileApps.features.cleanArchitecture.title'),
      description: t('servicesPage.mobileApps.features.cleanArchitecture.description')
    },
    {
      icon: FaShieldAlt,
      title: t('servicesPage.mobileApps.features.appSecurity.title'),
      description: t('servicesPage.mobileApps.features.appSecurity.description')
    },
    {
      icon: FaSync,
      title: t('servicesPage.mobileApps.features.cicd.title'),
      description: t('servicesPage.mobileApps.features.cicd.description')
    }
  ];

  return (
    <Box py={16} bg="white" id="mobile-apps">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('servicesPage.mobileApps.title')}{" "}
          <Box as="span" color="#DD6B20">
            {t('servicesPage.mobileApps.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              {t('servicesPage.mobileApps.heading')} <Box as="span" color="#DD6B20">{t('servicesPage.mobileApps.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={8}>
              {t('servicesPage.mobileApps.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaRocket} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.mobileApps.bullets.appStore')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.mobileApps.bullets.securityAudits')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaSync} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.mobileApps.bullets.maintenance')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMobile} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.mobileApps.bullets.deviceOptimization')}</Text>
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
                <Flex mb={6}>
                  <Icon as={FaApple} w={10} h={10} color="gray.700" mr={4} />
                  <Icon as={FaAndroid} w={10} h={10} color="green.500" />
                </Flex>
                <Text fontWeight="bold" mb={2} textAlign="center">{t('servicesPage.mobileApps.preview')}</Text>
                <Text textAlign="center" color="gray.500">{t('servicesPage.mobileApps.previewDescription')}</Text>
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

export default MobileAppsSection;
