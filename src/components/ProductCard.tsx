import { useState, useMemo } from 'react';
import { Box, Button, Checkbox, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity: 1,
        selectedOptions,
      },
    });
  };

  const totalPrice = useMemo(() => {
    const optionsPrice = selectedOptions.reduce((acc, option) => {
      const opt = product.additionalOptions?.find(o => o.name === option);
      return acc + (opt?.price || 0);
    }, 0);
    return product.basePrice + optionsPrice;
  }, [product, selectedOptions]);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg="white"
      shadow="lg"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
    >
      <VStack align="stretch" spacing={4}>
        <Heading size="md">{product.name}</Heading>
        <Text color="gray.600">{product.description}</Text>
        
        <Stack spacing={2}>
          <Text fontWeight="bold">Chain Type: {product.chainType}</Text>
          <Text fontWeight="bold">Consensus: {product.consensusType}</Text>
        </Stack>

        {product.additionalOptions && (
          <Box>
            <Text fontWeight="bold" mb={2}>Additional Options:</Text>
            <Stack>
              {product.additionalOptions.map((option) => (
                <Checkbox
                  key={option.name}
                  isChecked={selectedOptions.includes(option.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedOptions([...selectedOptions, option.name]);
                    } else {
                      setSelectedOptions(selectedOptions.filter(o => o !== option.name));
                    }
                  }}
                >
                  {option.name} (+${option.price})
                </Checkbox>
              ))}
            </Stack>
          </Box>
        )}

        <Stack direction="row" justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold" color="brand.500">
            ${totalPrice.toLocaleString()}
          </Text>
          <Button colorScheme="brand" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
}