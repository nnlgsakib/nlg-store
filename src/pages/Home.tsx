import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  HStack,
  Stack,
  useColorModeValue,
  useToken,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

export default function Home() {
  // We'll convert theme color tokens into real CSS values for our gradient
  const [brand400, brand500, brand600] = useToken('colors', [
    'brand.400',
    'brand.500',
    'brand.600',
  ]);

  // Dynamically create our gradient based on light or dark mode
  const heroBg = useColorModeValue(
    `linear-gradient(to right, ${brand400}, ${brand500})`,
    `linear-gradient(to right, ${brand500}, ${brand600})`
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient={heroBg}
        color="white"
        py={{ base: 20, md: 32 }}
        position="relative"
        overflow="hidden"
      >
        {/* Optional subtle background image overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgImage="url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
          opacity={0.3}
          zIndex={0}
        />
        <Container maxW="7xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading
                size="2xl"
                lineHeight="shorter"
                textShadow="0 2px 5px rgba(0,0,0,0.3)"
              >
                Powering the Future of Web3
              </Heading>
              <Text
                fontSize="xl"
                maxW="lg"
                color={useColorModeValue('brand.50', 'brand.100')}
                textShadow="0 1px 2px rgba(0,0,0,0.3)"
              >
                We specialize in crafting custom blockchains, smart contracts, 
                and dApps to help businesses unlock the potential of decentralized technology.
              </Text>
              <HStack spacing={4}>
                <Button
                  as="a"
                  href="https://www.nlgarts.com/products"
                  size="lg"
                  colorScheme="accent"
                  variant="outline"
                >
                  check products
                </Button>
              </HStack>
            </VStack>
            <Box
              display={{ base: 'none', md: 'block' }}
              transform="rotate(2deg)"
              overflow="hidden"
              borderRadius="2xl"
              boxShadow="2xl"
            >
              <Image
                src="https://i.pinimg.com/originals/a4/15/54/a415545bb9a81e35d09b2fc184e2e801.gif"
                alt="Blockchain Illustration"
                objectFit="cover"
                maxH="500px"
                w="100%"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box 
        py={16}
        bg={useColorModeValue('brand.50', 'dark.200')}
      >
        <Container maxW="7xl">
          <VStack spacing={12} align="center">
            <Heading size="xl" textAlign="center">
              Our Services
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('dark.300', 'brand.50')}
              maxW="3xl"
              textAlign="center"
            >
              Take your Web3 projects to the next level with our specialized services. 
              We offer comprehensive solutions for every stage of your blockchain journey.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" pt={8}>
              <Stack
                p={8}
                shadow="lg"
                borderRadius="lg"
                bg={useColorModeValue('white', 'dark.300')}
                align="flex-start"
                spacing={4}
              >
                <Heading size="md">Custom Blockchains</Heading>
                <Text fontSize="md">
                  Design and deploy your own tailored blockchain networks optimized for 
                  security, speed, and scalability.
                </Text>
              </Stack>
              <Stack
                p={8}
                shadow="lg"
                borderRadius="lg"
                bg={useColorModeValue('white', 'dark.300')}
                align="flex-start"
                spacing={4}
              >
                <Heading size="md">Smart Contracts</Heading>
                <Text fontSize="md">
                  Develop and audit robust smart contracts that power your Web3 projects 
                  with trust and transparency.
                </Text>
              </Stack>
              <Stack
                p={8}
                shadow="lg"
                borderRadius="lg"
                bg={useColorModeValue('white', 'dark.300')}
                align="flex-start"
                spacing={4}
              >
                <Heading size="md">Decentralized Apps</Heading>
                <Text fontSize="md">
                  Build fully-featured dApps on Ethereum, Binance Smart Chain, or other 
                  platforms to engage users globally.
                </Text>
              </Stack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        py={16} 
        bg={useColorModeValue('white', 'dark.300')}
      >
        <Container maxW="7xl">
          <VStack spacing={8} align="center">
            <Heading size="xl">What Our Clients Say</Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('dark.300', 'brand.50')}
              maxW="3xl"
              textAlign="center"
            >
              We pride ourselves on delivering top-notch blockchain solutions that 
              exceed expectations. Here’s what some of our clients have to say.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={8}>
              {/* Testimonial 1 */}
              <Stack
                p={8}
                shadow="lg"
                borderRadius="lg"
                bg={useColorModeValue('brand.50', 'dark.200')}
                spacing={4}
              >
                <Text fontSize="md">
                  "Their custom blockchain service revolutionized our supply chain management. 
                  We’ve experienced unparalleled transparency and efficiency."
                </Text>
                <Box fontWeight="bold">— John D., Supply Chain Manager</Box>
              </Stack>
              {/* Testimonial 2 */}
              <Stack
                p={8}
                shadow="lg"
                borderRadius="lg"
                bg={useColorModeValue('brand.50', 'dark.200')}
                spacing={4}
              >
                <Text fontSize="md">
                  "The team delivered an incredible dApp that boosted user engagement by 200%. 
                  Communication and expertise were top-notch!"
                </Text>
                <Box fontWeight="bold">— Sarah K., Tech Startup Founder</Box>
              </Stack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={16}
        bg={useColorModeValue('brand.50', 'dark.200')}
        textAlign="center"
      >
        <Container maxW="7xl">
          <VStack spacing={6}>
            <Heading size="lg">
              Ready to Build Your Next Blockchain Project?
            </Heading>
            <Text 
              fontSize="md" 
              maxW="2xl" 
              mx="auto"
              color={useColorModeValue('dark.300', 'brand.50')}
            >
              Let’s work together to bring your ideas to life. Contact us to discuss 
              your requirements or explore our store for ready-made solutions.
            </Text>
            
            {/* UPDATED CONTACT MENU */}
            <HStack spacing={4}>
              <Menu>
                <MenuButton as={Button} size="lg" colorScheme="brand">
                  Contact Us
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as="a"
                    href="mailto:nlgsakib@gmail.com"
                  >
                    Contact via Email
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="https://t.me/NLG_verse"
                    target="_blank"
                  >
                    Contact via Telegram
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button
                as="a"
                href="/products"
                size="lg"
                variant="outline"
                colorScheme="brand"
              >
                Visit Store
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
