import { Flex } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";
import Blog from "../components/Blog";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import Skills from "../components/Skills";
import { Hero } from "./Hero";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Frontend Developer</title>
      </Helmet>
      <Hero>
        <Flex direction="column">
          <HeaderHTML />
          {/* <Blog /> */}
          <FooterHTML />
        </Flex>
      </Hero>{" "}
    </>
  );
}
