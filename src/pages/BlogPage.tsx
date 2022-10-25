import { Flex } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import FooterHTML from "../components/FooterHTML";
import HeaderHTML from "../components/HeaderHTML";
import { useHeroContext } from "./Hero/utils/context";

export default function BlogPage() {
  const { blogs } = useHeroContext();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | Frontend Developer</title>
      </Helmet>
      <Flex direction={"column"}>
        <Flex direction="column">
          <HeaderHTML />
          {/* <Blog /> */}
          <FooterHTML />
        </Flex>
      </Flex>
    </>
  );
}
