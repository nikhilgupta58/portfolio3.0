import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import HeadTag from "../components/HeadTag";
import HtmlTag from "../components/HtmlTag";

export default function SkillPage() {
  const skill = [
    {
      title: "Front-end",
      rate: "60%",
      color: "#08FDD8",
    },
    {
      title: "Back-end",
      rate: "30%",
      color: "rgb(210, 108, 213)",
    },
    {
      title: "React Js",
      rate: "50%",
      color: "#FD2155",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skill & Experience | Frontend Developer</title>
      </Helmet>
      <Flex direction={"column"} minH="100vh">
        <HeaderHTML />
        <Flex
          w={"100%"}
          alignItems={{ base: "inherit", md: "center" }}
          direction={{ base: "column", md: "row" }}
          p={{ base: "10px 0px", xl: "20px 40px" }}
          position="relative"
        >
          <Flex direction={"column"} w={{ base: "80%", md: "57%", lg: "50%" }}>
            <HeadTag text="Skill & Experience" />
            <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color={"white"}
              ml={{ base: "30px", md: "60px" }}
              fontWeight={600}
            >
              It's been a year now working remotely as a front-end engineer for
              a startup. Also, I have collaborated with talented people to
              create business and consumer web products.
              <br /> <br />
              Build great, responsive websites that are fast, easy to use, and
              built on best practices. My areas of expertise are front-end
              development, HTML, CSS, JS, REACT building small and medium web
              apps, coding functions, animations and interactive layouts.
              <br />
              <br />
              Visit my <span style={{ color: "#08FDD8" }}>LinkedIn</span>{" "}
              profile for more details or just{" "}
              <span style={{ color: "#08FDD8" }}>contact</span> me.
            </Text>
            <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
          </Flex>
          <Flex
            position="relative"
            w={{ base: "100%", md: "43%", lg: "50%" }}
            h={{ base: "400px", md: "400px", lg: "600px" }}
            justifyContent="center"
            alignItems={{ base: "center" }}
            direction="column"
            mt={{ base: "100px", md: "0" }}
          >
            <Flex direction={"column"} gap="30px" w={"80%"}>
              {skill.map((row, id) => (
                <Flex key={id} direction="column" gap={"10px"}>
                  <Text>{row.title}</Text>
                  <Flex w="100%" h="2px" bg={"#373737"}>
                    <Flex
                      w={0}
                      bg={row.color}
                      as={motion.div}
                      animate={{
                        width: row.rate,
                        transition: { duration: 1, delay: 1.7 },
                      }}
                    />
                  </Flex>
                </Flex>
              ))}
            </Flex>

            <Flex
              p="20px"
              mt={"50px"}
              bg={"#2a2a2a"}
              w="80%"
              direction={"column"}
            >
              <Text m="0 0 20px" fontSize={"25px"} fontWeight={700}>
                Frontend Developer
              </Text>
              <Text m="0 0 10px" fontSize={"16px"} color="#ababab">
                Tartan
                <br />
                <span style={{ fontSize: "12px" }}>2021-Present</span>
              </Text>
              <Text fontSize={"16px"} color="#ababab">
                Batik - A Streamlined and Simplified Employee Benefits
                Marketplace
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <FooterHTML />
      </Flex>
    </>
  );
}
