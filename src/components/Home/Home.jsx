import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import "../Home/Home.css";
import vg from "../../assets/images/bg.png";
import { CgGoogle, CgAdidas } from "react-icons/cg";
import { SiCoursera, SiAccenture } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from "../../assets/videos/intro.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justify-content={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack width={"full"} alignItems={["center", "flex-end"]} spacing="8">
            <Heading children="Learn from our experts" size={"2xl"} />
            <Text textAlign={["center", "left"]} children={"Find valueable content at reasonable price"} />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg}
            objectFit={"contain"}
          />
        </Stack>
      </div>
      <Box padding={"8"} bg="blackAlpha.800">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"yellow.400"}
          children="Our Brands"
        />
        <HStack
          className="brands-banner"
          justifyContent={"space-evenly"}
          margin="4"
        >
          <CgGoogle />
          <CgAdidas />
          <SiAccenture />
          <SiCoursera />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          src={introVideo}
          muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
        ></video>
      </div>
    </section>
  );
};

export default Home;
