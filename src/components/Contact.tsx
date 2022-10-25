import { Flex, Text } from "@chakra-ui/react";
import FooterHTML from "./FooterHTML";
import HeadTag from "./HeadTag";
import HtmlTag from "./HtmlTag";
import Map from "./Map";

export default function Contact() {
  return (
    <Flex
      w={"100%"}
      height={{ md: "100vh" }}
      mt={"100px"}
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "self-start", md: "center" }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        direction="column"
        p={{ base: "10px 0px", xl: "20px 40px" }}
      >
        <HeadTag text="Contact" />
        <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
        <Text
          fontSize={{ base: "15px", md: "16px" }}
          color={"white"}
          ml={{ base: "30px", md: "60px" }}
          fontWeight={600}
          mr="10px"
        >
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </Text>
        <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
        <Flex display={{ base: "none", md: "inherit" }}>
          <FooterHTML p="0" />
        </Flex>
      </Flex>
      <Flex
        w={{ base: "100%", md: "50%" }}
        height={{ base: "300px", md: "100%" }}
        opacity={0.5}
        p={{ base: "10px 30px", md: "0px 0px" }}
      >
        <Map />
      </Flex>
      <Flex display={{ base: "inherit", md: "none" }}>
        <FooterHTML p="0" />
      </Flex>
    </Flex>
  );
}
