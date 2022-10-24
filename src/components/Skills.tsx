import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import HeadTag from "./HeadTag";
import HtmlTag from "./HtmlTag";

export default function Skills() {
  React.useEffect(() => {
    $(document).ready(function () {
      if (
        //@ts-ignore
        !$("#myCanvas").tagcanvas(
          {
            textColour: "#08fdd8",
            outlineColour: "transparent",
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: true,
            activeCursor: "default",
            pinchZoom: false,
            zoomEnabled: false,
          },
          "tags"
        )
      ) {
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
      }
    });
  }, []);
  return (
    <Flex
      w={"100%"}
      alignItems={{ base: "inherit", md: "center" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex direction={"column"} w={{ base: "80%", md: "57%", lg: "50%" }}>
        <HeadTag text="Me, Myself and I" />
        <HtmlTag tag="<p>" ml={{ base: "20px", md: "40px" }} />
        <Text
          fontSize={{ base: "15px", md: "16px" }}
          color={"white"}
          ml={{ base: "30px", md: "60px" }}
          fontWeight={600}
        >
          I’ve been working in the industry for more than a year, and I’ve seen
          some pretty amazing things. But the most important thing is that I’ve
          been able to do what I love every day. <br />A selection of my latest
          work is displayed here.
        </Text>
        <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
      </Flex>
      <Flex
        position="relative"
        w={{ base: "100%", md: "43%", lg: "50%" }}
        h={{ base: "400px", md: "400px", lg: "600px" }}
      >
        {/* <Flex
          position={"absolute"}
          width="100%"
          height={"100%"}
          opacity="0"
          //   zIndex={10}
        /> */}
        <Globle />
      </Flex>
    </Flex>
  );
}

const Globle = () => {
  return (
    <div id="myCanvasContainer">
      <canvas
        id="myCanvas"
        width={"600"}
        height="600"
        // style={{ width: "100%", height: "100%" }}
      >
        <ul id="tags">
          <li>
            <a href="#" target="_blank" onClick={() => {}}>
              HTML
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              CSS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              ES5
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              TypeScript
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              REST
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Figma
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              JSON
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              React Js
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Next Js
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              GraphQL
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Chakra UI
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              React Query
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Node JS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Git
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Redux
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              npm
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              yarn
            </a>
          </li>
        </ul>
      </canvas>
    </div>
  );
};
