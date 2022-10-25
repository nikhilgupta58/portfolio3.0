import { Flex } from "@chakra-ui/react";
import getRandomColor from "../utils/lib";
import { IBlogProp } from "../utils/type";

export default function BlogBox({ data }: { data: IBlogProp }) {
  const color = getRandomColor();

  return (
    <Flex
      w={"100%"}
      height="200px"
      borderTop={`2px solid ${color}`}
      p="30px 30px 25px"
      boxShadow={
        "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)"
      }
      bg="#1d1d1d"
    ></Flex>
  );
}
