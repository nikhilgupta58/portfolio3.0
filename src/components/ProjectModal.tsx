import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IProjectProp } from "../utils/type";

export default function ProjectModal({
  data,
  isOpen,
  onClose,
}: {
  data: IProjectProp;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Flex
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      position={"fixed"}
      display={isOpen ? "inherit" : "none"}
    >
      <Flex
        filter={{
          base: "blur(100px)",
          sm: "blur(120px)",
          md: "blur(140px)",
          lg: "blur(160px)",
        }}
        // opacity="0.1"
        bgColor="#1a1a1a"
        zIndex={50}
        w="100%"
        h="100%"
        onClick={() => onClose()}
      />
      <Flex
        zIndex={60}
        position="absolute"
        top="50%"
        left={"50%"}
        transform={"translate(-50%,-50%)"}
        p="5px"
        bgColor={"white"}
        as={motion.div}
        opacity="0"
        maxH={"70vh"}
        // maxWidth={"100vw"}
        overflow="hidden"
        borderRadius={{ base: "5px", sm: "10px", md: "20px" }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      >
        <Image src={data.images[0]} />
      </Flex>
      <Flex
        zIndex={60}
        position="absolute"
        bottom={"0"}
        py="10px"
        bgColor={"cyan"}
        color="black"
        as={motion.div}
        opacity="0"
        minW="100vw"
        maxWidth="600px"
        overflow="hidden"
        borderRadius={{ base: "5px 5px 0 0" }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        onClick={() => window.open(data.link, "_blank")}
        cursor="pointer"
        fontSize={"12px"}
        justifyContent="center"
      >
        <Text textAlign="center" w="60%" noOfLines={1}>
          {data.link}
        </Text>
      </Flex>
    </Flex>
  );
}
