import { Input, InputProps, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function CustomInput({ ...props }: InputProps) {
  const [focus, setFocus] = React.useState(false);
  return (
    <Flex w={"100%"} direction="column">
      <Input
        borderRadius={0}
        w={"100%"}
        bg="#2b2b2b"
        color={"#8d8d8d"}
        _placeholder={{ color: "#8d8d8d" }}
        border="none"
        p="0 20px"
        autoComplete={"off"}
        h={"50px"}
        _focus={{}}
        _active={{}}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
      <Flex
        bgColor="cyan"
        as={motion.div}
        w="0"
        h="2px"
        animate={
          focus
            ? { width: "100%", transition: { duration: 0.5 } }
            : { width: "0%", transition: { duration: 0.3 } }
        }
      />
    </Flex>
  );
}
