import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import FullNavMenu from "../../components/FullNavMenu";
import { useHeroContext } from "./utils/context";

export default function HeroView() {
  const { onOpen } = useHeroContext();
  return (
    <Flex w={"100vw"} minH="100vh" overflowX={"hidden"}>
      <Flex display={{ base: "none", xl: "inherit" }}>
        <Sidebar />
      </Flex>
      <Flex display={{ base: "inherit", xl: "none" }}>
        <FullNavMenu />
      </Flex>
      <Flex w="100%" h="100%" bgColor="background" direction={"column"}>
        <Flex
          display={{ base: "inherit", xl: "none" }}
          w={"50px"}
          h="50px"
          bgColor={"#000000"}
          opacity="0.8"
          justifyContent="center"
          alignItems={"center"}
          fontSize="30px"
          borderRadius={"4px"}
          cursor="pointer"
          position={"fixed"}
          top="10px"
          right={"10px"}
          onClick={() => onOpen()}
        >
          <GiHamburgerMenu />
        </Flex>
        <Flex w={"100%"}>Body</Flex>
      </Flex>
    </Flex>
  );
}
