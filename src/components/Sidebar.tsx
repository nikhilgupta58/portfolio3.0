import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Sidebar() {
  return (
    <Flex w="130px" bgColor={"#181818"} position="sticky" direction={"column"}>
      <Flex
        w={"100%"}
        justifyContent="center"
        p="20px 0"
        bgColor={"black"}
        direction="column"
        alignItems="center"
      >
        <Flex>
          <Image src="/Logo.png" width={"60px"} height="72px" />
        </Flex>
        <Text
          fontSize={"27px"}
          margin="1px 0 0"
          fontFamily={`'Rubik', sans-serif;`}
          fontWeight="400"
        >
          Nikhil
        </Text>
        <Text color={"#a5a5a5"} margin="10px 0 0" fontSize={"12px"}>
          Web Developer
        </Text>
      </Flex>
    </Flex>
  );
}
