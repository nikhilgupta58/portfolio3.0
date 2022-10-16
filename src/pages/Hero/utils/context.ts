import React from "react";

export const HeroContext = React.createContext<any>(null);

export const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (!context)
    throw new Error("useHeroContext can not be used outside it's provider");
  return context;
};
