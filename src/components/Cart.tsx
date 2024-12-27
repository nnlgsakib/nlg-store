import { useMemo } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = useCart();

  const total = useMemo(() => {
    return state.items.reduce((acc, item) => {
      const baseTotal = item.basePrice * item.quantity;
      const optionsTotal = item.selectedOptions.reduce((optAcc, option) => {
        const opt = item.additionalOptions?.find(o => o.name === option);
        return optAcc + ((opt?.price || 0) * item.quantity);
      }, 0);
      return acc + baseTotal + optionsTotal;
    }, 0);
  }, [state.items]);

  return (
    <>
      <Button
        leftIcon={<ShoppingCart />}
        colorScheme="brand"
        variant="ghost"
        onClick={onOpen}
      >
        Cart ({state.items.length})
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              {state.items.map((item) => (
                <Box
                  key={item.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  position="relative"
                >
                  <Stack spacing={2}>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text fontSize="sm" color="gray.600">
                      Quantity: {item.quantity}
                    </Text>
                    {item.selectedOptions.length > 0 && (
                      <Text fontSize="sm">
                        Options: {item.selectedOptions.join(', ')}
                      </Text>
                    )}
                    <Text fontWeight="bold" color="brand.500">
                      ${(item.basePrice * item.quantity).toLocaleString()}
                    </Text>
                  </Stack>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    position="absolute"
                    top={2}
                    right={2}
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    Remove
                  </Button>
                </Box>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Stack spacing={4} width="full">
              <Stack direction="row" justify="space-between">
                <Text fontSize="lg" fontWeight="bold">
                  Total:
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="brand.500">
                  ${total.toLocaleString()}
                </Text>
              </Stack>
              <Button colorScheme="brand" size="lg" width="full">
                Checkout
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}