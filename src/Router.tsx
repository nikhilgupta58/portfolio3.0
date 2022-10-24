import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Dashboard from "./pages/Dashboard";
import { Hero } from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import SkillPage from "./pages/SkillPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/skill">
          <SkillPage />
        </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
        {/* <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
        <Route path={"*"}>
          <Hero>
            <Flex justifyContent={"center"} alignItems="center" h="100vh">
              <Image src="/not-found.svg" w={"60%"} h={"60%"} />
            </Flex>
          </Hero>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
