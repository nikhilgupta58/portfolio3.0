import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IProp extends TextProps {
  tag: string;
}

export default function HtmlTag({ tag, ...props }: IProp) {
  return (
    <Text
      color={"#515A5A"}
      fontFamily={`'Caveat', cursive;`}
      fontSize={{
        base: "20px",
        xs: "22px",
        sm: "23px",
        md: "24px",
        lg: "25px",
        xl: "25px",
      }}
      {...props}
    >
      {tag}
    </Text>
  );
}
