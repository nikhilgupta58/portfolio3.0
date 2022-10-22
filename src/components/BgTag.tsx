import { Flex } from "@chakra-ui/react";
import React from "react";

export default function BgTag({ text }: { text: string }) {
  return (
    <Flex
      position={"absolute"}
      fontSize={{
        base: "150px",
        xs: "220px",
        sm: "270px",
        md: "350px",
        lg: "400px",
      }}
      fontWeight={"700"}
      right={{ base: "-100px", sm: "-150px", md: "-200px" }}
      top={0}
      lineHeight={{
        base: "200px",
        xs: "250px",
        sm: "300px",
        md: "350px",
        lg: "400px",
      }}
      color="#272726"
      zIndex={1}
      opacity="0.5"
    >
      {text}
    </Flex>
  );
}
