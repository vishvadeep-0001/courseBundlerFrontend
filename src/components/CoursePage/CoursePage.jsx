import React from "react";
import introVideo from "../../assets/videos/intro.mp4";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: "dsadasdsa",
      description: "dsadsadsadsa",
      title: "sample",
      video: {
        url: "sadsadsa",
      },
    },
    {
      _id: "dsadasddsadsa",
      description: "dsadsadsadsa",
      title: "sample-1",
      video: {
        url: "sadsadsa",
      },
    },
    {
      _id: "dsadasddsadsa",
      description: "dsadsadsadsa",
      title: "sample-2",
      video: {
        url: "sadsadsa",
      },
    },
    {
      _id: "dsadasddsadsa",
      description: "dsadsadsadsa",
      title: "sample-3",
      video: {
        url: "sadsadsa",
      },
    },
    {
      _id: "dsadasddsadsa",
      description: "dsadsadsadsa",
      title: "sample-4",
      video: {
        url: "sadsadsa",
      },
    },
  ];
  return (
    <Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          width={"100%"}
          controls
          src={introVideo}
          muted
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
        ></video>
        <Heading
          m={"4"}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={"4"} children="Description" />

        <Text m={"4"} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setLectureNumber(index)}
            style={{
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              margin: "0",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text noOfLines={"1"}>
              #{index + 1} {item.title} 
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
