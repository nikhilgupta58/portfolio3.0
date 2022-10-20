import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import HtmlTag from "./HtmlTag";

export default function HeadTag({
  text,
  animate = true,
}: {
  text: string;
  animate?: boolean;
}) {
  const title = text.split("");
  const [textHoverId, setTextHoverId] = React.useState(-1);

  return (
    <Flex direction="column">
      <HtmlTag tag={"<h2>"} ml={{ base: "20px", md: "40px" }} />
      <Flex
        ml={{ base: "30px", md: "60px" }}
        fontWeight={"700"}
        fontSize={{
          base: "28px",
          xs: "32px",
          sm: "40px",
          md: "58px",
          lg: "65px",
          xl: "73px",
        }}
        lineHeight={{
          base: "28px",
          xs: "32px",
          sm: "40px",
          md: "58px",
          lg: "65px",
          xl: "73px",
        }}
        fontFamily={`'Rubik', sans-serif;`}
      >
        {title.map((row, id) => {
          if (row == " ") {
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
          }
          return (
            <Text
              key={id}
              m="0"
              p="0"
              onMouseOver={() => {
                setTextHoverId(id);
              }}
              onMouseOut={() => {
                setTextHoverId(id);
              }}
              color="cyan"
              transition="all 0.2s linear"
              as={motion.div}
              opacity="0"
              animate={
                textHoverId == id
                  ? {
                      transformOrigin: "center bottom",
                      transform: [
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
                      transform: ["scale(1)", "scale(1.5)", "scale(1)"],
                      transition: {
                        delay: 0.1 * id,
                        type: "ease-in",
                        duration: 0.2,
                      },
                    }
              }
            >
              {row}
            </Text>
          );
        })}
      </Flex>
      <HtmlTag tag={"</h2>"} ml={{ base: "20px", md: "40px" }} />
    </Flex>
  );
}
