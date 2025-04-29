"use client"

import { Box, Flex, Text, Button, Badge, useBreakpointValue } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const PromotionBanner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box 
      bgGradient="linear(to-r, blue.500, purple.600)"
      borderRadius="lg"
      p={6}
      color="white"
      boxShadow="xl"
      mb={10}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: -10,
        right: -10,
        width: '150px',
        height: '150px',
        bg: 'rgba(255,255,255,0.1)',
        borderRadius: 'full'
      }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Box maxW={{ md: '70%' }}>
          <Badge 
            colorScheme="yellow" 
            mb={3}
            fontSize="sm"
            px={3}
            py={1}
            borderRadius="full"
          >
            NEW LAUNCH
          </Badge>
          
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>
            🎉 2025 Launch Special!
          </Text>
          
          <Text fontSize={{ base: 'md', md: 'lg' }} opacity={0.9}>
            Get 30% OFF all services until March 31, 2025
          </Text>
        </Box>
        
        <Button
          rightIcon={<FiArrowRight />}
          colorScheme="whiteAlpha"
          variant="solid"
          mt={{ base: 4, md: 0 }}
          size={isMobile ? 'md' : 'lg'}
          _hover={{ transform: 'scale(1.05)' }}
          transition="all 0.2s"
        >
          View Offers
        </Button>
      </Flex>
      
      <Box
        position="absolute"
        bottom={-20}
        left={-20}
        width="200px"
        height="200px"
        bg="rgba(255,255,255,0.05)"
        borderRadius="full"
      />
    </Box>
  );
};

export default PromotionBanner;