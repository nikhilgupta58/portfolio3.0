import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import { useHeroContext } from "../pages/Hero/utils/context";

export default function Thinking() {
  const { isThinkingOpen, onThinkingClose, onThinkingOpen } = useHeroContext();
  const [initialLoad, setInitialLoad] = React.useState(false);
  const [backToFront, setBackToFront] = React.useState(false);

  const history = useHistory();
  React.useEffect(() => {
    if (window.location.pathname != "/") {
      setInitialLoad(true);
      setTimeout(() => {
        setInitialLoad(false);
        setBackToFront(true);
      }, 2000);
    }
  }, []);
  React.useEffect(() => {
    console.log(history);
  }, []);
  return (
    <Flex
      w={"100%"}
      h="100vh"
      bgColor={"background"}
      position="absolute"
      zIndex={50}
      justifyContent="center"
      alignItems={"center"}
      top={0}
      display={isThinkingOpen || initialLoad ? "inherit" : "none"}
      left={initialLoad ? "0" : "-120%"}
      as={motion.div}
      animate={
        isThinkingOpen
          ? { left: "0", transition: { duration: 0.5 } }
          : initialLoad
          ? {
              left: "220%",
              transition: {
                duration: 0.5,
                delay: 1,
              },
            }
          : backToFront
          ? { left: "-120%", transition: { duration: 0 } }
          : {}
      }
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
            as={motion.div}
            animate={
              initialLoad ? { width: "100%", transition: { duration: 1 } } : {}
            }
            w="0"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
