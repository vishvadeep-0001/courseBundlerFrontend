import {
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import "../Courses/Courses.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Text, Image } from "@chakra-ui/react";


const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={["center", "left"]}
        maxW="200px"
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
        size={"sm"}
      />
      <Text children={description} noOfLines={2} />
      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform={"uppercase"}
          children={"creator"}
        />

        <Text
          fontFamily={"body"}
          textTransform={"uppercase"}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size={"xs"}
        children={`Lectures - ${lectureCount}`}
        textTransform={"uppercase"}
      />
      <Heading
        size={"xs"}
        children={`Views - ${views}`}
        textTransform={"uppercase"}
      />
      <Stack alignItems={"center"} direction={["column", "row"]}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow"> Watch Now</Button>
        </Link>
        <Button variant={"ghost"} colorScheme="yellow" onClick={()=> addToPlaylistHandler(id)}>Add To Playlist</Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = ()=>{
    console.log("added to playlist")
  }

  const categories = [
    "Web Developement",
    "Artificial Intellegence",
    "Game Developement",
    "Android Developement",
    "Ethical Hacking",
    "UI & UX",
  ];

  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"} alignItems={"center"}>
      <Heading children="All Courses" m={"8"} />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a courses...."
        type={"text"}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={"auto"}
        paddingY="8"
        // css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {categories.map((item, index) => (
          <Button minW={"60"} onClick={() => setCategory(item)} key={index}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title={"Card-1"}
          description={"desc"}
          views={23}
          imageSrc={"https://cdn.pixabay.com/photo/2023/10/17/03/23/child-8320341_1280.png"}
          id={434}
          creator={"Yogesh Sharma"}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
