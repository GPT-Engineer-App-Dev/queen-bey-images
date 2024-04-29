import { Box, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Text fontSize="6xl" fontWeight="bold" color="brand.800">Beyoncé</Text>
      <Text fontSize="2xl" color="brand.700">Singer, Songwriter, Actress</Text>
      <SimpleGrid columns={3} spacing={5}>
        <Image src="/images/beyonce1.jpg" alt="Beyoncé performing" boxSize="300px" />
        <Image src="/images/beyonce2.jpg" alt="Beyoncé on red carpet" boxSize="300px" />
        <Image src="/images/beyonce3.jpg" alt="Beyoncé in a music video" boxSize="300px" />
        <Image src="/images/beyonce4.jpg" alt="Beyoncé at an award ceremony" boxSize="300px" />
        <Image src="/images/beyonce5.jpg" alt="Beyoncé in studio" boxSize="300px" />
      </SimpleGrid>
      <Box d="flex" alignItems="center" justifyContent="space-between" w="full" pt={5}>
        <FaInstagram size="2em" />
        <FaTwitter size="2em" />
        <FaFacebookF size="2em" />
      </Box>
    </VStack>
  );
};

export default Index;