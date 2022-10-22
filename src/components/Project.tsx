import {
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { client } from "../utils/contenful";
import { getFileLink } from "../utils/lib";
import { IProjectField, IProjectProp, IProjects } from "../utils/type";
import HeadTag from "./HeadTag";
import HtmlTag from "./HtmlTag";
import ProjectModal from "./ProjectModal";

export default function Project() {
  const [projects, setProjects] = React.useState<IProjectProp[]>([]);
  const [hover, setHover] = React.useState(-1);
  React.useEffect(() => {
    (async () => {
      const posts: IProjects | any = await client.getEntries({
        content_type: "projects",
      });
      let projects: any[] = [];
      posts?.items?.map((row: IProjectField) => {
        const item: any = {};
        const images: string[] = [];
        item["id"] = row.fields.id;
        item["name"] = row.fields.name;
        item["link"] = row.fields.link;
        item["hoverText"] = row.fields.hoverText;
        item["preview"] = getFileLink(
          row.fields.preview.sys.id,
          posts.includes.Asset
        );
        row.fields.images.map((row) => {
          images.push(getFileLink(row.sys.id, posts.includes.Asset));
        });
        item["images"] = images;
        projects.push(item);
      });
      projects = projects.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log(projects);
      setProjects(projects);
    })();
  }, []);
  const [item, setItem] = React.useState<IProjectProp | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
      >
        {projects.map((row, id) => (
          <GridItem
            key={id}
            overflow="hidden"
            cursor={"pointer"}
            onClick={() => {
              setItem(row);
              onOpen();
            }}
          >
            <Flex
              opacity={0.5}
              onMouseOver={() => setHover(id)}
              onMouseOut={() => setHover(-1)}
              as={motion.div}
              transform="scale(1)"
              animate={
                hover == id ? { opacity: 1, transform: "scale(1.3)" } : {}
              }
              position="relative"
            >
              <Image src={row.preview} />
              <Flex
                bgColor={"cyan"}
                color="#1f1f1f"
                borderRadius={"999px"}
                position="absolute"
                top={"50%"}
                left={"50%"}
                justifyContent="center"
                alignItems={"center"}
                w={{
                  base: "60px",
                  xs: "80px",
                  sm: "80px",
                }}
                h={{
                  base: "60px",
                  xs: "85px",
                  sm: "80px",
                }}
                transform={"translate(-50%,-50%)"}
                fontSize={{
                  base: "9px",
                  xs: "10px",
                }}
                letterSpacing="0.02em"
                lineHeight={{
                  base: "10px",
                  xs: "11px",
                }}
                as={motion.div}
                opacity="0"
                animate={
                  hover == id
                    ? { opacity: 1 }
                    : { opacity: 0, transition: { duration: 0.1 } }
                }
              >
                <Text
                  textAlign={"center"}
                  dangerouslySetInnerHTML={{ __html: row.hoverText }}
                />
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      {item && <ProjectModal data={item} isOpen={isOpen} onClose={onClose} />}
    </>
  );
}
