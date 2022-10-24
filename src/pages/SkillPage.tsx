import { Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import { Hero } from "./Hero";

export default function SkillPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skill & Experience | Frontend Developer</title>
      </Helmet>
      <Hero>
        <Flex direction="column">
          <HeaderHTML />
          {/* <Skills /> */}
          <FooterHTML />
        </Flex>
      </Hero>
    </>
  );
}
