import {
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, error} = useSelector((state)=> state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLoginEvent = (e)=>{
    e.preventDefault();
    const userCredentials = {
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result)=> {
      if(result.payload){
        setEmail("");
        setPassword("");
        navigate("/")
      }
    })
  }



  return (
    <Container height={"95vh"}>
      <VStack height={"full"} justifyContent="center" spacing={"16"}>
        <Heading children={"Welcome to CourseBundler"} />
        <form style={{ width: "100%" }}>
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
            <Link to="/forgetpassword">
              <Button fontSize={"sm"} variant={"link"}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my="4" colorScheme="yellow" type="submit">
            {loading?'loading...': "Login"}
          </Button>
          <Box my={"4"}>
            New User ?
            <Link to="/register">
              <Button colorScheme="yellow" variant={"link"}>
                Sign Up
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
