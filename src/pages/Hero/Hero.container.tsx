import React, { useRef } from "react";
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
  const audioRef = useRef<any>(null);
  const [playAudio, setPlayAudio] = React.useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

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
