import { Flex, Text } from "@chakra-ui/react";
import BgTag from "../components/BgTag";
import FooterHTML from "../components/FooterHTML";
import HeadTag from "../components/HeadTag";
import Home from "../components/Home";
import HtmlTag from "../components/HtmlTag";
import Project from "../components/Project";
import { Hero } from "./Hero";

export default function Dashboard() {
  return (
    <Hero>
      <>
        <Home />
        <DashboardProject />
        <FooterHTML />
      </>
    </Hero>
  );
}

const DashboardProject = () => {
  return (
    <Flex direction="column" position={"relative"}>
      <BgTag text="WORK" />
      <Flex
        direction={"column"}
        p={{ base: "10px 0px", xl: "20px 40px" }}
        w={"100%"}
        zIndex={10}
      >
        <Flex>
          <HeadTag text="My Portfolio" />
        </Flex>
        <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
        <Text
          w={{ base: "80vw", xl: "60vw" }}
          fontSize={{ base: "15px", md: "16px" }}
          color={"white"}
          ml={{ base: "30px", md: "60px" }}
          fontWeight={600}
        >
          A tiny selection of my latest work is displayed here. In relation to
          the complete list. It's only a drop in the bucket.
        </Text>
        <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
      </Flex>
      <Flex direction={"column"} mt="20px" zIndex={10}>
        <HtmlTag tag="<section>" />
        <Project />
        <HtmlTag tag="</section>" />
      </Flex>
    </Flex>
  );
};
