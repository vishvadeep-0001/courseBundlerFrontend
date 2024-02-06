import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaInvision } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"10vh"} w={"100%"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width={"full"}>
          <Heading children="All Rights Reserved" color={"white"} />
          <Heading
            children="@Vishvadeep"
            color={"yellow.400"}
            fontFamily={"body"}
            size={"sm"}
          />
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent={"center"}
          color={"white"}
          fontSize={"50"}
        >
          <Link to="https://github.com/vishvadeep-0001" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://github.com/vishvadeep-0001" target="_blank">
            <FaLinkedin />
          </Link>
          <Link to="https://github.com/vishvadeep-0001" target="_blank">
            <FaInvision />
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
