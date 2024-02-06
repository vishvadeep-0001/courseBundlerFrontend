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

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Container height={"84vh"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
        <Heading children={"Contact Us"} />

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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
            focusBorderColor="yellow.500"
          />
        </Box>

        <Button my="4" colorScheme="yellow" type="submit">
          Send Message
        </Button>


        <Box my={"4"}>
            Request for a couurse?{' '}
            <Link to="/request">
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

export default Contact;
