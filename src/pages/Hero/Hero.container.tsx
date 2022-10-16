import React from "react";
import HeroView from "./Hero.view";
import { HeroContext } from "./utils/context";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { SiHashnode } from "react-icons/si";
import { useDisclosure } from "@chakra-ui/react";
export default function HeroContainer() {
  const Menu = [
    {
      title: "About",
    },
    {
      title: "My Skills",
    },
    {
      title: "Work",
    },
    {
      title: "Contact",
    },
    {
      title: "Blog",
    },
  ];
  const socialMedia = [
    {
      img: RiLinkedinFill,
      onClick: () => {},
    },
    {
      img: IoLogoGithub,
      onClick: () => {},
    },
    {
      img: SiHashnode,
      onClick: () => {},
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <HeroContext.Provider
      value={{ Menu, socialMedia, isOpen, onClose, onOpen }}
    >
      <HeroView />
    </HeroContext.Provider>
  );
}
