import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function MenuBarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <img
          className="logo"
          src="https://i.imgur.com/IqJpOEs.png"
          alt=""
          width="35px"
        />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <img
              src="https://i.imgur.com/uK9Tb8D.jpg
            "
              alt=""
            />
            <img
              src="https://i.imgur.com/jMRaMUB.png
            "
              alt=""
            />
            <img
              src="https://i.imgur.com/uK9Tb8D.jpg
            "
              alt=""
            />
            <img
              src="https://i.imgur.com/jMRaMUB.png
            "
              alt=""
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
