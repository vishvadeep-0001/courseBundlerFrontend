import React, { useState } from "react";
import {
  Container,
  VStack,
  Button,
  Box,
  Heading,
  Input,
  FormLabel,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ECC94B",
  backgroundColor: "white",
};

const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const Register = () => {
  // Redux setup

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const [image, setImage] = useState("");

  const ChangeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Container height={"95vh"}>
      <VStack height={"full"} justifyContent="center" spacing={"16"}>
        <Heading children={"Registrtion"} textTransform={"uppercase"} />
        <form style={{ width: "100%" }}>
          <Box my={"4"} display={"flex"} justifyContent={"center"}>
            <Avatar size={"2xl"} src={imagePrev} />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="name" children="Enter Your Name" />
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
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="password" children="Enter Your Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={"password"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/**"
              required
              id="chooseAvatar"
              type={"file"}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={ChangeImageHandler}
            />
          </Box>

          <Button my="4" colorScheme="yellow" type="submit">
            SignUp{" "}
          </Button>
          <Box my={"4"}>
            Already Signed Up?
            <Link to="/login">
              <Button colorScheme="yellow" variant={"link"}>
                Login
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
