import { Flex } from "@chakra-ui/react";
import getRandomColor from "../utils/lib";
import { IBlogProp } from "../utils/type";

export default function BlogBox({ data }: { data: IBlogProp }) {
  const color = getRandomColor();

  return (
    <Flex w={"100%"} height="200px" borderTop={`2px solid ${color}`}>
      sdlm
    </Flex>
  );
}
