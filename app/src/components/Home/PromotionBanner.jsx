"use client"

import { Box, Container, Flex, Text, Button, Badge, useBreakpointValue } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

const PromotionBanner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { t } = useTranslation();

  return (
    <Box py={{ base: 10, md: 12 }} bg="var(--color-bg-primary)">
      <Container maxW="1280px">
        <Box
          bgGradient="linear(to-r, #ff5d22, #e04d15)"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          color="white"
          boxShadow="0 20px 50px rgba(255, 93, 34, 0.25)"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: -10,
            right: -10,
            width: '180px',
            height: '180px',
            bg: 'rgba(255,255,255,0.12)',
            borderRadius: 'full'
          }}
        >
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={6}>
            <Box maxW={{ md: '70%' }} position="relative" zIndex={1}>
              <Badge
                bg="rgba(255,255,255,0.18)"
                color="white"
                mb={3}
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
                letterSpacing="wide"
              >
                {t('home.promotion.badge')}
              </Badge>

              <Text
                fontSize={{ base: 'xl', md: '3xl' }}
                fontWeight="bold"
                fontFamily="var(--font-display)"
                mb={2}
              >
                {t('home.promotion.title')}
              </Text>

              <Text fontSize={{ base: 'md', md: 'lg' }} opacity={0.95}>
                {t('home.promotion.description')}
              </Text>
            </Box>

            <Link href="/contact" passHref>
              <Button
                rightIcon={<FiArrowRight />}
                bg="white"
                color="#ff5d22"
                mt={{ base: 2, md: 0 }}
                size={isMobile ? 'md' : 'lg'}
                px={8}
                py={7}
                borderRadius="xl"
                fontFamily="var(--font-display)"
                fontWeight="700"
                position="relative"
                zIndex={1}
                _hover={{ transform: 'translateY(-3px)', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
                transition="all 0.3s ease"
              >
                {t('home.promotion.button')}
              </Button>
            </Link>
          </Flex>

          <Box
            position="absolute"
            bottom={-20}
            left={-20}
            width="220px"
            height="220px"
            bg="rgba(255,255,255,0.06)"
            borderRadius="full"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PromotionBanner;
