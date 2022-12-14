import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function HeaderHTML() {
  return (
    <Flex
      w="100%"
      p={{ base: "10px 0px", xl: "20px 40px" }}
      justifyContent={"space-between"}
      direction="column"
      color={"#515A5A"}
      fontFamily={`'Caveat', cursive;`}
      fontSize={{
        base: "20px",
        xs: "22px",
        sm: "23px",
        md: "24px",
        lg: "25px",
        xl: "25px",
      }}
    >
      <Flex direction={"column"}>
        <Text>{"<html>"}</Text>
        <Text ml={{ base: "10px", md: "20px" }}>{"<body>"}</Text>
      </Flex>
    </Flex>
  );
}
