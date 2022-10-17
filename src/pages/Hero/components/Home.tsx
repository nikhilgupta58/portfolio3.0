import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";

export default function Home() {
  const text = [
    ["H", "i", ";"],
    ["I", "'", "m", " ", "Logo", "i", "k", "h", "i", "l", ","],
    ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"],
  ];
  const [textHoverId, setTextHoverId] = React.useState({ row: -1, col: -1 });
  return (
    <Flex
      w="100%"
      h="100vh"
      direction={"column"}
      justifyContent={"space-between"}
    >
      <Flex
        w="100%"
        h="100%"
        p={{ base: "10px 0px", xl: "20px 40px" }}
        justifyContent={"space-between"}
        direction="column"
        color={"#515A5A"}
        fontFamily={`'Caveat', cursive;`}
        fontSize={{
          base: "20px",
          xs: "22px",
          sm: "23px",
          md: "24px",
          lg: "25px",
          xl: "25px",
        }}
      >
        <Flex direction={"column"}>
          <Text>{"<html>"}</Text>
          <Text ml={{ base: "10px", md: "20px" }}>{"<body>"}</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text ml={{ base: "10px", md: "20px" }}>{"<h1>"}</Text>
          <Flex
            ml={{ base: "30px", md: "60px" }}
            color="white"
            fontWeight={"700"}
            fontSize={{
              base: "30px",
              xs: "40px",
              sm: "50px",
              md: "70px",
              lg: "80px",
              xl: "90px",
            }}
            lineHeight={{
              base: "30px",
              xs: "40px",
              sm: "50px",
              md: "70px",
              lg: "80px",
              xl: "90px",
            }}
            fontFamily={`'Rubik', sans-serif;`}
            direction="column"
          >
            {text.map((row, ids) => {
              return (
                <Flex key={ids}>
                  {row.map((col, id) => {
                    if (col == "Logo")
                      return (
                        <Flex
                          alignItems="center"
                          key={id}
                          transform={{
                            base: "translateY(-17px)",
                            sm: "translateY(-20px)",
                            md: "translateY(-15px)",
                          }}
                          mb="0"
                          p="0"
                          m={{
                            base: "3px",
                            xs: "3px",
                            sm: "4px",
                            md: "5px",
                            lg: "5px",
                            xl: "5px",
                          }}
                        >
                          <Image
                            p={"0"}
                            m="0"
                            src="letterN.png"
                            width={{
                              base: "30px",
                              xs: "33px",
                              sm: "40px",
                              md: "45px",
                              lg: "53px",
                              xl: "63px",
                            }}
                            height={{
                              base: "40px",
                              xs: "50px",
                              sm: "60px",
                              md: "70px",
                              lg: "80px",
                              xl: "90px",
                            }}
                          />
                        </Flex>
                      );
                    if (col == " ")
                      return (
                        <Text
                          key={id}
                          mx={{
                            base: "5px",
                            xs: "6px",
                            sm: "7px",
                            md: "10px",
                            lg: "14px",
                            xl: "15px",
                          }}
                        />
                      );
                    return (
                      <Text
                        m="0"
                        p="0"
                        key={id}
                        transform={
                          ids == 2
                            ? {
                                base: "translateY(-15px)",
                                md: "translateY(-10px)",
                              }
                            : {}
                        }
                        onMouseOver={() => {
                          setTextHoverId({ row: ids, col: id });
                        }}
                        onMouseOut={() => {
                          setTextHoverId({ row: -1, col: -1 });
                        }}
                        transition="all 0.2s linear"
                        as={motion.div}
                        _hover={{
                          color: "cyan",
                          transition: "color 0.4s",
                        }}
                        animate={
                          textHoverId.row == ids && textHoverId.col == id
                            ? {
                                transformOrigin: "center bottom",
                                transform: "translateY(-10px)",
                                transition:{
                                  duration:0.1
                                }
                              }
                            : {}
                        }
                      >
                        {col}
                      </Text>
                    );
                  })}
                </Flex>
              );
            })}
          </Flex>
          <Text ml={{ base: "10px", md: "20px" }}>{"</h1>"}</Text>
          <Text ml={{ base: "20px", md: "40px" }}>{"<p>"}</Text>
          <Text
            ml={{ base: "30px", md: "60px" }}
            color="#7B7D7D"
            fontSize={{
              base: "12px",
              xs: "14px",
              sm: "16px",
              md: "18px",
            }}
            letterSpacing={"0.1em"}
            fontFamily={`'Rubik', sans-serif;`}
          >
            {"Front End Developer / Web Developer"}
          </Text>
          <Text ml={{ base: "20px", md: "40px" }}>{"</p>"}</Text>
          <Button
            ml={{ base: "30px", md: "60px" }}
            color="#7B7D7D"
            fontSize={"18px"}
            letterSpacing={"0.1em"}
            fontFamily={`'Rubik', sans-serif;`}
            w="200px"
            mt={"30px"}
          >
            Contact Me
          </Button>
        </Flex>
        <Flex />
      </Flex>
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
