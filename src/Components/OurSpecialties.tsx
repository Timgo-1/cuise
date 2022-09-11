import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import BgImg from "../Resources/cuisebg.svg";

import Image1 from "../Resources/special__1.png";
import Image2 from "../Resources/special__2.png";
import Image3 from "../Resources/special__3.png";

const OurSpecialties = () => {
  const imagePth = "." + BgImg;
  return (
    <Box
      as="section"
      //   backgroundImage={BgImg}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      height="125vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${imagePth}) `}
    >
    <Container maxW="container.lg" py={24} textAlign="center">
      <Box textAlign="center" maxW="xl" display="inline-block" mb={20}>
        <Text
          mb={2}
          fontSize={{ base: "md", md: "2xl", lg: "4xl" }}
          fontWeight={600}
          color="cyan"
        >
          TASTY & CRUNCHY
        </Text>
        <Heading color="khaki" fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} mb={6}>
          Our Specialties
        </Heading>
        <Text color="mistyrose" fontSize={{ base: "base", md: "md", lg: "xl" }}>
          Cuise is a trusted and reliable long-term local partner 
          and supplier of a wide range of edible commodities to customers throughout 
          the European Union(E.U). We carefully select and audit our Chefs 
          in order to ensure that they can meet the qualitative and quantitative 
          requirements of our customers throughout the year. We provide the best possible 
          meal to our customers which includes a wide range of various intercontinental 
          delicacies amongst others.
        </Text>
      </Box>
      <SimpleGrid columns={[2, null, 3]} spacing={10}>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={40}
            src={Image1}
            objectFit="cover"
          />
        </Box>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={40}
            src={Image2}
            objectFit="cover"
          />
        </Box>
        <Box role="group" overflow="hidden">
          <Image
            transition=".4s"
            _hover={{
              transformOrigin: "center center",
              transform: "scale(1.1)",
            }}
            borderRadius={40}
            src={Image3}
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Container>
    </Box>
  );
};

export default OurSpecialties;
