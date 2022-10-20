import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  client
} from "../utils/contenful";

export default function Project() {
  React.useEffect(() => {
    const posts = client.getEntries({
      content_type: "project",
    });
  }, []);

  return (
    <Flex direction={"column"}>
      <Flex w={"100%"}>
        <>My Portfolio</>
      </Flex>
    </Flex>
  );
}
