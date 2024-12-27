import { Box, Heading, Text, VStack, Icon, Button } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <Box
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
    >
      <VStack spacing={4} align="start">
        <Icon as={icon} boxSize={10} color="brand.500" />
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Text fontSize="2xl" fontWeight="bold" color="brand.500">
          {price}
        </Text>
        <Button
          rightIcon={<ArrowRight size={16} />}
          colorScheme="brand"
          variant="outline"
          size="lg"
          width="full"
        >
          Learn More
        </Button>
      </VStack>
    </Box>
  );
}