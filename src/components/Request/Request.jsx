import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  return (
    <Container height={"84vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children={"Request Us"} />

        <form style={{ width: "100%" }}>
          <Box my={"4"}>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              type={"text"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              type={"email"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <Input
              required
              id="message"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Explain the course....."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" colorScheme="yellow" type="submit">
            Send Mail
          </Button>

          <Box my={"4"}>
            See availabel courses !{" "}
            <Link to="/courses">
              <Button colorScheme="yellow" variant={"link"}>
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;
