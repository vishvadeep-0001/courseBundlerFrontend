import React from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";

const LinkButton = ({ url = "/", title = "Home", onClose }) => (
  <Link to={url} onClick={onClose}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;

  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    console.log("Logout Successfully");
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme={"yellow"}
        width="12"
        zIndex={"overlay"}
        height={"12"}
        rounded={"full"}
        position={"fixed"}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onclose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses "
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button colorScheme={"yellow"} variant={"ghost"}>
                            Profile
                          </Button>
                        </Link>
                        <Button
                          colorScheme={"yellow"}
                          variant={"ghost"}
                          onClick={logoutHandler}
                        >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={"purple"} variant={"ghost"}>
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={"yellow"}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme={"yellow"}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
