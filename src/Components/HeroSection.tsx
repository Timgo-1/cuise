import { Box, Button, Text, Heading, Container } from "@chakra-ui/react";
import BgImg from "../Resources/hero.jpg";

const HeroSection = () => {
  const imagePth = "." + BgImg;

  return (
    <Box
      as="section"
      //   backgroundImage={BgImg}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`linear-gradient(to bottom, darkslategray, transparent), url(${imagePth})`}
    >
      <Container maxW="xl" textAlign="center">
        <Heading
          mb={4}
          color="lightblue"
          fontSize={{ base: "md", md: "2xl", lg: "4xl" }}
        >
          TASTE AND COMFORT
        </Heading>
        <Heading
          textTransform="uppercase"
          color="darkseagreen"
          mb={6}
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
        >
          Tasty & Healthy
        </Heading>
        <Text
          color="turquoise"
          mb={8}
          fontSize={{ base: "base", md: "md", lg: "xl" }}
        >
          You can’t live a full life on an empty stomach. Refuel your tank here!
          Some like it hot, some like it cold, some like it in the pot sizzling hot!
          We've got it All!!!
        </Text>
        <Button colorScheme="green">View Our Menu</Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
