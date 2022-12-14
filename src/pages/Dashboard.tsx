import { Flex, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import BgTag from "../components/BgTag";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import HeadTag from "../components/HeadTag";
import Home from "../components/Home";
import HtmlTag from "../components/HtmlTag";
import Project from "../components/Project";
import Skills from "../components/Skills";
import { useHeroContext } from "./Hero/utils/context";

export default function Dashboard() {
  const { blogs } = useHeroContext();
  console.log(blogs);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NG | Frontend Developer</title>
      </Helmet>
      <Flex direction={"column"}>
        <Home />
        <DashboardProject />
        <Skills />
        <Blog />
        <Contact/>
      </Flex>
    </>
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
          w={{ base: "90vw", sm: "80vw", xl: "60vw" }}
          fontSize={{ base: "15px", md: "16px" }}
          color={"white"}
          ml={{ base: "30px", md: "60px" }}
          fontWeight={600}
        >
          I’ve been working in the industry for more than a year, and I’ve seen
          some pretty amazing things. But the most important thing is that I’ve
          been able to do what I love every day. <br />A selection of my latest
          <span style={{ color: "#08FDD8" }}> work</span> is displayed here.
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
