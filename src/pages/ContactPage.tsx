import { Flex, Text } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import HeadTag from "../components/HeadTag";
import HtmlTag from "../components/HtmlTag";
import Map from "../components/Map";

export default function ContactPage() {
  return (
    <Flex direction={"column"} minH="100vh">
      <Flex
        w={"100%"}
        alignItems={{ base: "inherit", md: "center" }}
        direction={{ base: "column", md: "row" }}
        position="relative"
      >
        <Flex w={{ base: "100%", md: "50%" }} direction="column" zIndex={10}>
          <HeaderHTML />
          <Flex direction={"column"} px={{ base: "", md: "40px" }}>
            <HeadTag text="Contact" />
            <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color={"white"}
              ml={{ base: "30px", md: "60px" }}
              fontWeight={600}
              mr="10px"
            >
              I’m interested in any opportunities. However, if you have other
              request or question, don’t hesitate to use the form.
            </Text>
            <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
            <HtmlTag tag="<form>" ml={{ base: "20px", md: "40px" }} />
            <Flex ml={{ base: "30px", md: "60px" }} w={"80%"}>
              <ContactForm />
            </Flex>
            <HtmlTag tag="</form>" ml={{ base: "20px", md: "40px" }} />
          </Flex>
          <FooterHTML />
        </Flex>
        <Flex
          w={{ base: "100%", md: "50%" }}
          height={{ base: "300px", md: "100%" }}
          opacity={0.5}
          p={{ base: "10px 30px", md: "0px 0px" }}
          zIndex={10}
        >
          <Map />
        </Flex>
      </Flex>
    </Flex>
  );
}
