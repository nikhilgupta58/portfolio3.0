import { Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
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
  const skillBoxRef = useRef<any>(null);
  React.useEffect(() => {
    if (skillBoxRef?.current) {
      const width = skillBoxRef.current.clientWidth;
      const height = skillBoxRef.current.clientHeight;
      const canvas: any = document.getElementById("myCanvas");
      canvas.width = width;
      canvas.height = height;
    }
  }, [skillBoxRef]);
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
        ref={skillBoxRef}
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
      <canvas id="myCanvas" width={"600"} height="600">
        <ul id="tags">
          <li>
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              onClick={() => {}}
            >
              HTML
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/css/" target="_blank">
              CSS
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/js/js_es5.asp" target="_blank">
              ES5
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>
          </li>
          <li>
            <a href="https://restfulapi.net/" target="_blank">
              REST
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/" target="_blank">
              Figma
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/js/js_json_intro.asp"
              target="_blank"
            >
              JSON
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank">
              React Js
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank">
              Next Js
            </a>
          </li>
          <li>
            <a href="https://graphql.org/" target="_blank">
              GraphQL
            </a>
          </li>
          <li>
            <a href="https://chakra-ui.com/" target="_blank">
              Chakra UI
            </a>
          </li>
          <li>
            <a
              href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
              target="_blank"
            >
              React Query
            </a>
          </li>
          <li>
            <a href="https://v5.reactrouter.com/" target="_blank">
              React Router
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en/" target="_blank">
              Node JS
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/" target="_blank">
              Git
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a
              href="https://redux.js.org/introduction/getting-started"
              target="_blank"
            >
              Redux
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/" target="_blank">
              npm
            </a>
          </li>
          <li>
            <a href="https://yarnpkg.com/" target="_blank">
              yarn
            </a>
          </li>
        </ul>
      </canvas>
    </div>
  );
};
