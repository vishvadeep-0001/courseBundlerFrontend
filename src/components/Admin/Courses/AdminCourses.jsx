import React from "react";
import Sidebar from "../Sidebar";
import {
  Box,
  Grid,
  Table,
  TableContainer,
  Heading,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import cursor from "../../../assets/images/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModal from "./CourseModal";

const AdminCourses = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const courses = [
    {
      _id: "23123424343123",
      title: "React Course",
      category: "Web Development",
      poster: {
        url: "https://cdn.pixabay.com/photo/2023/10/17/03/23/child-8320341_1280.png",
      },
      createdBy: "Yogesh",
      views: 123,
      numOfVideos: 12,
    },
  ];

  const courseDetailsHandler = (userId) => {
    onOpen();
  };
  const deleteButtonHandler = (userId) => {
    console.log(userId);
  };
  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };
  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault(); 
    console.log();
  };

  return (
    <Grid
      css={{ coursor: `url(${cursor}), default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "8"]} overflowY={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="All Courses"
          my={"16"}
          textAlign={["center", "left"]}
        />
        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All Availabel courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  deleteButtonHandler={deleteButtonHandler}
                  courseDetailsHandler={courseDetailsHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {/* // Modal */}
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id="sadsadsadsad"
          courseTitle="React Course"
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <img src={item.poster.url} alt="" />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={"uppercase"}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td>{item.views}</Td>
      <Td>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"purple.500"}
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lectures
          </Button>
          <Button
            color={"purple.600"}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
        {item.action}
      </Td>
    </Tr>
  );
}
