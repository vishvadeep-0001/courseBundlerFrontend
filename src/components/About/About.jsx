import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/intro.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from "../../assets/docs/termsAndCondition";

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={"md"}
      children="Terms & Conditions"
      textAlign={["center", "left"]}
      my={"4"}
    />
    <Box h={"sm"} p={"4"} overflowY={"scroll"}>
      <Text
        textAlign={["center", "left"]}
        letterSpacing={"widest"}
        fontFamily={"heading"}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={"4"}
        size={"xs"}
        children="Refund only applicable for cancellation within 7 days"
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
      <Heading children={"About Us"} textAlign={["center", "left"]} />
      <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
        <VStack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/98748499?v=4"
            boxSize={["40", "48"]}
          />
          <Text children="Co-Founder" opacity={"0.7"} />
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
          <Heading children="Vishvadeep" size={["md", "xl"]} />
          <Text
            children={
              "Hi, I am Frontend Developer. Our mission is to provide quality and satisfaction to the clients at reasonable price."
            }
          />
        </VStack>
      </Stack>

      <Stack m={"8"} direction={["column", "row"]} alignItems={"center"}>
        <Text fontFamily={"cursive"} m={"8"} textAlign={["center", "left"]}>
          We are a video streaming platform with some premium courses availabel
          only for premium users.
        </Text>
        <Link>
          <Button colorScheme="yellow">Checkout our plans</Button>
        </Link>
      </Stack>

      <Box>
        <video
          muted
          src={introVideo}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
        ></video>
      </Box>

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my={"4"} p={"4"}>
        <RiSecurePaymentFill />
        <Heading
          children={"Payment is secured by Razorpay"}
          size={"xs"}
          fontFamily={"sans-serif"}
          textTransform={"uppercase"}
        />
      </HStack>
    </Container>
  );
};

export default About;
