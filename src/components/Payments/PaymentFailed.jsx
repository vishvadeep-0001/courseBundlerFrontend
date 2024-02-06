import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";


const PaymentFailed = () => {
  return (
    <Container h={"90vh"} p={"16"}>
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
        <RiErrorWarningFill size={"5rem"}/>
      <Heading 
      textTransform={"uppercase"}
      my={"8"} 
      textAlign={"center"} 
      children="Payment Failed" 
      />
        <Link to="/subscribe">
          <Button variant={"ghost"}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFailed;
