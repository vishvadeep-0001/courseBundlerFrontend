import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fileUploadCss } from "../Auth/Register";

const Profile = () => {
  const user = {
    name: "vishvadeep",
    email: "vishvadeep.0001@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "user",
    subscription: {
      status: undefined,
    },
    playlist: [
      {
        course: "sasdsa",
        poster:
          "https://cdn.pixabay.com/photo/2023/10/23/08/17/asian-giant-hornet-8335577_1280.jpg",
      },
    ],
  };

  const removeFromPlaylistHandler = () => {
    console.log("playlist remove");
  };

  const ChangeImageSubmitHandler = (e, image)=>{
    e.preventDefault();
    console.log(image)
  }

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
      <Heading m={"8"} children="Profile" textTransform={"uppercase"} />
      <Stack
        justifyContent={"flex-start"}
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={"8"}
      >
        <VStack>
          <Avatar boxSize={"48"} />
          <Button colorScheme="yellow" variant={"ghost"} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children={"Name"} fontWeight={"bold"} />
            <Text children={user.name} />
          </HStack>

          <HStack>
            <Text children={"Email"} fontWeight={"bold"} />
            <Text children={user.email} />
          </HStack>

          <HStack>
            <Text children={"CreatedAt"} fontWeight={"bold"} />
            <Text children={user.createdAt.split("T")[0]} />
          </HStack>

          {user.role !== "admin" && (
            <HStack>
              <Text children={"Subscription"} fontWeight={"bold"} />
              {user.subscription.status === "active" ? (
                <Button color={"yellow.500"} variant={"unstyled"}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>

            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={"md"} my={"8"} />
      {user.playlist.length > 0 && (
        <Stack
          flexWrap={"wrap"}
          p={"4"}
          direction={["column", "row"]}
          alignItems={"center"}
        >
          {user.playlist.map((element) => (
            <VStack w={"48"} key={element.course}>
              <Image
                boxSize={"full"}
                objectFit="contain"
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={"ghost"} colorScheme={"yellow"}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox isOpen={isOpen} onClose={onClose} ChangeImageSubmitHandler={ChangeImageSubmitHandler}/>
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, ChangeImageSubmitHandler }) {

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = ()=>{
    onClose();
    setImagePrev("");
    setImage("")
  }

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e)=> ChangeImageSubmitHandler(e, image)}>
              <VStack spacing={"8"}>
                {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                <Input
                  onChange={changeImage}
                  type="file"
                  css={{ "&::file-selector-button": fileUploadCss }}
                />
                <Button w={"full"} type="submit" colorScheme={"yellow"}>
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={"3"} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
