import { Box, Button, Container, Flex, HStack, Heading, Link } from '@chakra-ui/react';
import { Code2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Cart from './Cart';

export default function Navbar() {
  return (
    <Box as="nav" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="sticky">
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          <RouterLink to="/">
            <HStack spacing={2}>
              <Code2 size={24} className="text-brand-500" />
              <Heading size="md">NLG ARTS</Heading>
            </HStack>
          </RouterLink>

          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Link as={RouterLink} to="/products">Products</Link>
          </HStack>

          <HStack spacing={4}>
            <Cart />
            <Button colorScheme="brand" size="md">
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}