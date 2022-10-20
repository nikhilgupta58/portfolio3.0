import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function FooterHTML() {
  return (
    <Flex
      w="100%"
      h="100%"
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
        <Text ml={{ base: "10px", md: "20px" }}>{"</body>"}</Text>
        <Text>{"</html>"}</Text>
      </Flex>
    </Flex>
  );
}
