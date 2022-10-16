import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";

export default function HeroView() {
  return (
    <Flex w={"100vw"} minH="100vh" overflowX={"hidden"}>
      <Sidebar />
      <Flex w="100%" height={"2000px"} bgColor="background" />
    </Flex>
  );
}
