import { Flex } from "@chakra-ui/react";
import BgTag from "./BgTag";

export default function Blog() {
  return (
    <Flex
      w={"100%"}
      alignItems={{ base: "inherit", md: "center" }}
      direction={{ base: "column", md: "row" }}
      position="relative"
      p={{ base: "10px 0px", xl: "20px 40px" }}
    >
      <BgTag text="BLOG" left={0} top={0} />
    </Flex>
  );
}
