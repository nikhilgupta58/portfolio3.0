import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import { useHeroContext } from "../pages/Hero/utils/context";

export default function FullNavMenu() {
  const { isOpen, onClose } = useHeroContext();
  return (
    <Flex
      width={"100vw"}
      height="100vh"
      position={"fixed"}
      top="0"
      left={"0"}
      bgColor="background"
      display={isOpen ? "inherit" : "none"}
      direction="column"
    >
      <Flex w={"100%"} bgColor={"#000000"} direction="column" pb={"20px"}>
        <Flex
          w={"100%"}
          justifyContent="space-between"
          p={"10px 10px 0px 10px"}
          bgColor={"#000000"}
        >
          <Flex />
          <Flex
            w={"50px"}
            h="50px"
            justifyContent="center"
            alignItems={"center"}
            fontSize="30px"
            borderRadius={"4px"}
            cursor="pointer"
            onClick={() => onClose()}
          >
            <CloseIcon />
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          justifyContent="center"
          bgColor={"black"}
          direction="column"
          alignItems="center"
        >
          <Flex>
            <Image src="/Logo.png" width={"50px"} height="60px" />
          </Flex>
          <Text
            fontSize={"27px"}
            margin="1px 0 0"
            fontFamily={`'Rubik', sans-serif;`}
            fontWeight="600"
          >
            Nikhil
          </Text>
          <Text color={"#a5a5a5"} margin="10px 0 0" fontSize={"10px"}>
            Web Developer
          </Text>
        </Flex>
      </Flex>
      <Flex />
    </Flex>
  );
}
