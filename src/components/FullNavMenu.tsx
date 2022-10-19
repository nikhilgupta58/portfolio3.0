import { CloseIcon } from "@chakra-ui/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { useHeroContext } from "../pages/Hero/utils/context";

export default function FullNavMenu() {
  const { isOpen, onClose, socialMedia, Menu } = useHeroContext();
  const [closeClick, setCloseClick] = React.useState(false);

  React.useEffect(() => {
    if (closeClick == true) {
      setTimeout(() => {
        onClose();
        setCloseClick(false);
      }, 200);
    }
  }, [closeClick]);

  return (
    <Flex
      width={"100vw"}
      zIndex={100}
      minHeight="100vh"
      position={"absolute"}
      overflowY="scroll"
      overflowX={"hidden"}
      top="0"
      left={"0"}
      bgColor="#181818"
      display={isOpen ? "inherit" : "none"}
      direction="column"
      justifyContent={"space-between"}
      as={motion.div}
      opacity="0"
      animate={
        closeClick
          ? { opacity: 0, transition: { duration: 0.2 } }
          : isOpen
          ? { opacity: 1, transition: { duration: 0.2 } }
          : {}
      }
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
            onClick={() => setCloseClick(true)}
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
      <Flex
        w="100%"
        justifyContent="center"
        color={"#909096"}
        borderY={"1px solid #282828"}
        direction={"column"}
      >
        {Menu.map((row: { title: string }, id: any) => {
          return (
            <Flex
              justifyContent={"center"}
              w="100%"
              fontSize="16px"
              lineHeight={"16px"}
              py={"20px"}
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
            >
              <Text>{row.title}</Text>
            </Flex>
          );
        })}
      </Flex>
      <Flex w={"100%"}>
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
  );
}
