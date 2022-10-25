import { useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";
import { client } from "../../utils/contenful";
import { getFileLink } from "../../utils/lib";
import { IBlogField, IBlogProp, IBlogs } from "../../utils/type";
import HeroView from "./Hero.view";
import { HeroContext } from "./utils/context";

export default function HeroContainer() {
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

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

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

  const [blogs, setBlogs] = React.useState<IBlogProp[]>([]);

  React.useEffect(() => {
    (async () => {
      const posts: IBlogs | any = await client.getEntries({
        content_type: "blogs",
      });
      let blogs: any[] = [];
      posts?.items?.map((row: IBlogField) => {
        const item: any = {};
        const title: any = row.fields.title;
        let title_Val = "";
        title.content.map((e: any) => {
          e.content.map((row: any) => {
            title_Val += row.value;
          });
        });

        const desc: any = row.fields.description;
        let desc_Val = "";
        desc.content.map((e: any) => {
          e.content.map((row: any) => {
            desc_Val += row.value;
          });
        });
        const images: string[] = [];
        item["id"] = row.fields.id;
        item["title"] = title_Val;
        item["description"] = desc_Val;
        item["preview"] = getFileLink(
          row.fields.preview.sys.id,
          posts.includes.Asset
        );
        blogs.push(item);
      });
      blogs = blogs.sort(function (a, b) {
        return a.id - b.id;
      });
      setBlogs(blogs);
    })();
  }, []);

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
        isThinkingOpen,
        onThinkingClose,
        onThinkingOpen,
        blogs,
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
