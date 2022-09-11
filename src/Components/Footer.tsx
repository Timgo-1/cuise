import { Box, Text } from "@chakra-ui/react";
import BgImg from "../Resources/footerbg.svg";

const Footer = () => {
  const imagePth = "." + BgImg;
  return (
    <Box
      as="section"
      color="cyan"
      fontSize="lg"
      pt={40}
      pb={12}
      textAlign="center"
      mt="-11rem"
      clipPath="polygon(0 45%, 100% 0, 100% 100%, 0% 100%)"
      backgroundImage={`linear-gradient(to bottom, darkslategray, transparent), url(${imagePth})`}
    >
      <Text>©2022 Cuise, All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
