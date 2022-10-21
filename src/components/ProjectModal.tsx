import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { IProjectProp } from "../utils/type";
import {
  IoCaretBackCircleSharp,
  IoCaretForwardCircleSharp,
} from "react-icons/io5";

export default function ProjectModal({
  data,
  isOpen,
  onClose,
}: {
  data: IProjectProp;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [image, setImage] = React.useState(0);
  const length = data?.images.length;
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
        maxW="500px"
      >
        <Image src={data.images[image]} fallbackSrc="/loading.png" />
        {length != 1 && (
          <Flex
            gridGap={{ base: "2px", sm: "4px", md: "6px", lg: "8px" }}
            pos="absolute"
            fontSize={{ base: "20px", sm: "30px", md: "35px", lg: "40px" }}
            color="brick"
            bottom={{ base: "2px", sm: "4px", md: "6px", lg: "8px" }}
            right={{ base: "2px", sm: "4px", md: "6px", lg: "8px" }}
          >
            <Flex
              cursor={"pointer"}
              onClick={() => {
                if (image == 0) {
                  setImage(length - 1);
                } else {
                  setImage(image - 1);
                }
              }}
            >
              <IoCaretBackCircleSharp />
            </Flex>
            <Flex
              cursor={"pointer"}
              onClick={() => {
                if (image == length - 1) {
                  setImage(0);
                } else {
                  setImage(image + 1);
                }
              }}
            >
              <IoCaretForwardCircleSharp />
            </Flex>
          </Flex>
        )}
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
