import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./theme";
import { Hero } from "./pages/Hero";
import Dashboard from "./pages/Dashboard";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Flex minH={"100vh"} minW="100vw" color={"white"} bgColor="#1d1d1d">
        <Router />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
