import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { useHeroContext } from "../pages/Hero/utils/context";

export default function Sidebar() {
  const { Menu, socialMedia, onThinkingOpen } = useHeroContext();
  const history = useHistory();
  return (
    <>
      <Flex
        minW="130px"
        maxW="130px"
        bgColor={"#181818"}
        height="100vh"
        position="fixed"
        direction={"column"}
        h="100vh"
        pb={"10px"}
        zIndex={100}
      >
        <Flex
          w={"100%"}
          justifyContent="center"
          p="20px 0"
          bgColor={"black"}
          direction="column"
          cursor={"pointer"}
          onClick={() => {
            history.push("/");
          }}
          alignItems="center"
        >
          <Flex>
            <Image src="/Logo.png" width={"60px"} height="72px" />
          </Flex>
          <Text
            fontSize={"27px"}
            margin="1px 0 0"
            fontFamily={`'Rubik', sans-serif;`}
            fontWeight="600"
          >
            Nikhil
          </Text>
          <Text color={"#a5a5a5"} margin="10px 0 0" fontSize={"12px"}>
            Web Developer
          </Text>
        </Flex>

        <Flex
          w={"100%"}
          h="100%"
          direction={"column"}
          justifyContent="center"
          gap={"10vh"}
        >
          <Flex
            w="100%"
            justifyContent="center"
            color={"#909096"}
            borderY={"1px solid #282828"}
            direction={"column"}
          >
            {Menu.map((row: { title: string; path: string }, id: any) => {
              return (
                <Flex
                  justifyContent={"center"}
                  w="100%"
                  fontSize="16px"
                  lineHeight={"16px"}
                  py={"15px"}
                  borderBottom={"1px solid #282828"}
                  fontWeight="500"
                  color={row.title == "Blog" ? "cyan" : "inherit"}
                  transition="all 0.2s"
                  cursor={"pointer"}
                  _hover={{
                    color: "cyan",
                    transition: "all 0.4s",
                  }}
                  key={id}
                  onClick={() => {
                    if (window.location.pathname != row.path) {
                      onThinkingOpen();
                      setTimeout(() => {
                        history.push(row.path);
                      }, 1000);
                    }
                  }}
                >
                  <Text>{row.title}</Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex w="100%" justifyContent={"center"}>
            {socialMedia.map(
              (row: { img: React.Component; onClick: () => void }, id: any) => {
                const Logo: any = row.img;
                return (
                  <Flex
                    p="20px 7px"
                    color={"#909096"}
                    fontSize="18px"
                    onClick={row.onClick}
                    transition="all 0.2s"
                    cursor={"pointer"}
                    _hover={{
                      color: "cyan",
                      transition: "all 0.4s",
                    }}
                    key={id}
                  >
                    <Logo />
                  </Flex>
                );
              }
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex minW="130px" maxW="130px" />
    </>
  );
}
