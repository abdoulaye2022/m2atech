import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ServiceBanner = ({ 
  title, 
  description,
  bgColor = '#F7F8F9',
  textColor = 'gray.800'
}) => {
  return (
    <Box 
      bg={bgColor}
      p={6}
      borderRadius="md"
      mb={6}
      textAlign="center"  // Added to center all content
    >
      <Heading 
        as="h3" 
        size="md" 
        mb={2} 
        color={textColor}
        fontWeight="semibold"
      >
        {title}
      </Heading>
      {description && (
        <Text color={textColor} fontSize="sm" opacity={0.9}>
          {description}
        </Text>
      )}
    </Box>
  );
};

export default ServiceBanner;