import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const ServiceBanner = ({
  title,
  description,
  bgColor = 'var(--color-bg-secondary)',
  textColor = 'var(--color-text-primary)'
}) => {
  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="md"
      mb={6}
      textAlign="center"
      border="1px solid"
      borderColor="var(--color-border)"
    >
      <Heading
        as="h3"
        size="md"
        mb={2}
        color={textColor}
        fontWeight="semibold"
        fontFamily="var(--font-display)"
      >
        {title}
      </Heading>
      {description && (
        <Text color="var(--color-text-secondary)" fontSize="sm" opacity={0.9}>
          {description}
        </Text>
      )}
    </Box>
  );
};

export default ServiceBanner;
