import { Flex, Text } from "@chakra-ui/react";
import FooterHTML from "../components/FooterHTML";
import Home from "../components/Home";
import Project from "../components/Project";
import { Hero } from "./Hero";

export default function Dashboard() {
  return (
    <Hero>
      <>
        <Home />
        <Project />
        <FooterHTML />
      </>
    </Hero>
  );
}
