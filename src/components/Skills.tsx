import { Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import HeadTag from "./HeadTag";
import HtmlTag from "./HtmlTag";
import ScrollDown from "./ScrollDown";

export default function Skills() {
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
      p={{ base: "10px 0px", xl: "20px 40px" }}
      position="relative"
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
          I am a <span style={{ color: "#08FDD8" }}>front-end developer</span>{" "}
          with a strong understanding of HTML, CSS, and Javascript. I have
          experience in React and Redux as well.
          <br /> <br />I am passionate about the web and I love to create things
          that people can use on the internet.
          <br />
          <br />I currently work remotely with a amazing team and open for new
          opportunities.
        </Text>
        <HtmlTag tag="</p>" ml={{ base: "20px", md: "40px" }} />
      </Flex>
      <Flex
        position="relative"
        w={{ base: "100%", md: "43%", lg: "50%" }}
        h={{ base: "400px", md: "400px", lg: "600px" }}
        ref={skillBoxRef}
      >
        <Globle />
      </Flex>
      <Flex position={"absolute"} w="100%" bottom={-20} left={0}>
        <ScrollDown />
      </Flex>
    </Flex>
  );
}

export const Globle = () => {
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
            maxSpeed: 0.07,
            weight: true,
            activeCursor: "default",
            pinchZoom: false,
            zoomEnabled: false,
            clickToFront: true,
            initial: [0.05, -0.1],
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
    <div id="myCanvasContainer">
      <canvas
        id="myCanvas"
        width={"600"}
        height="600"
        onWheel={(e) => e.preventDefault()}
      >
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
