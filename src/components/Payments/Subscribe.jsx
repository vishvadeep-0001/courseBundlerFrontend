import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Subscribe = () => {
  return (
    <Container h={"90vh"} p={"16"}>
      <Heading children="Welcome" my={"8"} textAlign={"center"} />
      <VStack
        boxShadow={"lg"}
        alignItems={"stretch"}
        borderRadius={"lg"}
        spacing={"0"}
      >
        <Box bg={"yellow.400"} p={"4"} css={{ borderRadius: "8px 8px 0 0" }}>
          <Text children={`Pro Pack - $10.00`} color={"black"} />
        </Box>

        <Box p={"4"}>
          <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
            <Text
              children={`Join Pro Pack and get access to all content`}
              color={"black"}
            />
            <Heading children={`$10 Only`} />
          </VStack>
          <Button my={"8"} w={"full"} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p={"4"} css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading
            size={"sm"}
            children={"100% refund at cancellation"}
            color={"white"}
            textTransform={"uppercase"}
          />
          <Text
            fontSize={"xs"}
            color={"white"}
            children={"Terms and condition Apply"}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
