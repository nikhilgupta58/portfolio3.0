import React from "react";
import HeroView from "./Hero.view";
import { HeroContext } from "./utils/context";

export default function HeroContainer() {
  return (
    <HeroContext.Provider value={{}}>
      <HeroView />
    </HeroContext.Provider>
  );
}
