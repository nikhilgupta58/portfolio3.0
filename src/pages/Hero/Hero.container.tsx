import React, { useRef } from "react";
import HeroView from "./Hero.view";
import { HeroContext } from "./utils/context";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { SiHashnode } from "react-icons/si";
import { useDisclosure } from "@chakra-ui/react";
export default function HeroContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const Menu = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "My Skills",
      path: "/skill",
    },
    {
      title: "Work",
      path: "/portfolio",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const socialMedia = [
    {
      img: RiLinkedinFill,
      onClick: () => {
        window.open(
          "https://www.linkedin.com/in/nikhil-kumar-gupta-827682b4/",
          "_blank"
        );
      },
    },
    {
      img: IoLogoGithub,
      onClick: () => {
        window.open("https://github.com/nikhilgupta58", "_blank");
      },
    },
    {
      img: SiHashnode,
      onClick: () => {
        window.open("https://nikhilkumargupta.hashnode.dev/", "_blank");
      },
    },
  ];
  const audioRef = useRef<any>(null);
  const [playAudio, setPlayAudio] = React.useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isThinkingOpen,
    onClose: onThinkingClose,
    onOpen: onThinkingOpen,
  } = useDisclosure();

  const play = () => {
    audioRef.current.play();
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  React.useEffect(() => {
    if (audioRef?.current) {
      if (playAudio) play();
      else stop();
    }
  }, [playAudio, audioRef]);

  return (
    <HeroContext.Provider
      value={{
        Menu,
        socialMedia,
        isOpen,
        onClose,
        onOpen,
        playAudio,
        setPlayAudio,
        children,
        isThinkingOpen,
        onThinkingClose,
        onThinkingOpen,
      }}
    >
      <HeroView />
      <audio
        ref={audioRef}
        src="/audio.mp3"
        controls
        style={{ display: "none" }}
      />
    </HeroContext.Provider>
  );
}
