import { Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import HeadTag from "../components/HeadTag";
import HtmlTag from "../components/HtmlTag";
import ScrollDown from "../components/ScrollDown";
import { Globle } from "../components/Skills";

export default function AboutPage() {
  const skillBoxRef = useRef<any>(null);

  React.useEffect(() => {
    if (skillBoxRef?.current) {
      const width = skillBoxRef.current.clientWidth;
      const height = skillBoxRef.current.clientHeight;
      const canvas: any = document.getElementById("myCanvas");
      canvas.width = width;
      canvas.height = height;
    }
  }, [skillBoxRef]);
  return (
    <Flex direction={"column"}>
      <HeaderHTML />
      <Flex
        w={"100%"}
        alignItems={{ base: "inherit", md: "center" }}
        direction={{ base: "column", md: "row" }}
        p={{ base: "10px 0px", xl: "20px 40px" }}
        position="relative"
      >
        <Flex direction={"column"} w={{ base: "80%", md: "57%", lg: "50%" }}>
          <HeadTag text="Me, Myself and I" />
          <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            color={"white"}
            ml={{ base: "30px", md: "60px" }}
            fontWeight={600}
          >
            I'm a frontend developer from India. I have a great passion for UI
            effects, animations, and creating intuitive and dynamic user
            experiences.
            <br /> <br />
            A well organized person, a problem solver, an independent employee
            who pays close attention to detail.
            <br />
            <br />
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
            <br />
            <br />
            <span style={{ color: "#08FDD8" }}>Let's make something big.</span>
          </Text>
          <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
        </Flex>
        <Flex
          position="relative"
          w={{ base: "100%", md: "43%", lg: "50%" }}
          h={{ base: "400px", md: "400px", lg: "600px" }}
          ref={skillBoxRef}
        >
          <Globle />
        </Flex>
      </Flex>
      <FooterHTML />
    </Flex>
  );
}
