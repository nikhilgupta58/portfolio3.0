import { Flex } from "@chakra-ui/react";
import FooterHTML from "./FooterHTML";

export default function Contact() {
  return (
    <Flex w={"100%"} height="100vh">
      <Flex w={"50%"}>
        <FooterHTML />
      </Flex>
      <Flex w={"50%"} height="100%"></Flex>
    </Flex>
  );
}
