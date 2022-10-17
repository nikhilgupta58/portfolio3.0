import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Flex></Flex>
      <Flex p={"10px"} w="100%" justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Flex
            fontSize={"13px"}
            fontWeight="600"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            as={motion.div}
            letterSpacing="-0.02em"
            animate={{
              transform: [
                "translateY(0px)",
                "translateY(-15px)",
                "translateY(0px)",
              ],
              transition: {
                duration: 1,
                repeat: Infinity,
                type: "spring",
              },
            }}
          >
            scroll down
          </Flex>
          <Flex color={"gray"} margin="10px 0 0">
            <BiDownArrowAlt />
          </Flex>
        </Flex>
        <Flex direction={"column"}>
          <Flex
            fontSize={"13px"}
            fontWeight="600"
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            as={motion.div}
            letterSpacing="-0.02em"
            animate={{
              transform: [
                "translateY(0px)",
                "translateY(-15px)",
                "translateY(0px)",
              ],
              transition: {
                duration: 1,
                repeat: Infinity,
                type: "spring",
              },
            }}
          >
            scroll down
          </Flex>
          <Flex color={"gray"} margin="10px 0 0">
            <BiDownArrowAlt />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
