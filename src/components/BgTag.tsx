import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface IProp extends FlexProps {
  text: string;
}

export default function BgTag({ text, ...props }: IProp) {
  return (
    <Flex
      position={"absolute"}
      fontSize={{
        base: "100px",
        xs: "150px",
        sm: "200px",
        md: "300px",
        lg: "400px",
      }}
      fontWeight={"700"}
      right={{ base: "-10px", sm: "-50px", md: "-200px" }}
      top={{ base: "20px", sm: "10px", md: "5px", lg: "0px" }}
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
      {...props}
    >
      {text}
    </Flex>
  );
}
