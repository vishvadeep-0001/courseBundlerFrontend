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
} from "@chakra-ui/react";
import cursor from "../../../assets/images/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";

const Users = () => {
  const users = [
    {
      _id: "23123123",
      name: "yogesh",
      role: "Admin",
      subscription: {
        status: "active",
      },
      email: "ys892369@gmail.com",
    },
  ];

  const updateHandler = (userId) => {
    console.log(userId);
  };
  const deleteButtonHandler = (userId) => {
    console.log(userId);
  };

  return (
    <Grid
      css={{ coursor: `url(${cursor}), default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "16"]} overflowY={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="All Users"
          my={"16"}
          textAlign={["center", "left"]}
        />
        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All Availabel users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  deleteButtonHandler={deleteButtonHandler}
                  updateHandler={updateHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button
            variant={"outline"}
            color={"purple.500"}
            onClick={() => updateHandler(item._id)}
          >
            Change Role
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
