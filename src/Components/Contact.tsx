import {
  Box,
  FormLabel,
  Container,
  FormControl,
  Input,
  Heading,
  Textarea,
  Button,
} from "@chakra-ui/react";
import BgImg from "../Resources/contactbg.png";

const Contact = () => {
  const imagePth = "." + BgImg;
  return (
    <Box
      py={24}
      backgroundImage={`linear-gradient(to bottom, darkslategray, transparent), url(${imagePth})`}
    >
      <Container
        color="gold"
        maxW="container.md"
        backgroundColor="darkslateblue"
        p={{ base: 10, md: 16 }}
        borderRadius={4}
        position="relative"
        zIndex={1}
      >
        <Heading
          textAlign="center"
          color="lightcyan"
          mb={12}
          fontSize={{ base: 16, md: 24 }}
        >
          Contact Us For More Inquiries!!!
        </Heading>
        <FormControl>
          <FormLabel htmlFor="email">Email Address:</FormLabel>
          <Input
            placeholder="abc@email.com"
            id="email"
            type="email"
            mb={8}
            borderColor="pink"
            focusBorderColor="hotpink"
            _hover={{
              borderColor: "none",
            }}
          />
          <FormLabel htmlFor="email">Message:</FormLabel>
          <Textarea
            placeholder="Enter your message here..."
            resize="none"
            borderColor="pink"
            focusBorderColor="deeppink"
            _hover={{
              borderColor: "none",
            }}
          />
          <Box mt={12} textAlign="right">
            <Button colorScheme="green">Send Message</Button>
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Contact;
