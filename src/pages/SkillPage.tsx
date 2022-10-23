import { Flex } from "@chakra-ui/react";
import React from "react";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import Skills from "../components/Skills";
import { Hero } from "./Hero";

export default function SkillPage() {
  return (
    <Hero>
      <Flex direction="column">
        <HeaderHTML />
        <Skills />
        <FooterHTML />
      </Flex>
    </Hero>
  );
}
