import {
  Box,
  Image,
  Text,
  Heading,
  Container,
  Grid,
  Button,
  GridItem,
} from "@chakra-ui/react";

import { MdOutlineArrowForward } from "react-icons/md";
import image from "../Resources/customer-1.png";

const OurHappyUser = () => {
  return (
    <Box bg="conic-gradient(at 0% 30%, indigo 10%, goldenrod 30%, darkolivegreen 50%)" py={12}>
      <Container maxW="container.lg">
        <Box textAlign="center" mb={10}>
          <Box textAlign="center" maxW="xl" display="inline-block" mb={20}>
            <Text
              mb={0}
              fontSize={{ base: "md", md: "2xl", lg: "4xl" }}
              fontWeight={600}
              color="cornflowerblue"
            >
              LEARN
            </Text>
            <Heading fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }} mb={6} color="springgreen">
              Our Basic Concepts
            </Heading>
            <Text
              color="thistle"
              fontSize={{ base: "base", md: "md", lg: "xl" }}
            >
              Food for us comes from our relatives, whether they have wings or fins or roots. 
              That is how we consider food. Food has a culture. It has a history. It has a story. 
              It has relationships. Food is symbolic of love when words are inadequate.
              “Let food be thy medicine and medicine be thy food.”
            </Text>
          </Box>
        </Box>
        <Grid templateColumns={{ md: "1fr", lg: "min-content 1fr" }} gap={16}>
          <GridItem
            role="group"
            overflow="hidden"
            width={{ lg: "22rem" }}
            height="28rem"
            backgroundColor="cyan"
            borderRadius={4}
          >
            <Image
              boxSize="100%"
              transition=".4s"
              _hover={{
                transformOrigin: "center bottom",
                transform: "scale(1.1)",
              }}
              src={image}
              objectPosition="top"
              objectFit="cover"
              borderRadius={24}
            />
          </GridItem>
          <GridItem>
            <Heading color="papayawhip">MD TALIANA MARCEAU</Heading>
            <Text fontSize="md" fontWeight={600} mt={2} mb={6}>
              <Box as="span" color="aquamarine">
                Location:
              </Box>
              <Box as="span" color="aqua"> France</Box>
            </Text>
            <Text mb={10} color="lavender">
              Bordeaux native Taliana Marceau is the founder of Cuise, the France-based 
              purpose-driven hospitality group, with branches spread across the entire European 
              Union(E.U). Taliana knew her purpose was to be in the kitchen from an early age. 
              Growing up on her family’s farm in the Southwest, farm-to-table eating wasn’t a trend, 
              it was a way of life—eating with the seasons, canning and preserving fresh-picked fruits 
              and vegetables, fresh pies on the counter, never letting anything go to waste. Her 
              grandmother always welcomed guests to her kitchen with love and taught Taliana that 
              cooking is more than just putting a few ingredients together—it’s a PASSION.
            </Text>
            <Box textAlign="right">
              <Button
                color="midnightblue"
                rightIcon={<MdOutlineArrowForward />}
                variant="outline"
                mr={4}
              >
                Know Me
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurHappyUser;
