"use client";

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaShieldAlt, FaUserSecret, FaExclamationTriangle, FaClipboardCheck, FaUserGraduate, FaEye } from 'react-icons/fa';
import { useTranslation } from '@/hooks/useTranslation';

const CybersecuritySection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { t } = useTranslation();

  const features = [
    {
      icon: FaClipboardCheck,
      title: t('servicesPage.cybersecurity.features.securityAudits.title'),
      description: t('servicesPage.cybersecurity.features.securityAudits.description')
    },
    {
      icon: FaUserSecret,
      title: t('servicesPage.cybersecurity.features.penetrationTesting.title'),
      description: t('servicesPage.cybersecurity.features.penetrationTesting.description')
    },
    {
      icon: FaExclamationTriangle,
      title: t('servicesPage.cybersecurity.features.incidentResponse.title'),
      description: t('servicesPage.cybersecurity.features.incidentResponse.description')
    },
    {
      icon: FaClipboardCheck,
      title: t('servicesPage.cybersecurity.features.compliance.title'),
      description: t('servicesPage.cybersecurity.features.compliance.description')
    },
    {
      icon: FaUserGraduate,
      title: t('servicesPage.cybersecurity.features.securityTraining.title'),
      description: t('servicesPage.cybersecurity.features.securityTraining.description')
    },
    {
      icon: FaEye,
      title: t('servicesPage.cybersecurity.features.monitoring.title'),
      description: t('servicesPage.cybersecurity.features.monitoring.description')
    }
  ];

  return (
    <Box py={16} bg="white" id="cybersecurity">
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={16} textAlign="center" color="gray.800">
          {t('servicesPage.cybersecurity.title')}{" "}
          <Box as="span" color="#DD6B20">
            {t('servicesPage.cybersecurity.titleHighlight')}
          </Box>
        </Heading>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={12} align="center">
          <Box flex={1}>
            <Heading as="h2" size="xl" mb={6} color="gray.800" lineHeight="1.2">
              {t('servicesPage.cybersecurity.heading')} <Box as="span" color="#DD6B20">{t('servicesPage.cybersecurity.headingHighlight')}</Box>
            </Heading>

            <Text fontSize="lg" color="gray.600" mb={8}>
              {t('servicesPage.cybersecurity.description')}
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={8}>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.cybersecurity.bullets.vulnerabilityAssessment')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.cybersecurity.bullets.dataEncryption')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.cybersecurity.bullets.accessControl')}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaShieldAlt} color="#DD6B20" mr={3} />
                <Text>{t('servicesPage.cybersecurity.bullets.disasterRecovery')}</Text>
              </Flex>
            </SimpleGrid>
          </Box>

          {isDesktop && (
            <Box flex={1} bg="green.50" p={8} borderRadius="2xl" boxShadow="inner">
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
                  bgGradient="linear(to-br, green.100, teal.50, green.50)"
                  opacity="0.5"
                />
                <Icon as={FaShieldAlt} w={16} h={16} color="#DD6B20" mb={4} zIndex={1} />
                <Text fontWeight="bold" mb={2} textAlign="center" zIndex={1} fontSize="lg">{t('servicesPage.cybersecurity.preview')}</Text>
                <Text textAlign="center" color="gray.500" zIndex={1}>{t('servicesPage.cybersecurity.previewDescription')}</Text>
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
                borderColor: 'green.200'
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

export default CybersecuritySection;
