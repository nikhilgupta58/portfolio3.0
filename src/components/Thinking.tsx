import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHeroContext } from "../pages/Hero/utils/context";

export default function Thinking() {
  const { isThinkingOpen, onThinkingClose, onThinkingOpen } = useHeroContext();
  React.useEffect(() => {
    console.log(isThinkingOpen);
  }, [isThinkingOpen]);
  return (
    <Flex
      w={"100%"}
      h="100vh"
      bgColor={"background"}
      position="absolute"
      zIndex={100}
      justifyContent="center"
      alignItems={"center"}
      top={0}
      display={isThinkingOpen ? "inherit" : "none"}
      left={0}
    >
      <Flex direction={"column"}>
        <Flex justifyContent={"center"}>
          <Image
            src="/Logo.png"
            width={{ base: "40px", md: "60px" }}
            height={{ base: "50px", md: "72px" }}
          />
        </Flex>
        <Text
          textAlign={"center"}
          fontSize={"12px"}
          margin="1px 0 0"
          fontFamily={`'Rubik', sans-serif;`}
          fontWeight="600"
        >
          Nikhil
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"8px"}
          margin="2px 0 0"
          color={"#909096"}
          letterSpacing={"0.3em"}
          fontFamily={`'Rubik', sans-serif;`}
          fontWeight="600"
        >
          Nikhil is thinking
        </Text>
        <Flex
          mt={"20px"}
          height={"2px"}
          bgColor="#909096"
          w={{ base: "200px", md: "300px", lg: "400px" }}
          borderRadius="5px"
        >
          <Flex
            bg={
              "linear-gradient(90deg, rgba(8,253,216,1) 3%, rgba(253,33,85,1) 96%)"
            }
            w="100%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
