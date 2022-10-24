import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useHeroContext } from "../pages/Hero/utils/context";
import CustomButton from "./CustomButton";
import ScrollDown from "./ScrollDown";

export default function Home() {
  const text = [
    ["H", "i", ";"],
    ["I", "'", "m", " ", "Logo", "i", "k", "h", "i", "l", ","],
    ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r"],
  ];
  const [textHoverId, setTextHoverId] = React.useState({ row: -1, col: -1 });
  let count = 0;
  const history = useHistory();
  const { onThinkingOpen } = useHeroContext();
  return (
    <Flex
      w="100%"
      minH="100vh"
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
          <Text ml={{ base: "20px", md: "40px" }}>{"<h1>"}</Text>
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
                    count += 1;
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
                          as={motion.div}
                          opacity="0"
                          animate={{
                            opacity: 1,
                            transition: {
                              delay: 0.1 * count,
                              type: "ease-in",
                              duration: 0.2,
                            },
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
                        opacity="0"
                        animate={
                          textHoverId.row == ids && textHoverId.col == id
                            ? {
                                transformOrigin: "center bottom",
                                transform:
                                  ids == 2
                                    ? [
                                        "translateY(-15px)",
                                        "translateY(-35px)",
                                        "translateY(-15px)",
                                      ]
                                    : [
                                        "translateY(0px)",
                                        "translateY(-20px)",
                                        "translateY(0px)",
                                      ],
                                opacity: 1,
                                transition: {
                                  duration: 0.1,
                                },
                              }
                            : {
                                opacity: 1,
                                transition: {
                                  delay: 0.1 * count,
                                  type: "ease-in",
                                  duration: 0.2,
                                },
                              }
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
          <Text ml={{ base: "20px", md: "40px" }}>{"</h1>"}</Text>
          <Flex
            direction={"column"}
            as={motion.div}
            opacity="0"
            animate={{
              opacity: 1,
              transform: ["translateY(20px)", "translateY(0px)"],
              transition: {
                delay: 2,
              },
            }}
          >
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
          </Flex>
          <Flex
            as={motion.div}
            opacity="0"
            animate={{
              opacity: 1,
              transform: ["translateY(20px)", "translateY(0px)"],
              transition: {
                delay: 2.5,
              },
            }}
          >
            <CustomButton
              ml={{ base: "30px", md: "60px" }}
              mt={"30px"}
              onClick={(e) => {
                onThinkingOpen();
                setTimeout(() => {
                  history.push("/contact");
                }, 1000);
              }}
            >
              Contact me!
            </CustomButton>
          </Flex>
        </Flex>
        <Flex />
      </Flex>
      <ScrollDown />
    </Flex>
  );
}
