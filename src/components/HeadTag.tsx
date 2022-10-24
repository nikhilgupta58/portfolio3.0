import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import HtmlTag from "./HtmlTag";

export default function HeadTag({ text }: { text: string }) {
  const title = text.split("");
  const [textHoverId, setTextHoverId] = React.useState(-1);
  const [offsetTop, setOffsetTop] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setOffsetTop(window.pageYOffset);
    });
  }, []);

  const ref = useRef<any>(null);

  React.useEffect(() => {
    if (ref?.current && window) {
      if (offsetTop > ref?.current?.offsetTop - window.innerHeight + 100) {
        setAnimate(true);
      }
    }
  }, [ref, ref?.current, window.pageYOffset]);

  return (
    <Flex direction="column" ref={ref}>
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
        flexWrap="wrap"
      >
        {title.map((row, id) => {
          if (row == " ") {
            return (
              <Text
                key={id}
                mx={{
                  base: "4px",
                  xs: "4px",
                  sm: "5px",
                  md: "6px",
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
                  : animate
                  ? {
                      opacity: 1,
                      transform: ["scale(1)", "scale(1.5)", "scale(1)"],
                      transition: {
                        delay: 0.1 * id,
                        type: "ease-in",
                        duration: 0.2,
                      },
                    }
                  : {}
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
