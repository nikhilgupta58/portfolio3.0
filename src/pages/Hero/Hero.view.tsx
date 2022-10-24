import { Flex, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiSoundcloud } from "react-icons/si";
import FullNavMenu from "../../components/FullNavMenu";
import Sidebar from "../../components/Sidebar";
import Thinking from "../../components/Thinking";
import { useHeroContext } from "./utils/context";

export default function HeroView() {
  const {
    onOpen,
    playAudio,
    setPlayAudio,
    children,
    isOpen,
    isThinkingOpen,
    initialLoad,
  } = useHeroContext();
  return (
    <Flex w={"100vw"} minH="100vh" overflowX={"hidden"} userSelect="none">
      <Flex display={{ base: "none", xl: "inherit" }}>
        <Sidebar />
      </Flex>
      <Flex display={{ base: "inherit", xl: "none" }}>
        <FullNavMenu />
      </Flex>
      <Flex
        w="100%"
        h="100%"
        bgColor="background"
        direction={"column"}
        position="relative"
      >
        <Thinking />
        <Flex
          w={{ base: "100vw", xl: "calc(100vw - 130px)" }}
          justifyContent="space-between"
          position={"fixed"}
          zIndex={20}
          display={!isThinkingOpen || !initialLoad ? "inherit" : "none"}
        >
          <Flex display={{ base: "none", xl: "inherit" }} />
          <Flex alignSelf="self-start">
            <Flex
              margin="10px"
              p="10px"
              borderRadius={"2px"}
              cursor="pointer"
              onClick={() => {
                setPlayAudio(!playAudio);
              }}
              bgColor={"rgba(0,0,0,0.3)"}
              lineHeight="15px"
              fontSize="15px"
              fontWeight={"600"}
              alignItems={"center"}
            >
              <Flex fontSize={"20px"} color={!playAudio ? "brick" : "cyan"}>
                <SiSoundcloud />
              </Flex>
              <Text mx={"8px"}>Sound</Text>
              <Text w={"30px"} color={!playAudio ? "brick" : "cyan"}>
                {playAudio ? "ON" : "OFF"}
              </Text>
            </Flex>
          </Flex>
          <Flex
            display={{ base: "inherit", xl: "none" }}
            margin="10px"
            w={"50px"}
            h="50px"
            bgColor={"rgba(0,0,0,0.3)"}
            justifyContent="center"
            alignItems={"center"}
            fontSize="40px"
            borderRadius={"4px"}
            cursor="pointer"
            onClick={() => onOpen()}
          >
            <GiHamburgerMenu />
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          direction="column"
          display={!isOpen ? "inherit" : "none"}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
