import { Box, Container, SimpleGrid, VStack, Heading, Text } from '@chakra-ui/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <Box py={20}>
      <Container maxW="7xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Blockchain Solutions</Heading>
            <Text color="gray.600" maxW="2xl" fontSize="lg">
              Choose from our range of custom blockchain solutions
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}