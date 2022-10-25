import { Button, ButtonProps, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface IProp extends ButtonProps {
  children: React.ReactNode;
}

export default function CustomButton({ children, ...props }: IProp) {
  const [hover, setHover] = React.useState(false);
  return (
    <Button
      _active={{}}
      _focus={{}}
      fontFamily={`'Open Sans', sans-serif`}
      borderRadius="0"
      bgColor={"background"}
      borderColor="cyan"
      borderWidth={"1px"}
      p={{ base: "20px 40px", md: "20px 60px" }}
      borderStyle="solid"
      fontSize={"14px"}
      lineHeight="14px"
      color={"cyan"}
      letterSpacing="0.04em"
      position={"relative"}
      overflow="hidden"
      cursor={"pointer"}
      _hover={{}}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      as={motion.div}
      animate={hover ? { color: "#1d1d1d" } : { color: "cyan" }}
      {...props}
    >
      <Text zIndex={"10"}>{children}</Text>
      <Flex
        w="120%"
        h="100%"
        bgColor={"cyan"}
        position="absolute"
        transform={"skew(40deg)"}
        left={hover ? "-10%" : "-130%"}
        transition={"all 0.3s ease-in-out"}
      />
    </Button>
  );
}
