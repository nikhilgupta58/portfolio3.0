import { Flex, Text, Image } from "@chakra-ui/react";
import getRandomColor from "../utils/lib";
import { IBlogProp } from "../utils/type";

export default function BlogBox({ data }: { data: IBlogProp }) {
  const color = getRandomColor();

  return (
    <Flex
      w={"100%"}
      borderTop={`2px solid ${color}`}
      p="30px 30px 25px"
      boxShadow={
        "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)"
      }
      bg="#1d1d1d"
      direction={"column"}
      onClick={() => {
        window.open(data.link, "_blank");
      }}
      cursor="pointer"
    >
      <Text
        color={color}
        fontSize="13px"
        pb={"10px"}
        m="0"
        px={0}
        fontWeight="700"
        lineHeight="20px"
        letterSpacing={"0.1em"}
      >
        {data.category.toUpperCase()}
      </Text>
      <Text
        color={"white"}
        fontSize="26px"
        pb={"10px"}
        m="0"
        px={0}
        fontWeight="500"
        letterSpacing={"0.04em"}
        lineHeight="28px"
        noOfLines={2}
      >
        {data.title}
      </Text>
      <Text
        color={"#a7a7a7"}
        lineHeight="22px"
        fontSize="15px"
        py={"0px"}
        m="15px 0 20px"
        px={0}
        fontWeight="500"
        letterSpacing={"0.02em"}
        noOfLines={2}
      >
        {data.description}
      </Text>
      <Flex>
        <Image src={data.preview} />
      </Flex>
    </Flex>
  );
}
