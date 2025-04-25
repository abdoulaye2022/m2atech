"use client";

import { Box, Container, Heading, Text, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";

function CookiePolicy() {
  return (
    <Box py={16} bg="white">
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={8} color="gray.800">
          Cookie <Box as="span" color="#DD6B20">Policy</Box>
        </Heading>
        
        <Text fontSize="lg" mb={8} color="gray.600">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            1. What Are Cookies
          </Heading>
          <Text mb={4} color="gray.600">
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
          </Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            2. How We Use Cookies
          </Heading>
          <Text mb={4} color="gray.600">
            We use cookies for various purposes including:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Essential cookies to enable core functionality</ListItem>
            <ListItem>Analytics cookies to understand how visitors interact with our website</ListItem>
            <ListItem>Preference cookies to remember your settings</ListItem>
            <ListItem>Marketing cookies to track effectiveness of campaigns</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            3. Types of Cookies We Use
          </Heading>
          <Text mb={4} color="gray.600">
            Our website uses the following types of cookies:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</ListItem>
            <ListItem><strong>Persistent cookies:</strong> Remain on your device for a set period</ListItem>
            <ListItem><strong>First-party cookies:</strong> Set by our website</ListItem>
            <ListItem><strong>Third-party cookies:</strong> Set by services we use (e.g., Google Analytics)</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            4. Managing Cookies
          </Heading>
          <Text mb={4} color="gray.600">
            You can control and/or delete cookies as you wish. Most web browsers allow some control of cookies through browser settings. You can:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Delete all cookies from your device</ListItem>
            <ListItem>Block all cookies</ListItem>
            <ListItem>Set preferences for certain websites</ListItem>
          </UnorderedList>
          <Text color="gray.600">
            For more information, visit <Link href="https://www.aboutcookies.org" color="#DD6B20" isExternal>aboutcookies.org</Link>.
          </Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            5. Changes to This Policy
          </Heading>
          <Text mb={4} color="gray.600">
            We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            6. Contact Us
          </Heading>
          <Text mb={4} color="gray.600">
            If you have any questions about our use of cookies, please contact us at:
          </Text>
          <Text color="gray.600">
            Email: <Link href="mailto:contact@m2atech.com" color="#DD6B20">contact@m2atech.com</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default CookiePolicy;