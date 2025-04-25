"use client";

import { Box, Container, Heading, Text, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";

function PrivacyPolicy() {
  return (
    <Box py={16} bg="white">
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" mb={8} color="gray.800">
          Privacy <Box as="span" color="#DD6B20">Policy</Box>
        </Heading>
        
        <Text fontSize="lg" mb={8} color="gray.600">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            1. Introduction
          </Heading>
          <Text mb={4} color="gray.600">
            M2ATech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Web Application Development</ListItem>
            <ListItem>Mobile Application Development</ListItem>
            <ListItem>Custom Software Solutions</ListItem>
            <ListItem>Search Engine Optimization (SEO) Services</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            2. Information We Collect
          </Heading>
          <Text mb={4} color="gray.600">
            We may collect personal information that you voluntarily provide to us when you:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Request information about our services</ListItem>
            <ListItem>Submit a contact form</ListItem>
            <ListItem>Subscribe to our newsletter</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            3. How We Use Your Information
          </Heading>
          <Text mb={4} color="gray.600">
            We use the information we collect to:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Provide and maintain our services</ListItem>
            <ListItem>Respond to your inquiries</ListItem>
            <ListItem>Improve our website and services</ListItem>
            <ListItem>Send periodic emails about our services</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            4. Cookies and Tracking Technologies
          </Heading>
          <Text mb={4} color="gray.600">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            5. Data Security
          </Heading>
          <Text mb={4} color="gray.600">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </Text>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            6. Your Data Protection Rights
          </Heading>
          <Text mb={4} color="gray.600">
            Depending on your location, you may have rights including:
          </Text>
          <UnorderedList mb={4} color="gray.600" pl={6}>
            <ListItem>Access to your personal data</ListItem>
            <ListItem>Correction of inaccurate data</ListItem>
            <ListItem>Deletion of your data</ListItem>
            <ListItem>Objection to processing</ListItem>
          </UnorderedList>
        </Box>

        <Box mb={12}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            7. Changes to This Policy
          </Heading>
          <Text mb={4} color="gray.600">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
            8. Contact Us
          </Heading>
          <Text mb={4} color="gray.600">
            If you have questions about this Privacy Policy, please contact us at:
          </Text>
          <Text color="gray.600">
            Email: <Link href="mailto:contact@m2atech.com" color="#DD6B20">contact@m2atech.com</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;