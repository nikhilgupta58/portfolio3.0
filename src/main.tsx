import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Hero } from "./pages/Hero";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex minH={"100vh"} minW="100vw" color={"white"} bgColor="#1d1d1d">
          <Hero />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
